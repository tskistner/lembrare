let idUser;
let nameUser;

export default class User {

    static getIdUser() {
        return idUser;
    }

    static setIdUser(_value) {
        idUser = _value;
    }

    static getNameUser() {
        return nameUser;
    }

    static setNameUser(_value) {
        nameUser = _value;
    }

}