export default class Likes {
    constructor() {
        this.likes = [];
    }

    addLike(item) {
        const id = item.id;
        const title = item.title;
        const author = item.author;
        const img = item.img;

        const like = {
            id, title, author, img
        };
        this.likes.push(like);

        // Local Storage
        this.persistData();

        return like;
    }

    deleteLike(id) {
        const index = this.likes.findIndex(cur => cur.id === id);
        this.likes.splice(index, 1);

        // Local Storage
        this.persistData();

    }

    isLiked(id) {
        return this.likes.findIndex(cur => cur.id === id) !== -1;
    }

    getNumLikes() {
        return this.likes.length;
    }

    persistData() {
        localStorage.setItem('likes', JSON.stringify(this.likes));
    }

    readStorage() {
        const storage = JSON.parse(localStorage.getItem('likes'));
        if (storage) {
            // Restore likes from localStorage
            this.likes = storage ;
        }
    }
}