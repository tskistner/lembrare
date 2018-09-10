import axios from 'axios';

export default class BookService {

    getBooks() {
        return new Promise(function (resolve, reject) {
            axios.get('http://localhost:8080/Allbook')
                .then(response =>
                    resolve(response),
                    () => reject(this.state))
        });
    }
}
