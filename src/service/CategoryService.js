import axios from 'axios';
import FileService from './FileService';
import User from './../repository/User';

class CategoryService {

    getCategoryLevel() {
        return this.send('getLevel');
    }

    getRandomExerciseByLevel(idCategory) {
        return this.sendParam('randomExerciseByLevel', User.getIdUser() + '/' + idCategory);
    }

    getCategories() {
        return this.send('categories');
    }

    getImageExcercise(idExercicio) {
        return this.sendParam('imageExcercise',idExercicio);
    }

    updateLevel(ieUp, idCategory, idExercicio) {
        const parametros = {
            ID_USUARIO: User.getIdUser(),
            ID_CATEGORIA: idCategory,
            ID_EXERCICIO: idExercicio,
            IE_OPCAO: ieUp ? 'U' : 'D'
        };
        return this.sendParam('updateLevel', parametros);
    }

    send(method) {
        return new Promise(function (resolve, reject) {
            axios.get('http://localhost:8080/activitiesservice/' + method)
                .then(response => resolve(response),
                    () => reject('error ' + method));
        });
    }

    sendParam(method, data) {
        return new Promise(function (resolve, reject) {
            axios.get('http://localhost:8080/activitiesservice/'.concat(method).concat('/').concat(data))
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