import React from 'react';
import { ButtonImage, RadioField } from './../../../components';

export default class FormIdentification extends React.Component {

    constructor(props) {
        super(props);
        this.qtActualElements = 0;
        this.qtElements = 8;
        this.updateQtElements = this.updateQtElements.bind(this);
        this.identifyForm = null;
        this.options = null;
        this.state = { identifyForm: null };
    }

    buildOptions() {
        return <RadioField
            idInput={'formIdentification_rg'}
            col={12}
            options={this.options}
            placeholder={''} />;
    }

    updateQtElements() {
        this.qtActualElements++;
        if (this.qtActualElements === this.qtElements) { //selected all right forms
            const options = this.buildOptions();
            this.setState({
                identifyForm: <div>
                    <h3> Qual o objeto formado? </h3>
                    {options}
                    <button>Ok</button>
                </div>
            });
        }
    }

    buildButtons(image, idValueUp) {
        let lines = [];
        for (let i = 0; i < image.length; i++) {
            let l = [];
            for (let j = 0; j < image[i].length; j++) {
                l.push(<ButtonImage
                    idIconImage={i.toString().concat(j)}
                    value={image[i][j]}
                    idValueUp={idValueUp}
                    updateQtElements={this.updateQtElements}
                    key={i.toString().concat(j)}
                />);
            }
            lines.push(<div> {l} </div>);
        }
        return lines;
    }

    getFormValues() {
        const idValueUp = 1;
        const image = [[0, 1, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 0]];
        this.options = [{ OPTION: 'Carinha', VALUE: 1 },
                        { OPTION: 'Coração', VALUE: 2 },
                        { OPTION: 'Árvore', VALUE:3 }];
        return { idValueUp, image };
    }

    render() {
        const { idValueUp, image } = this.getFormValues();
        let lines = this.buildButtons(image, idValueUp);
        const identifyForm = this.state.identifyForm;

        return (
            <div>
                <h2> Escolha as imagens que possuem uma bola </h2>
                <div>
                    {lines}
                </div>
                {identifyForm}
            </div>
        );
    }

}
