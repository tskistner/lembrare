import axios from 'axios';

export default class CategoryService {

    getCategoryLevel() {
        return new Promise(function (resolve, reject) {
            resolve(1);
            /*axios.get('http://localhost:8080/Allbook')
                .then(response =>
                    resolve(response),
                    () => reject(this.state))*/
        });
    }
}
