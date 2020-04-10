// BUDGET CONTROLLER
const budgetController = (() => {

    class Expense {
        constructor(id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
            this.percentage = -1;
        }

        // Don't use arrow function on Method function
        // Here we cannot use arrow as it will then point to this global and not object 
        // Maybe in class it will work
        calcPercentage = (totalExp) => {
            if (totalExp > 0)
                this.percentage = Math.round((this.value / totalExp) * 100);
            else
                this.percentage = -1;
        }

        getPercentage = () => {
            return this.percentage;
        }
    }

    class Income {
        constructor(id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
        }
    }

    const calculateTotal =  type => {
        
        let values = data.allItems[type].map( cur => cur.value);
        const sum = values.reduce((prev,cur) => prev+cur,0);
        // Using reduce to find sum
        data.totals[type] = sum;
        return sum;
    }

    let data = {
        allItems: {
            exp: [],
            inc: [],
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    }

    return {
        addItem: input => {
            let newItem, ID;
            const type = input.type;
            const description = input.description;
            const value = input.value;

            ID = 0;
            // Create new id
            if (data.allItems[type].length > 0)
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;

            // Create new item based upon 'inc' or 'exp'
            if (type === 'exp')
                newItem = new Expense(ID, description, value);
            if (type === 'inc')
                newItem = new Income(ID, description, value);

            // Push it into data
            data.allItems[type].push(newItem);

            // Return new item
            return newItem;
        },

        deleteItem:(type, id) => {
            let ids, index;
            // Map gives us array
            ids = data.allItems[type].map(current => current.id);
            // Getting index
            index = ids.indexOf(id);
            // Delete that index item

            if (index !== -1)
                data.allItems[type].splice(index, 1);
        },

        getData: () => {
            return data;
        },

        getTypes: () => {
            return { exp: Expense, inc: Income };
        },

        calculateBudget: () => {

            // Calculate total income and expenses
            let totalExp, totalInc;
            totalExp = calculateTotal('exp');
            totalInc = calculateTotal('inc');

            // Calculate budget : income - expenses
            // data.budget = data.totals.inc - data.totals.exp;
            data.budget = totalInc - totalExp;

            // Calculate percentage of expenses as of income
            data.percentage = (totalInc > 0) ? Math.round((totalExp / totalInc) * 100) : -1;
    
        },

        calculatePercentages: () => {

            data.allItems.exp.forEach(current => current.calcPercentage(data.totals.exp));
        },

        getPercentages: () => {

            var percentages;
            percentages = data.allItems.exp.map(current => current.getPercentage());
            return percentages;
        },

        getBudget:  () => {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        }
    };

}
)();
