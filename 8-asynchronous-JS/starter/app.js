/*********************
    Event Loop
*/

/*
const second = () => {
    setTimeout(() => {
        console.log('How are you');
    }, 2000);
    // It don't stop second function to stop its execution

};

// Daemon Thread - Prevent parent to stop its execution
// Non daemon Thread - Stop executing when parent stops its exection

const first = () => {
    console.log('Hey There');
    second();
    console.log('Are you fine?');
};

first();

// Event Loop

// Allow asynchronous function to run in background
// We pass in callback function that run once the function finished its work
*/

/*
 Web API
 setTimeout(),DOM events,XMLHttpRequest() for AJAX
 Javascript run time

 setTimeout() run on Web API and javascript engine can proceed further
 Then after time is ended callback function is moved to message queue
 which is then proceeded by event loop
 */
// Function of event loop - MOnitor message queue and execution stack
// And put function on execution stack as soon as stack is empty

/**********************
 Callback Hell
 */

// Recipre Reader
/*
function getRecipe() {
    setTimeout(() => {
        const recipeID = [523, 883, 432, 974];
        console.log(...recipeID);

        setTimeout(id => {
            const recipe = { title: 'Fresh Tomato pasta', publisher: 'Jonas' };
            console.log(`${id} :  ${recipe.title}`);

            setTimeout(publisher => {
                const recipe = { title: 'Italian Pizza', publisher: 'Jonas' };
                console.log(`${recipe.publisher} :  ${recipe.title}`);

            }, 1500, recipe.publisher)

        }, 1500, recipeID[2]);

    }, 1500);
}

getRecipe();
*/

// ES6
/********************
 Promises
*/
/*
// Object that keep track whether certain event has happened or not
// Determines what happens after event has happened
// Implements concept of future value that we're excepting

// Pending - Settled/Resolved - Fulfilled or Rejected

const getIDs = new Promise((resolve,reject) => {

    setTimeout(()=>{
        const recipeID = [523, 883, 432, 974];
        resolve(recipeID);
    },1500);

});
// Passing executor function which will be called immediately
// Takes argument callback function - resolve,reject

// In order to consume promise we can call then and catch method on promise
// It will always have result of successful promse

    const getRecipe = recID => {
        return new Promise((resolve,reject) => {

            setTimeout((ID) => {
                const recipe = { title: 'Fresh Tomato pasta', publisher: 'Jonas' };
                resolve(recipe)
            },1500,recID);
        
        });
    };

    const getRelated = publisher => {
        return new Promise((resolve,reject) => {

            setTimeout(pub => {
                const recipe = { title: 'Italian Pizza', publisher: 'Jonas' };
                resolve(recipe);
            },1500,publisher);
        });
    };

    getIDs.then(IDs => {
        console.log(...IDs);
        return getRecipe(IDs[2]);
    })
    .then(recipe => {
        console.log(`${recipe.publisher} :  ${recipe.title}`);
        return getRelated(recipe.publisher);
    })
    .then(related => {
        console.log(`${related.publisher} :  ${related.title}`);
    })
    .catch(error => {
        console.log(error);
    });

// Reject and Resolve are actually just function
*/

// ES7
/*******************
    Promises to Async/Await
*/
// Async/Await only help in consuming promises and not producing them
/*
const getIDs = new Promise((resolve, reject) => {

    setTimeout(() => {
        const recipeID = [523, 883, 432, 974];
        resolve(recipeID);
    }, 1500);

});
// Passing executor function which will be called immediately
// Takes argument callback function - resolve,reject

// In order to consume promise we can call then and catch method on promise
// It will always have result of successful promse 

const getRecipe = recID => {
    return new Promise((resolve, reject) => {

        setTimeout((ID) => {
            const recipe = { title: 'Fresh Tomato pasta', publisher: 'Jonas' };
            resolve(recipe)
        }, 1500, recID);

    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {

        setTimeout(pub => {
            const recipe = { title: 'Italian Pizza', publisher: 'Jonas' };
            resolve(recipe);
        }, 1500, publisher);
    });
};
*/

/*
getIDs.then(IDs => {
    console.log(...IDs);
    return getRecipe(IDs[2]);
})
.then(recipe => {
    console.log(`${recipe.publisher} :  ${recipe.title}`);
    return getRelated(recipe.publisher);
})
.then(related => {
    console.log(`${related.publisher} :  ${related.title}`);
})
.catch(error => {
    console.log(error);
});
*/

/*
async function getRecipesAW() {
    // We can have one or more await expressions
    const IDs = await getIDs; // getIDs is promise
    console.log(...IDs);

    const recipe = await getRecipe(IDs[2]); // It return promise
    console.log(`${recipe.publisher} :  ${recipe.title}`);

    const related = await getRelated(recipe.publisher);
    console.log(`${related.publisher} :  ${related.title}`);

    return 'Job Done';
}
*/

// getRecipesAW();

// await stop execution of async function which run in background
// So main code is executed as intented
// In main we synchronously call async function and it run synchronously in background
// And never interfare with main code
/*
const result = getRecipesAW();
// Promise Pending
// It will return promise
console.log(result); 
*/

/*
// Promise Resolved
setTimeout(() => {
    console.log(result);
}, 5000);
// It will return promise as resolved
*/

/*
getRecipesAW().then(result => {
    console.log(result);
});
*/

/*
async function jobDone() {
    const result = await getRecipesAW();
    console.log(result);
}
jobDone();
*/

/**********************
 AJAX - Asynchronous Javascript And Xml
*/
// Allow us to asynchronous communicate to remote server

// Ajax allow us to do simple http request(GET,POST) which will them send back response containing data
// Get - Get data
// Post - Send data

// fetch web API(Application Programming Interface)
// Complex xml HttpRequest interface

// Types of API  Own API or 3rd party API

// Get back is text based object like in js know as JSON (JavaScript Object Notation)
// Different is that json is really just single string and not entire object in js engine

// Using Metaweather Api
/*
function getWeather(woeId){
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeId}/`)
    .then(result => {
        console.log(result);
        // It give Response Object with body of readable stream
        // JSON need to converted to js
        return result.json();
    })
    .then(data => {
        console.log(data);
        const today = data.consolidated_weather[0];
        console.log(`Temperature in ${data.title} stays between ${today.min_temp} and ${today.max_temp}`);
    })  
    .catch(error => {
        console.log('Error');
    });

}
*/

/*
// Where on Earth ID
const woeIdLondon = 44418;
const woeIdBangalore = 2295420

// getWeather(woeIdLondon);
// getWeather(woeIdBangalore);

async function getWeatherAW(woeId) {

    try {
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeId}/`);
        // console.log(result);

        const data = await result.json();
        // console.log(data);

        const today = data.consolidated_weather[0];
        console.log(`Temperature in ${data.title} stays between ${today.min_temp} and ${today.max_temp}`);

        return data;
    }
    catch (error) {
        console.log('Error');
    }
}
*/

// getWeatherAW(woeIdLondon);
// getWeatherAW(woeIdBangalore);

// let dataLondon = getWeatherAW(woeIdLondon);
// let dataBangalore = getWeatherAW(woeIdBangalore);
// This is n't going to work even if you put setTimeout actually we cann't even put setTimeout as we don't know time
// It return Promise

/*
let dataLondon;
getWeatherAW(woeIdLondon).then(data => {
    dataLondon = data;
    console.log(dataLondon)
})
.catch(error => {
    console.log('Error');
});
// console.log(dataLondon);

// It will n't work as it is executed right after
*/

/*
async function getWeather () {
    let dataLondon = await getWeatherAW(woeIdLondon);
    console.log(dataLondon);
}   

getWeather();
*/

// console.log('Main Function is executing');

// Return promise
// No Access Control Allow Origin
// Prevent us to make ajax request to domain different that our own domain

// Cross Origin Resource Sharing (CORS)
// Developer of api that we are requesting from need to implement cors on their server
// Unfortunately,metaweather api don't have cors

// Proxy or to channel request through their own server
// Doing ajax request to own server (where same origin policy don't exit) and the send data to browser

// Proxy - crossorigin.me  or cors-anywhere.herokuapp.com

const southAfrica = 'south-africa';
const india = 'india';
// Using promise
/*
function getCovid(country) {
    fetch(`https://api.covid19api.com/country/${country}/status/confirmed`)
        .then(result => {
            return result.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log('Error');
        })
}

getCovid(india);
*/
// Using async/await

async function getCovidAW(country) {
    const result = await fetch(`https://api.covid19api.com/country/${country}/status/confirmed`);
    // console.log(result);

    const data = await result.json();
    return data;
}

getCovidAW(india)
    .then((data) => {
        // console.log(data);
        const today = data[data.length - 1];
        console.log(`Confirmed Cases - ${today.Cases}`);
    })
    .catch((error) => {
        console.log('Error');
    });

    async function getData(input) {
        const result = await fetch(`url/input`)
        const data = await result.json();
        return data;
    }
    getData(input)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log('Error');
    });
