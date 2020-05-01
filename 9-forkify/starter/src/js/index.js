// Global app controller

// Webpack
// Bundle together js module
// Codesplitting,Loading menu types of asset like sass or images
// Decreasing js bundle size using algorithm called tree shaking

// Babel 
// Convert ES6 back to ES5

/*
Compiling ES6 and newer version (ESnext) down to ES5
Module Bundlers
Task Runners 
External Packages
*/

// Node js and npm ecosystem
// React,Angular,Lodash,jQuery
// Task Automation,Automatic browser reloading,complie js to ES5

/******
  Command Line
*/

/*
 Creating files or directory
*/

// mkdir directoryName
// copy NUL fileName - Make new file

/* 
    Create new file using echo or fsutil
*/
// fsutil file createnew fileName #_of_Byte - Create new empty file
// echo someText > fileName - Create new file with text in it

// type fileName - Display content of that file

// copy fileName directoryName - Copy file 
// move fileName directoryName - Move file

// ALERT - Remove/Delete file permanently
// rm fileName/directoryName - Remove file
// del fileName/directoryName - Delete file
// Difference between rm and del is how they handle directory

// start fileName - To open it in default application

/******
    Node and npm
*/

// node - To tun node on terminal
// node -v  - checking if it is installed
// npm (Node Package Manager) automatically comes with node
// npm --version
// npm -v  - checking if it is installed 

// Create package.json file 
// npm init

// Adding node_modules folder in project from package.json file
// npm install 

// Installing libraries
// npm install webpack --save-dev
// npm uninstall jquery --save

// npm install live-server --global

// npm run scriptName

/*******
    Webpack
*/

// Bundle together module/scripts
// Zero Configuration - src/index.js
// Then dist folder will be created and bundle file in there

// Configuration  

/******
    Model - View - Controller (MVC)
*/

// ES6
// Modules
// Import and Export 
// Default and Named Export

// Default export - Only one things
/*
import str from './models/Search';
console.log(str);

// Named export - Mutliple things
import {add,multiply} from './views/searchView';
import {string as s} from './views/searchView';

import * as searchView from './views/searchView';

console.log(add(2,3));
console.log(multiply(2,3));
console.log(s);

console.log(searchView);

console.log(`Using imported function! ${searchView.add(2,3)} and ${searchView.multiply(2,3)} . ${searchView.string})`);
*/



/********** 
    API Calling
*/
// const proxy = 'https://cors-anywhere.herokuapp.com/';
// Yummly
// fb07adfc99mshd275c2d3c01652dp1fe88djsn2df1162a3381
// https://yummly2.p.rapidapi.com/
/*
fetch(`${proxy}https://yummly2.p.rapidapi.com/feeds/search?FAT_KCALMax=1000&maxTotalTimeInSeconds=7200&allowedAttribute=diet-lacto-vegetarian%252Cdiet-low-fodmap&q=chicken%20soup&start=0&maxResult=18`,
{
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "yummly2.p.rapidapi.com",
        "x-rapidapi-key": "fb07adfc99mshd275c2d3c01652dp1fe88djsn2df1162a3381"
    }
})
.then(result => {
    console.log(result);
    return result.json();
})
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
});
*/

/*
async function getResults()
{
    const result = await fetch(`${proxy}https://yummly2.p.rapidapi.com/feeds/search?FAT_KCALMax=1000&maxTotalTimeInSeconds=7200&allowedAttribute=diet-lacto-vegetarian%252Cdiet-low-fodmap&q=chicken%20soup&start=0&maxResult=18`,
    {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "yummly2.p.rapidapi.com",
            "x-rapidapi-key": "fb07adfc99mshd275c2d3c01652dp1fe88djsn2df1162a3381"
        }
    });
    console.log(result);

    const data = await result.json();
    console.log(data);
}

getResults();
*/

// Recipe
/*
fetch("https://webknox-recipes.p.rapidapi.com/recipes/cuisine", {
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "webknox-recipes.p.rapidapi.com",
		"x-rapidapi-key": "fb07adfc99mshd275c2d3c01652dp1fe88djsn2df1162a3381",
		"content-type": "application/x-www-form-urlencoded"
	},
	"body": {
		"title": "Pork roast with green beans",
		"ingredientList": "3 oz pork shoulder"
	}
})
.then(result => {
    console.log(result);
    return result.json();
})
.then(data => {
    console.log(data);
})
.catch(err => {
	console.log(err);
});
*/


// Recipe - Food - Nutrition
/*
fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer?q=How%20much%20vitamin%20c%20is%20in%202%20apples%253F", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "fb07adfc99mshd275c2d3c01652dp1fe88djsn2df1162a3381"
	}
})
.then(result => {
    console.log(result);
    return result.json();
})
.then(data => {
    console.log(data);
})
.catch(err => {
	console.log(err);
});
*/


// Recipe - Food - Nutrition
/*
async function getResults()
{
    const result = await fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer?q=How%20much%20vitamin%20c%20is%20in%202%20apples%253F", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "fb07adfc99mshd275c2d3c01652dp1fe88djsn2df1162a3381"
        }
    });
    console.log(result);

    const data = await result.json();
    console.log(data);
}

getResults();
*/


import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';

import { elements, renderLoader, clearLoader } from './views/base';

/******
 Global State of App
 - Search Object
 - Current Recipe Object
 - Shopping List
 - Liked Recipes
 */
const state = {};
// Testing
// window.state = state;

/**
Event Listeners
*/
elements.searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', (event) => {
    const btn = event.target.closest('.btn-inline')
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});


/**
    Search Controller
*/
const controlSearch = async () => {

    // Get query from view
    const query = searchView.getInput();

    if (query) {

        // New search object and add it to state
        state.search = new Search(query);

        // Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {
            // Search for recipe
            await state.search.getResults();

            // Render result on UI
            clearLoader();
            searchView.renderResults(state.search.result);
        }
        catch (error) {
            console.log('Error processing search!');
            clearLoader();
        }
    }
};


/**
    Recipe Controller
*/
const controlRecipe = async () => {

    // Get id from url
    const id = window.location.hash.replace('#', '');
    if (id) {

        // Prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        // Highlight selected 
        if (state.search)
            searchView.highlightSelected(id);

        //  Create new Recipe object
        state.recipe = new Recipe(id);

        try {
            // Get recipe data and parseIngredients
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            // Calculate serving and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            // Render recipe
            clearLoader();
            recipeView.renderRecipe(
                state.recipe,
                state.likes.isLiked(id)
            );
            // console.log(state.recipe);
        }
        catch (error) {
            alert('Error processing recipe !');
            clearLoader();
        }
    }
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

/** 
    List Controller
*/

const controlList = () => {
    // Create new list if there is none yet
    if (!state.list)
        state.list = new List();

    // Add each ingredient to list and UI 
    state.recipe.ingredients.forEach(cur => {
        const item = state.list.addItem(cur);
        listView.renderItem(item);
    });
}

// Handle delete and update list item events
elements.shopping.addEventListener('click', event => {
    const id = event.target.closest('.shopping__item').dataset.itemid;

    // Handle delete event
    if (event.target.matches('.shopping__delete,.shopping__delete *')) {
        // Delete from state
        state.list.deleteItem(id);
        // Delete from UI
        listView.deleteItem(id);
    }
    // Handle count update
    if (event.target.matches('.shopping__count-value')) {
        const val = parseFloat(event.target.value, 10);
        if (val >= 0) {
            // Update in state
            state.list.updateCount(id, val);
        }
        else {
            // Update in UI
            event.target.value = 0;
        }
    }
});

/** 
    Like Controller
*/

const controlLike = () => {
    if (!state.likes)
        state.likes = new Likes();
    const currentID = state.recipe.id;

    if (!state.likes.isLiked(currentID)) {
        // User has not yet liked current recipe before

        // Add like to state
        const newLike = state.likes.addLike(state.recipe);

        // Toggle like button
        likesView.toggleLikeBtn(true);

        // Add like to UI List
        likesView.renderLike(newLike);
    }
    else {
        // User has liked current recipe before

        // Remove like from state
        state.likes.deleteLike(currentID)
        // Toggle like button
        likesView.toggleLikeBtn(false);


        // Remove like from UI List
        likesView.deleteLike(currentID);
    }

    likesView.toggleLikeMenu(state.likes.getNumLikes());
};

// Restore liked recipe on page load
window.addEventListener('load', () => {

    state.likes = new Likes();

    // Restore likes
    state.likes.readStorage();

    // Toggle button
    likesView.toggleLikeMenu(state.likes.getNumLikes());

    // Render existing likes
    state.likes.likes.forEach(like => likesView.renderLike(like));
});

// Handling recipe buttons clicks
elements.recipe.addEventListener('click', event => {

    if (event.target.matches('.btn-decrease,.btn-decrease *')) {
        // Decrease button is clicked
        if (state.recipe.servings > 1) {
            state.recipe.updateServings('dec');
            recipeView.updateServingIngredients(state.recipe);
        }
    }
    if (event.target.matches('.btn-increase,.btn-increase *')) {
        // Increase button is clicked
        state.recipe.updateServings('inc');
        recipeView.updateServingIngredients(state.recipe);
    }
    if (event.target.matches('.recipe__btn--add,.recipe__btn--add *')) {
        // Add ingredients to shopping list
        controlList();
    }
    if (event.target.matches('.recipe__love,.recipe__love *')) {
        // Add recipe to Likes list
        controlLike();
    }
});

/*
localStorage
key value pair
setItem()
getItem()
removeItem()
*/

/*
Implement delete button to delete all shopping list item
Implement functionality to manually add item to shopping list
Save shopping list data in local storage
Improve ingredient parsing algorithm
Come up with algorithm for calculating amount of serving
Improve error handling
*/