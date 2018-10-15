import React from 'react';
import { Button } from 'reactstrap';
import { RadioPainted, Utils } from './../../../components';

export default class Calculation extends React.Component {

    constructor() {
        super();
        this.correctAnswer = null;
    }

    getRandomNumber(maxNumber, qtAdd) {
        return Math.floor((Math.random() * maxNumber) + qtAdd);
    }

    getExpression(n1, n2, operation) {
        return n1.toString().concat(operation).concat(n2.toString());
    }

    buildRandomCalculation() {
        const number1 = this.getRandomNumber(10,1);
        const number2 = this.getRandomNumber(10,1);
        let result = [];
        switch (this.getRandomNumber(3,0)) {
            case 0:  // Adição
                result = [ this.getExpression(number1, number2, ' + '), number1 + number2 ];
                break;
            case 1: // Subtração
                result = [ this.getExpression(number1, number2, ' - '), number1 - number2 ];
                break;
            case 2: // Multiplicação
                result = [ this.getExpression(number1, number2, ' * '), number1 * number2 ];
                break;
            default: // Divisão
                result = [ this.getExpression(number1, number2, ' / '), number1 / number2 ];
                break;
        }
        if (result[1] == this.correctAnswer) {
            return this.buildRandomCalculation();
        } 
        return result;
    }

    buildOptions(value) {
        const options = [];

        function addOption(v, i) {
            options.push({
                OPTION: v,
                VALUE: i
            });
        }

        this.correctAnswer = value;
        addOption(value, 0);
        addOption(this.buildRandomCalculation()[1], 1);
        addOption(this.buildRandomCalculation()[1], 2);
        return Utils.shuffle(options);
    }

    componentDidUpdate() {
        //Utils.scrollToExercise();
    }

    render() {

        const expressao = this.buildRandomCalculation();

        const divC = (
            <div>
                <div className='exercise-question default'>
                    {expressao[0]}
                </div>
                <RadioPainted
                    idInput={this.props.id}
                    options={this.buildOptions(expressao[1])}/>
            </div>
        );

        return (
            <div>
                <h1 className='view title' align='center'>Qual o resultado do cálculo abaixo?</h1>
                {divC}
                <div align='center'>
                    <Button onClick={() => this.props.clicks.OK(this.correctAnswer)}>Ok</Button>
                    <Button onClick={this.props.clicks.CANCEL}>Voltar</Button>
                </div>
            </div>
        );
    }

}