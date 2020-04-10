// UI CONTROLLER
const UIController = (function () {

    const DOMstring = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel : '.budget__title--date'
    };

    const format = num => {
        const location = '₹ ';
        // Here we can access these method even though Number is primitive data type
        // It is first converted to object 

        // num = num.toFixed(2); // Making fixed 2 decimal points
        /*
        var numSplit,int,dec;
            numSplit = num.split('.');
            [int,dec] = ...numSplit;

            if(int.length > 3)
            {
                int = int.substr(0,int.length-3)+','+int.substr(int.length-3,3);
            }
            num =  int +'.' +dec;
        */
        num = Math.abs(num);
        const str = location + num.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 }); // Commas 
        return str;
    };

    // Don't need node list as we have from method now
    /*
    const nodeListForEach = list, callback => {
        for (let i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
    };
    */


    return {

        getInput:  () => {
            return {
                type: document.querySelector(DOMstring.inputType).value, // inc or exp
                description: document.querySelector(DOMstring.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstring.inputValue).value)
            };
        },

        addListItem: (item, types) => {

            let html, element;
            // Create HTML string with placeholder text

            if (item instanceof types.inc) {
                element = DOMstring.incomeContainer;
                html = `<div class="item clearfix" id="inc-${item.id}">
                    <div class="item__description">${item.description}</div>
                    <div class="right clearfix">
                    <div class="item__value">+${format(item.value)} </div>
                    <div class="item__delete">
                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                    </div>
                    </div>`;
            }
            if (item instanceof types.exp) {
                element = DOMstring.expensesContainer;
                html = `<div class="item clearfix" id="exp-${item.id}">
                    <div class="item__description" >${item.description}</div >
                    <div class="right clearfix">
                    <div class="item__value">-${format(item.value)}</div>
                    <div class="item__percentage">21%</div>
                    <div class="item__delete">
                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                    </div>
                    </div>`;
            }

            // Insert HTML into dom
            const el = document.querySelector(element);
            el.insertAdjacentHTML('beforeend', html);
            // element.insertAdjacentHTML(position,text);
            /*

            < !--beforebegin -->
                <p>
                <!-- afterbegin -->
                foo
                <!-- beforeend -->
                </p>
            <!--afterend -->

            */


        },

        deleteListItem:  selectorID => {

            const el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },

        clearFields: () => {

            let fields, fieldArr;
            fields = document.querySelectorAll(DOMstring.inputDescription + ', ' + DOMstring.inputValue);
            // Converting list into array
            fieldArr = Array.prototype.slice.call(fields);

            fieldArr.forEach(current => current.value = "");

            fieldArr[0].focus();
        },

        getDOMstring:  () => {
            return DOMstring;
        },

        displayBudget:  budget => {

            const {budget:bug,totalInc,totalExp,percentage} = budget;
            // Destructing Object

            document.querySelector(DOMstring.budgetLabel).textContent = (bug>=0? '+':'-')+format(bug);
            document.querySelector(DOMstring.incomeLabel).textContent = '+'+format(totalInc);
            document.querySelector(DOMstring.expensesLabel).textContent = '-'+format(totalExp);

            document.querySelector(DOMstring.percentageLabel).textContent = (percentage >= 0 && percentage <= 999) ?
                percentage + '%' : '---';
        },

        displayPercentages:  percentages => {

            const fields = document.querySelectorAll(DOMstring.expensesPercLabel);
            // It return nodeList

            const fieldsArr = Array.from(fields);
            // From to convert nodeList into Array
            
            fieldsArr.forEach((current,index) => {
                current.textContent = (percentages[index] >= 0 && percentages[index] <= 999) ?  
                percentages[index] + '%' : current.textContent = '---';
            });
        },

        displayDate: ()=>  {
            let now,month,year;
            now = new Date(); // Don't pass anything it will return today date
            // let christmas = new Date(2016,11,25);
            // Month is zero based
            // let fullDate = now.toLocaleDateString();
            let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
            month = months[now.getMonth()];
            year = now.getFullYear();
            document.querySelector(DOMstring.dateLabel).textContent = month+' '+year;
        },

        changedType: () => {
            
            let fields = document.querySelectorAll(
                DOMstring.inputType + ',' +
                DOMstring.inputDescription + ',' +
                DOMstring.inputValue);
            
            const fieldsArr = Array.from(fields);

            fieldsArr.forEach(cur => cur.classList.toggle('red-focus'));
            document.querySelector(DOMstring.inputBtn).classList.toggle('red');
            
        }


    };

})();

