import React from 'react';
import { Button } from 'reactstrap';
import { RadioPainted, Utils } from './../../../components';
import ViewActivity from '../ViewActivity';

export default class Calculation extends React.Component {

    getRandomNumber(maxNumber, qtAdd) {
        return Math.floor((Math.random() * maxNumber) + qtAdd);
    }

    getExpression(n1, n2, operation) {
        return n1.toString().concat(operation).concat(n2.toString());
    }

    buildRandomCalculation() {
        const number1 = this.getRandomNumber(10, 1);
        const number2 = this.getRandomNumber(10, 1);
        let result = [];
        switch (this.getRandomNumber(3, 0)) {
            case 0:  // Adição
                result = [this.getExpression(number1, number2, ' + '), number1 + number2];
                break;
            case 1: // Subtração
                result = [this.getExpression(number1, number2, ' - '), number1 - number2];
                break;
            case 2: // Multiplicação
                result = [this.getExpression(number1, number2, ' X '), number1 * number2];
                break;
            default: // Divisão
                result = [this.getExpression(number1, number2, ' / '), number1 / number2];
                break;
        }
        if (result[1] == Utils.getCorrectAnswer()) {
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

        Utils.setCorrectAnswer(value);
        addOption(value, 0);
        addOption(this.buildRandomCalculation()[1], 1);
        addOption(this.buildRandomCalculation()[1], 2);
        return Utils.shuffle(options);
    }

    render() {

        const expressao = this.buildRandomCalculation();

        const viewExercise = (
            <div>
                <h1 className='view title' align='center'>Qual o resultado do cálculo abaixo?</h1>
                <div className='exercise-question default calculation'>
                    {expressao[0]}
                </div>
            </div>
        );
        return <ViewActivity
            viewExercise={viewExercise}
            options={this.buildOptions(expressao[1])}
            clicks={this.props.clicks}
            id={this.props.id} />;
    }

}