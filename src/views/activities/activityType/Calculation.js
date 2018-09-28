import React from 'react';
import { RadioPainted } from './../../../components';

export default class Calculation extends React.Component {

    getRandomNumber(maxNumber, qtAdd) {
        return Math.floor((Math.random() * maxNumber) + qtAdd);
    }

    getExpression(n1, n2, operation) {
        return n1.toString().concat(operation).concat(n2.toString());
    }

    buildRandomCalculation() {
        const number1 = this.getRandomNumber(10,1);
        const number2 = this.getRandomNumber(10,1);
        switch (this.getRandomNumber(3,0)) {
            case 0:  // Adição
                return [ this.getExpression(number1, number2, ' + '), number1 + number2 ];
            case 1: // Subtração
                return [ this.getExpression(number1, number2, ' - '), number1 - number2 ];
            case 2: // Multiplicação
                return [ this.getExpression(number1, number2, ' * '), number1 * number2 ];
            case 3: // Divisão
                return [ this.getExpression(number1, number2, ' / '), number1 / number2 ];
        }   
    }

    buildOptions(value) {
        const options = [];

        function addOption(v, i) {
            options.push({
                OPTION: v,
                VALUE: i
            });
        }

        addOption(value, 3);
        addOption(this.buildRandomCalculation()[1], 1);
        addOption(this.buildRandomCalculation()[1], 2);
        return options.sort();
    }

    render() {

        const expressao = this.buildRandomCalculation();

        const divC = (
            <div>
                <div className='exercise-question default'>
                    {expressao[0]}
                </div>
                <RadioPainted
                    idInput='calculation_rg'
                    col={8}
                    options={this.buildOptions(expressao[1])}
                    painted={true} />
            </div>
        );

        return (
            <div>
                <h1 className='view title' align='center'>Qual o resultado do cálculo abaixo?</h1>
                {divC}
            </div>
        );
    }

}