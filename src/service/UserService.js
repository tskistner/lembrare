import User from './../repository/User';
import Service from './Service';

class UserService extends Service {

    /* Usuário */
    loggin(data) {
        return new Promise(resolve => {
            this.sendPost('loggin', 'user', data).then(response => {
                User.setIdUser(response.data.ID_USER);
                User.setNameUser(response.data.NM_USER);
                resolve(response);
            });
        });
    }

    getUser() {
        return this.send('getUser', 'user');
    }

    logout() {
        User.setIdUser(0);
        User.setNameUser('');
        return this.send('logout', 'user');
    }

    /* Familias / Amigos */
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
        return this.sendPost('delete', 'icomp', { ID: id, idUsuario: User.getIdUser() });
    }

    /* Cadastro */
    addUser(u) {
        return this.sendPost('add', 'user', u);
    }

    updateUser(u) {
        return this.sendPost('update', 'user', u);
    }

    updatePassword(data) {
        this.sendPost('upwd', 'user', data);
    }

    getUserInformations() {
        return this.sendParam('uByID', 'user', User.getIdUser());
    }

    updateUserAI(u) {
        return this.sendPost('updateUAI', 'user', u);
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
        return this.sendPost('delete', 'address', { ID: id, idUsuario: User.getIdUser() });
    }

    getAllAddress() {
        return this.sendParam('all', 'address', User.getIdUser());
    }

}

export default (new UserService());
