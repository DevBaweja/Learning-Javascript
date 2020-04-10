import axios from 'axios';
import { key, proxy } from '../config';


export default class Recipe {

    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
            const recipe = res.data.recipe;

            // console.log(recipe); 

            this.title = recipe.title;
            this.author = recipe.publisher;
            this.img = recipe.image_url;
            this.url = recipe.source_url;
            this.ingredients = recipe.ingredients;
        }
        catch (error) {
            alert('Error in getting Recipe');
        }
    }

    calcTime() {

        // Assuming that we need 15 min for each 3 ingredient
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    }

    calcServings() {
        this.servings = 4;
    }

    parseIngredients() {

        const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds', 'slices','kilograms','kilogram','grams','gram'];
        const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound', 'slice','kg','kg','g','g'];

        const units = [...unitsShort];

        const newIngredients = this.ingredients.map(el => {

            // Uniform units
            let ingredient = el.toLowerCase();
            unitsLong.forEach((unit, i) => {
                ingredient = ingredient.replace(unit, unitsShort[i]);
            });

            // Remove parenthesis
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

            // Parse ingredients into count,unit and ingredients
            const arrIng = ingredient.split(' ');
            const unitIndex = arrIng.findIndex(cur => units.includes(cur));

            let objIng;
            if (unitIndex > -1) {
                // There is unit
                const arrCount = arrIng.slice(0, unitIndex);
                let count;
                if (arrCount.length === 1) {
                    count = eval(arrIng[0].replace('-','+'));
                }
                else {
                    count = eval(arrIng.slice(0,unitIndex).join('+'));
                }
                // Even if count it not found it is set to 1
                if(!count)
                    count = 1;
                objIng = {
                    count,
                    unit: arrIng[unitIndex],
                    ingredient: arrIng.slice(unitIndex + 1).join(' ')
                }
            }
            else if (parseInt(arrIng[0], 10)) {
                // There is no unit but 1st element is number
                objIng = {
                    count: parseInt(arrIng[0], 10),
                    unit: '',
                    ingredient: arrIng.slice(1).join(' ')
                }
            }
            else if (unitIndex == -1) {
                // There is no unit and no number in 1st position
                objIng = {
                    count: 1,
                    unit: '',
                    ingredient
                }
            }

            return objIng;
        });

        this.ingredients = newIngredients;
    }

    updateServings(type){

        // Servings
        let newServings;
        if(type==='dec')
            newServings = this.servings-1;
        if(type === 'inc')
            newServings = this.servings+1;

        // Ingredients
        this.ingredients.forEach(ing => {
            ing.count *= (newServings/this.servings);
        })

        this.servings = newServings;
    }
}