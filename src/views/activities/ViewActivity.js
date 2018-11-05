import React from 'react';
import CategoryService from '../../service/CategoryService';
import { Utils, RadioPainted } from '../../components';

export default class ViewActivity extends React.Component {

    constructor() {
        super();
        this.state = { isOptions: false, isFinal: false, msgFinal: '' };
        this.onNext = this.onNext.bind(this);
        this.onBack = this.onBack.bind(this);
    }

    updateLevel(isCorrect) {
        CategoryService.updateLevel({
            idCategoria: Utils.getIdCategory(),
            idExercicio: Utils.getIdExercise()._value,
            ieOpcao: isCorrect ? 'U' : 'D'
        });
    }

    onNext() {
        if (this.state.isOptions) {
            Utils.validate(this.props.id).then(isCorrect => {
                let message;
                if (isCorrect) {
                    message = (
                        <div className='exercise-question default exercise-options'>
                            <img src={require('../../icons/excercises/congrats.png')} alt='congrats' />
                            <h2>Parabéns!</h2>
                            <p>A resposta está correta</p>
                        </div>
                    );
                } else {
                    message = (
                        <div className='exercise-question default exercise-options'>
                            <img src={require('../../icons/excercises/sorry.png')} alt='sorry' />
                            <p>Infelizmente a resposta está incorreta.</p>
                            <p>{'Resposta correta: '.concat(Utils.getCorrectAnswer())}</p>
                        </div>
                    )
                }
                this.updateLevel(isCorrect);
                this.setState({ isFinal: true, msgFinal: message });
            });
        } else {
            this.setState({ isOptions: true });
        }
    }

    onBack() {
        if (this.state.isFinal) {
            this.setState({ isFinal: false });
        } else if (!this.state.isOptions) {
            this.props.clicks.CANCEL();
        } else {
            this.setState({ isOptions: false });
        }
    }

    getOptions(description, options) {
        return (
            <div>
                <h1 className='view title' align='center'>{description}</h1>
                <div className='exercise-options'>
                    <RadioPainted
                        idInput={this.props.id}
                        options={options}
                        onClick={this.onNext} />
                </div>
            </div>
        );
    }

    render() {
        if (this.state.isFinal) {
            setTimeout(() => {
                this.state.isFinal = false;
                this.state.isOptions = false;
                this.props.clicks.NEXT();
            }, 3500);
            return this.state.msgFinal;
        } else if (this.state.isOptions) {
            return this.getOptions('Qual a resposta?', this.props.options);
        } else {
            return (
                <div>
                    {this.props.viewExercise}
                    <footer align='center' className='exercise default'>
                        <img src={require('../../icons/back.png')}
                            className='exercise-button'
                            onClick={this.onBack}
                            id='bt_back'
                            alt='back' />
                        {'      '}
                        <img src={require('../../icons/next.png')}
                            className='exercise-button'
                            onClick={this.onNext}
                            id='bt_next'
                            alt='next' />
                    </footer>
                </div>);
        }
    }
}