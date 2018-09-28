import axios from 'axios';
import User from './../repository/User';

class UserService {

    updateUser(u) {
        axios.request({
            method: 'POST',
            url: 'http://localhost:8080/user/update',
            data: u
        }).then(res => {
            this.props.history.push('/')
        }).catch(err => console.log(err));
    }

    addAditionalInformation(ai) {
        ai.idUsuario = User.getIdUser();
        axios.request({
            method: 'POST',
            url: 'http://localhost:8080/icomp/add',
            data: ai
        }).then(res => {
            this.props.history.push('/')
        }).catch(err => console.log(err));
    }

    getAllAditionalInformation() {
        return this.sendParam('getAi', User.getIdUser());
    }

    getUserInformations() {
        return this.sendParam('gbi',User.getIdUser(),'user');
    }

    sendParam(method, data, service = 'userservice') {
        return new Promise(function (resolve) {
            axios.get('http://localhost:8080/'.concat(service).concat('/'.concat(method).concat('/').concat(data)))
                .then(response => {
                    resolve(response);
                }, err => console.log(err));
        });
    }

}

export default (new UserService());
