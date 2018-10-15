import User from './../repository/User';
import Service from './Service';

class CategoryService extends Service {

    getCategoryLevel() {
        return this.send('getLevel', 'activitiesservice');
    }

    getCategories() {
        return this.send('allCategories', 'activitiesservice');
    }

    getExercise(idCategory, idExercise) {
        return this.sendPost('getExercise', 'activitiesservice',
            { idUsuario: User.getIdUser(), idCategoria: idCategory, idExercicio: idExercise });
    }

    getImageExcercise(idExercise) {
        return this.sendParam('imageExcercise', 'activitiesservice', idExercise);
    }

    updateLevel(data) {
        data.idUsuario = User.getIdUser();
        return this.sendPost('updateLevel', 'activitiesservice', data);
    }

    getAllParents() {
        return this.sendParam('parents', 'icomp', User.getIdUser());
    }
}

export default (new CategoryService());