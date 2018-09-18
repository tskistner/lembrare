import axios from 'axios';
import FileService from './FileService';

class CategoryService {

    getCategoryLevel() {
        return this.send('getLevel');
    }

    getRandomExerciseByLevel(idCategory) {
        const idUser = 1;
        return this.sendParam('randomExerciseByLevel', idUser + '/' + idCategory);
    }

    getCategories() {
        return this.send('categories');
    }

    getImageExcercise(idExercicio) {
        return this.sendParam('imageExcercise',idExercicio);
    }

    send(method) {
        return new Promise(function (resolve, reject) {
            axios.get('http://localhost:8080/service/' + method)
                .then(response => resolve(response),
                    () => reject('error ' + method));
        });
    }

    sendParam(method, data) {
        return new Promise(function (resolve, reject) {
            axios.get('http://localhost:8080/service/'.concat(method).concat('/').concat(data))
                .then(response => {
                    resolve(response);
                }, err => console.log(err));
        });
    }

    uploadFileToServer(data) {
        //returns Promise object
        return FileService.getRestClient().post('/files', data);
    }
}

export default (new CategoryService());