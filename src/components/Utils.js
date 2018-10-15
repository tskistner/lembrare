import { AlertBox } from './';

class Utils {

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

    validate(id, correctAnswer, ieReport) {
        return new Promise((resolve, reject) => {
            const attribute = document.querySelector('input[name="'.concat(id).concat('"]:checked'));
            if (!attribute) {
                AlertBox.show('<p> Favor escolher uma opção! </p>');
                reject();
            } else {
                const dsReport = '<p>Caso queira relatar alguma informação referente a esta atividade, pressione o botão "Relatório". </p>'
                .concat('<p> Caso contrário, pressione o botão "OK" </p>');
                if (attribute.value === '0') {
                    AlertBox.show('<p>Parabéns!</p><p>Resposta correta!</p>'.concat(dsReport), ieReport)
                        .then(response => resolve({ATRIBUTE: attribute.value, BUTTON: response}));
                } else {
                    AlertBox.show('<p>Desculpe, a resposta está incorreta.</p>'
                        .concat('<p>Resposta correta: ').concat(correctAnswer).concat('</p>').concat(dsReport)
                        , ieReport)
                        .then(response => resolve({ATRIBUTE: attribute.value, BUTTON: response}));
                }
            }
        });
    }

}

export default (new Utils());