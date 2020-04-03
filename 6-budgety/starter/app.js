// To Do List
/*
Add event handler - Controller 
Get input values - UI
Add new item to data structure - Data
Add new item to UI - UI
calculate Budget - Data
update UI - UI
*/
/*
Add event handler - Controller
Delete item from data - Data
Delete item from UI - UI
Re-calculate budget - Data
Update UI - UI
*/
/*
Calculate Percentages - Data
Update Percentages in UI - UI
Display current month and year - UI
Number formatting - UI
Improve UI input element - UI
*/
// Module Approch
// Data encapsulation - in each of these modules, we'll have variables and functions that are private, which means that
// they are only accessible inside of the module.We want it so that no other code can override our data.
// And beside private variables and methods, we're also gonna have public methods, which means that
// we expose them to the public so that other functions or modules can access and use them. And this is called data encapsulation.

// So data encapsulation allows us to hide the implementation details of a specific module from the outside scope so that 
// we only expose a public interface which is sometimes called an API.

// IIFE - Anonymous function wrapped in parenthesis which is then immediately executed or invoked.

/*
var budgetController = (function(){
    var x = 23;
    var add = function(a){
        return x+a;
    }

    return {
        publicTest : function(b){
            return add(b); // Power of Closure
        },
        anotherPublic : function(b){
            console.log(add(b));
        }
    };

}) ()

budgetController.anotherPublic(10);

// After the function has been executed due to power of closure we can still access variables and methods of outer function
// In this way modules are created and these variables and method can be access only by public methods we return


var UIController = (function(){

    return {};
})();


// Separation of concerns - each part of the application should only be interested in doing one thing independently.

// Although we have access to budgetController and appController in appController as they are of outer scope
// But it is good practice to pass it as argument in case we change name of module later
// Just making appController a little bit independent

var myController = (function(){
    budgetController.anotherPublic(11);
})();

var appController = (function(budgetCtrl,UICtrl){

    var z = budgetCtrl.publicTest(12);
    return {
        anotherPublic : function(){
            console.log(z);
        }
    };

})(budgetController,UIController);

appController.anotherPublic();
*/

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListeners = function () {

        var DOMstring = UICtrl.getDOMstring();

        var btn = document.querySelector(DOMstring.inputBtn);
        btn.addEventListener('click', ctrlAddItem);

        // KeyboardEvent UIEvent Event

        // keydown  , keypress (except Shift, Fn, or CapsLock)  - Any key Fired continously
        // keyup
        var changeType = document.querySelector(DOMstring.inputType);
        document.addEventListener('keypress', function (event) {

            if (event.key === 'Enter' || event.keyCode === 13 || event.which === 13)
                ctrlAddItem();
            if (event.key === '+' && changeType.value !== 'inc')
                {
                    changeType.value = 'inc';
                    UICtrl.changedType();
                }
            if (event.key === '-' && changeType.value !== 'exp')
                {
                    changeType.value = 'exp';
                    UICtrl.changedType();
                }

            // Another way
            // changeType.options[index].selected = true;
        })

        document.querySelector(DOMstring.container).addEventListener('click', ctrlDeleteItem);
        document.querySelector(DOMstring.inputType).addEventListener('change', UICtrl.changedType);     
    }

    var updateBudget = function () {

        var budget;
        // Calculate budget - budgetController
        budgetCtrl.calculateBudget();
        // Return Budget 
        budget = budgetCtrl.getBudget();
        // Display budget - UIController
        UICtrl.displayBudget(budget);
    }

    var updatePercentages = function () {
        var percentages;
        // Calculate percentages - budgetController
        budgetCtrl.calculatePercentages();
        // Return percentages
        percentages = budgetCtrl.getPercentages();
        // Display percentages - UI Controller
        UICtrl.displayPercentages(percentages);
    }

    var ctrlAddItem = function () {

        var input, newItem, types;
        // Get filled input data
        input = UICtrl.getInput();

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            // Add item to budgetController 
            newItem = budgetCtrl.addItem(input);
            types = budgetCtrl.getTypes();

            // Add item to UIController
            UICtrl.addListItem(newItem, types);

            // Clear the fields - UIController
            UICtrl.clearFields();

            // Calculate and Update Budget
            updateBudget();

            // Update and display Percentages
            updatePercentages();
        }
    }

    var ctrlDeleteItem = function (event) {
        var itemID, splitId, type, ID;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if (itemID) {
            // String and Number have access to method
            // However they are primitive when function is called
            // Javascript puts wrapper around them and convert it into Objects
            splitId = itemID.split('-');
            type = splitId[0];
            ID = parseInt(splitId[1]);

            // Delete item from data - budgetController
            budgetCtrl.deleteItem(type, ID);

            // Delete item from UI - UIController
            UICtrl.deleteListItem(itemID);

            // Update and display the new budget
            updateBudget();

            // Update and display the new percentages
            updatePercentages();
        }

    }

    return {
        init: function () {
            console.log('Application has started.');
            UICtrl.displayDate();
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });

            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();

// Event Bubbling - When event is triggered on some DOM element then exactly same event is also triggered  on all of its parent
// event bubble up inside DOM tree

// Target Element - Element on which event was actually fired
// Target element is stored as property in event object

// Event Delegation - If event bubble up in DOM tree and if we know where the event was fired
// Then we can simply attach event handler to parent element and wait for event to bubble up

// When we have an element with lots of child elements that we are interested in. 
// In this case, instead of adding an event handler to all of these child elements, 
// we simply add it to the parent element, and then determine on which child element the event was fired.

// When we want an event handler attached to an element that is not yet in the DOM when our page is loaded.