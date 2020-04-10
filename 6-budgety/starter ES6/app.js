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

// GLOBAL APP CONTROLLER
const controller = ((budgetCtrl, UICtrl) => {

        const setupEventListeners = () => {
        
        const DOMstring = UICtrl.getDOMstring();
        const btn = document.querySelector(DOMstring.inputBtn);
        btn.addEventListener('click', ctrlAddItem);

        // KeyboardEvent UIEvent Event

        // keydown  , keypress (except Shift, Fn, or CapsLock)  - Any key Fired continously
        // keyup

        const changeType = document.querySelector(DOMstring.inputType);
        document.addEventListener('keypress', event => {

            if (event.key === 'Enter' || event.keyCode === 13 || event.which === 13)
                ctrlAddItem();
            
                if (event.key === '+' && changeType.value !== 'inc')
                    {
                        changeType.focus();
                        changeType.value = 'inc';
                        UICtrl.changedType();
                    }
                if (event.key === '-' && changeType.value !== 'exp')
                    {
                        changeType.focus();
                        changeType.value = 'exp';
                        UICtrl.changedType();
                    }
            // Another way
            // changeType.options[index].selected = true;
        })

        document.querySelector(DOMstring.container).addEventListener('click', ctrlDeleteItem);
        document.querySelector(DOMstring.inputType).addEventListener('change', UICtrl.changedType);     
    }

    const updateBudget = () => {

        let budget;
        // Calculate budget - budgetController
        budgetCtrl.calculateBudget();
        // Return Budget 
        budget = budgetCtrl.getBudget();
        // Display budget - UIController
        UICtrl.displayBudget(budget);
    }

    const updatePercentages =  () => {
        let percentages;
        // Calculate percentages - budgetController
        budgetCtrl.calculatePercentages();
        // Return percentages
        percentages = budgetCtrl.getPercentages();
        // Display percentages - UI Controller
        UICtrl.displayPercentages(percentages);
    }

    const ctrlAddItem =  () => {

        let input, newItem, types;
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

    const ctrlDeleteItem = (event) => {
        let itemID, splitId, type, ID;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if (itemID) {
            // String and Number have access to method
            // However they are primitive when function is called
            // Javascript puts wrapper around them and convert it into Objects
            splitId = itemID.split('-');
            [type,ID] = [...splitId];
            // Spread Operator and Destructuring
            ID = parseInt(ID);

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
        init: () => {
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

// We can access objects properties like this also
/*
var allItems = {exp:[],
    inc:[]};

    allItems['inc'] or allItems['exp']
*/