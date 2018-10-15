import axios from 'axios';

export default class Service {

    sendParam(method, service, data) {
        return new Promise(function (resolve, reject) {
            axios.get(
                'http://localhost:8080/'.concat(service).concat('/').concat(method).concat('/').concat(data))
                .then(response => {
                    resolve(response);
                }, () => reject());
        });
    }

    sendPost(method, service, data) {
        return new Promise(function (resolve, reject) {
            axios.request({
                method: 'POST',
                url: 'http://localhost:8080/'.concat(service).concat('/').concat(method),
                data: data
            }).then(res => {
                resolve(res);
            }).catch(() => reject());
        });
    }

    send(method, service) {
        return new Promise(function (resolve, reject) {
            axios.get('http://localhost:8080/'.concat(service).concat('/').concat(method))
                .then(response => resolve(response),
                    () => reject('error ' + method));
        });
    }
}