import axios from 'axios';

export default class UserService {

    getBooks() {
        return new Promise(function (resolve, reject) {
            axios.get('http://localhost:8080/AllUsers')
                .then(response =>
                    resolve(response),
                    () => reject(this.state))
        });
    }
}
