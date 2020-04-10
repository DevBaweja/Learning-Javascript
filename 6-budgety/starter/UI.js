// UI CONTROLLER
var UIController = (function () {

    var DOMstring = {
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

    var format = function (num) {
        var location = '₹ ';
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
        var str = location + num.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 }); // Commas 
        return str;
    };

    var nodeListForEach = function (list, callback) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
    };


    return {

        getInput: function () {
            return {
                type: document.querySelector(DOMstring.inputType).value, // inc or exp
                description: document.querySelector(DOMstring.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstring.inputValue).value)
            };
        },
        addListItem: function (item, types) {

            var html, newHtml, element;
            // Create HTML string with placeholder text

            if (item instanceof types.inc) {
                element = DOMstring.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%">' +
                    '<div class="item__description">%description%</div>' +
                    '<div class="right clearfix">' +
                    '<div class="item__value">+%value% </div>' +
                    '<div class="item__delete">' +
                    '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
            }
            if (item instanceof types.exp) {
                element = DOMstring.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%">' +
                    '<div class="item__description" >%description%</div >' +
                    '<div class="right clearfix">' +
                    '<div class="item__value">-%value%</div>' +
                    '<div class="item__percentage">21%</div>' +
                    '<div class="item__delete">' +
                    '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
            }

            // Replace placeholder with actual data
            newHtml = html.replace('%id%', item.id);
            newHtml = newHtml.replace('%description%', item.description);
            newHtml = newHtml.replace('%value%', format(item.value));


            // Insert HTML into dom
            var el = document.querySelector(element);
            el.insertAdjacentHTML('beforeend', newHtml);
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

        deleteListItem: function (selectorID) {

            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },

        clearFields: function () {

            var fields, fieldArr;
            fields = document.querySelectorAll(DOMstring.inputDescription + ', ' + DOMstring.inputValue);
            // Converting list into array
            fieldArr = Array.prototype.slice.call(fields);

            fieldArr.forEach(function (current, index, array) {
                current.value = "";
            });

            fieldArr[0].focus();
        },

        getDOMstring: function () {
            return DOMstring;
        },

        displayBudget: function (budget) {

            document.querySelector(DOMstring.budgetLabel).textContent = (budget.budget>=0? '+':'-')+format(budget.budget);
            document.querySelector(DOMstring.incomeLabel).textContent = '+'+format(budget.totalInc);
            document.querySelector(DOMstring.expensesLabel).textContent = '-'+format(budget.totalExp);

            document.querySelector(DOMstring.percentageLabel).textContent = (budget.percentage >= 0 && budget.percentage <= 999) ?
                budget.percentage + '%' : '---';
        },

        displayPercentages: function (percentages) {

            var fields = document.querySelectorAll(DOMstring.expensesPercLabel);
            // It return nodeList

            nodeListForEach(fields, function (current, index) {
                current.textContent = (percentages[index] >= 0 && percentages[index] <= 999) ?  
                percentages[index] + '%' : current.textContent = '---';
            });
        },

        displayDate: function () {
            var now,month,year;
            now = new Date(); // Don't pass anything it will return today date
            // var christmas = new Date(2016,11,25);
            // Month is zero based
            // var fullDate = now.toLocaleDateString();
            var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
            month = months[now.getMonth()];
            year = now.getFullYear();
            document.querySelector(DOMstring.dateLabel).textContent = month+' '+year;
        },

        changedType: function() {
            
            var fields = document.querySelectorAll(
                DOMstring.inputType + ',' +
                DOMstring.inputDescription + ',' +
                DOMstring.inputValue);
            
            nodeListForEach(fields, function(cur) {
               cur.classList.toggle('red-focus'); 
            });
            
            document.querySelector(DOMstring.inputBtn).classList.toggle('red');
            
        }


    };

})();

