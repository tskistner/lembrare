import { AlertBox } from './';

let correctAnswer;
let idCategory;
let idExercise;

class Utils {

    getDateValue(element) {
        const e = document.getElementById(element);
        if (e) {
            return new Date(e.value);
        }
        return null;
    }

    getValue(element) {
        const e = document.getElementById(element);
        if (e) {
            return e.value;
        }
        return null;
    }

    getRadioValue(element) {
        const e = document.querySelector('input[name="'.concat(element).concat('"]:checked'));
        if (e) {
            return e.value;
        }
        return null;
    }

    getValueCheck(element) {
        const e = document.getElementById(element);
        if (e) {
            return e.checked ? 'S' : 'N';
        }
        return false;
    }

    setValue(element, value) {
        const e = document.getElementById(element);
        if (e) {
            e.value = value;
        }
    }

    setValueRadio(element) {
        const e = document.getElementById(element);
        if (e) {
            e.checked = true;
        }
    }

    setValueCheck(element, value) {
        const e = document.getElementById(element);
        if (e) {
            e.checked = value === 'S';
        }
    }

    scrollToExercise() {
        window.scrollTo(0, document.body.scrollHeight);
    }

    shuffle(arra1) {
        var ctr = arra1.length, temp, index;

        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
        return arra1;
    }

    validate(id) {
        return new Promise((resolve, reject) => {
            const attribute = document.querySelector('input[name="'.concat(id).concat('"]:checked'));
            if (!attribute) {
                AlertBox.show('<p> Favor escolher uma opção! </p>');
                reject();
            } else {
                resolve(attribute.value === '0');
            }
        });
    }

    //Realizar validação de campos obrigatórios
    validateRequiredFields(idDiv) {
        const divMode = document.getElementById(idDiv);
        if (divMode) {
            const requiredAtribs = divMode.querySelectorAll("[required]");
            for (let i = 0; i < requiredAtribs.length; i++) {
                if (!requiredAtribs[i].value) {
                    AlertBox.show('<p align="center">Atenção!</p><p>Todos os campos obrigatórios devem ser preenchidos</p>')
                    return false;
                }
            }
        }
        return true;
    }

    setCorrectAnswer(_value) {
        correctAnswer = _value;
    }

    getCorrectAnswer() {
        return correctAnswer;
    }

    setIdCategory(_value) {
        idCategory = _value;
    }

    getIdCategory() {
        return idCategory;
    }

    setIdExercise(_value) {
        idExercise = {_value};
    }

    getIdExercise() {
        return idExercise;
    }

}

export default (new Utils());