// export default 'I am exported string';
    
import axios from 'axios';
import {key,proxy} from '../config';

export default class Search{
    constructor(query){
        this.query = query;
    }

    // It will return promise 
    // However we are storing result in this object itself so no need of then and catch in app.js
    async getResults() {
        try {
            const queryResult = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            // fetch and json is replaced by axios
            this.result = queryResult.data.recipes;
        }
        catch(error){
            alert('Error in Search Query');
        }
    }
};