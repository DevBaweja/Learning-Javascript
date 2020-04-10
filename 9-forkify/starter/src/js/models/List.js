import uniqid from 'uniqid';
export default class List {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        // const newItem = {id:uniqid(),...item}
        const count = item.count;
        const unit = item.unit;
        const ingredient = item.ingredient;
        
        const newItem = {
            id:uniqid(),
            count,
            unit,
            ingredient
        };
        this.items.push(newItem);
        return newItem;
    }

    deleteItem(id) {
        /*
        slice(start,end) - Don't mutate array
        splice(start,# of element) - Does mutate array
        */
        const index = this.items.findIndex(cur => cur.id === id);
        this.items.splice(index, 1);
    }

    updateCount(id,newCount) {
        this.items.find(cur => cur.id===id).count = newCount;
    }
}