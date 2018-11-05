import React from 'react';
import { ButtonImage, Utils } from './../../../components';
import ViewActivity from '../ViewActivity';

export default class ObjectIdentification extends React.Component {

    constructor(props) {
        super(props);
        this.qtActualElements = 0;
        this.qtElements = 0;
        this.updateQtElements = this.updateQtElements.bind(this);
        this.icon = null;
    }

    buildOptions() {
        const options = this.props.data.ANSWER.split(';;').map((a, i) => {
            if (i === 0) {
                Utils.setCorrectAnswer(a);
            }
            return { OPTION: a, VALUE: i };
        });
        return Utils.shuffle(options);
    }

    updateQtElements() {
        this.qtActualElements++;
        if (this.qtActualElements === this.qtElements) { //selected all right forms
            document.getElementById('bt_next').hidden = false;
        }
    }

    getRandomIcon() {
        const number = Math.floor((Math.random() * 5) + 1);
        switch (number) {
            case 1:
                return [1, 'bola'];
            case 2:
                return [2, 'triângulo'];
            case 3:
                return [3, 'raio'];
            case 4:
                return [4, 'coração'];
            default:
                return [5, 'estrela'];
        }
    }

    buildButtons(idIcon) {
        const desc = this.props.data.DESCRIPTION.split('/');
        this.qtElements = parseInt(desc[0]);
        return desc[1].split(';;').map((line, i) => {
            const divLine = line.split(',').map((l, j) => {
                return <ButtonImage
                    idIconImage={i.toString().concat(j)}
                    value={l}
                    idValueUp={idIcon}
                    updateQtElements={this.updateQtElements}
                    key={i.toString().concat(j)}
                />
            });
            return <div key={i}>{divLine}</div>;
        });
    }

    componentDidMount() {
        document.getElementById('bt_next').hidden = true;
    }

    render() {
        if (!this.icon) {
            this.icon = this.getRandomIcon();
        }

        const viewExercise = (
            <div>
                <h1 className='view title' align='center'>
                    {'Escolha as imagens que possuem um(a) '.concat(this.icon[1]).concat(' e depois identifique o objeto formado.')}
                </h1>
                <div className='exercise-question default'>
                    {this.buildButtons(this.icon[0])}
                </div>
            </div>
        );

        return <ViewActivity
            viewExercise={viewExercise}
            options={this.buildOptions()}
            clicks={this.props.clicks}
            id={this.props.id} />;
    }

}