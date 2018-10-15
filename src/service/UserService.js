import User from './../repository/User';
import Service from './Service';

class UserService extends Service {

    /* Informações adicionais */
    addAditionalInformation(ai) {
        ai.idUsuario = User.getIdUser();
        return this.sendPost('add', 'icomp', ai);
    }

    updateAditionalInformation(ai) {
        ai.idUsuario = User.getIdUser();
        return this.sendPost('update', 'icomp', ai);
    }

    getAllAditionalInformation() {
        return this.sendParam('allAI', 'icomp', User.getIdUser());
    }

    deleteAditionalInformation(id) {
        return this.sendPost('delete', 'icomp', {ID: id, idUsuario: User.getIdUser()});
    }

    /* Usuário */
    updateUser(u) {
        return this.sendPost('update', 'user', u);
    }

    updatePassword(data) {
        this.sendPost('upwd', 'user', data);
    }

    getUserInformations() {
        return this.sendParam('uByID', 'user', User.getIdUser());
    }

    /* Endereço */
    addAddress(data) {
        data.idUsuario = User.getIdUser();
        return this.sendPost('add', 'address', data);
    }

    updateAddres(data) {
        data.idUsuario = User.getIdUser();
        return this.sendPost('update', 'address', data);
    }

    deleteAddress(id) {
        return this.sendPost('delete', 'address', {ID: id, idUsuario: User.getIdUser()});
    }

    getAllAddress() {
        return this.sendParam('all', 'address', User.getIdUser()); 
    }

}

export default (new UserService());
