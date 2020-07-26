// BUDGET CONTROLLER
var budgetController = (function () {
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };
    Expense.prototype.calcPercentage = function (totalExp) {
        if (totalExp > 0) this.percentage = Math.round((this.value / totalExp) * 100);
        else this.percentage = -1;
    };

    Expense.prototype.getPercentage = function () {
        return this.percentage;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function (type) {
        var sum = 0;
        data.allItems[type].forEach(function (current, index, array) {
            sum += current.value;
        });

        data.totals[type] = sum;
        return sum;
    };

    var data = {
        allItems: {
            exp: [],
            inc: [],
        },
        totals: {
            exp: 0,
            inc: 0,
        },
        budget: 0,
        percentage: -1,
    };

    return {
        addItem: function (input) {
            var newItem, ID;
            var type = input.type;
            var description = input.description;
            var value = input.value;

            ID = 0;
            // Create new id
            if (data.allItems[type].length > 0) ID = data.allItems[type][data.allItems[type].length - 1].id + 1;

            // Create new item based upon 'inc' or 'exp'
            if (type === 'exp') newItem = new Expense(ID, description, value);
            if (type === 'inc') newItem = new Income(ID, description, value);

            // Push it into data
            data.allItems[type].push(newItem);

            // Return new item
            return newItem;
        },

        deleteItem: function (type, id) {
            var ids, index;
            // Map gives us array
            ids = data.allItems[type].map(function (current, index, array) {
                return current.id;
            });
            // Getting index
            index = ids.indexOf(id);
            // Delete that index item

            if (index !== -1) data.allItems[type].splice(index, 1);
        },

        getData: function () {
            return data;
        },

        getTypes: function () {
            return { exp: Expense, inc: Income };
        },

        calculateBudget: function () {
            // Calculate total income and expenses
            var totalExp, totalInc;
            totalExp = calculateTotal('exp');
            totalInc = calculateTotal('inc');

            // Calculate budget : income - expenses
            // data.budget = data.totals.inc - data.totals.exp;
            data.budget = totalInc - totalExp;

            // Calculate percentage of expenses as of income
            if (totalInc > 0) data.percentage = Math.round((totalExp / totalInc) * 100);
            else data.percentage = -1;
        },

        calculatePercentages: function () {
            data.allItems.exp.forEach(function (current) {
                current.calcPercentage(data.totals.exp);
            });
        },

        getPercentages: function () {
            var percentages;
            percentages = data.allItems.exp.map(function (current) {
                return current.getPercentage();
            });
            return percentages;
        },

        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage,
            };
        },
    };
})();
