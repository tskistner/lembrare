import React from 'react';
import { Button } from 'reactstrap';
import { Utils, RadioPainted } from '../../../components';

export default class Sound extends React.Component {

    constructor() {
        super();
        this.correctAnswer = null;
    }

    componentDidUpdate() {
        //window.scrollTo(0, document.body.scrollHeight);
    }

    buildOptions() {
        const options = this.props.data.ANSWER.split(';;').map((o,i) => {
            if (i === 0) {
                this.correctAnswer = o;
            }
            return {
                OPTION: o,
                VALUE: i
            }
        });
        return Utils.shuffle(options);
    }

    render() {

        return (
            <div>
                <h1 className='view title' align='center'>Que som é este?</h1>
                <div className='exercise-question default'>
                    <p>Pressione o botão 
                    <img src={require('../../../icons/excercises/play.png')} alt='play' />
                         para ouvir o áudio.</p>
                </div>

                <div align='center'>
                    <audio controls>
                        <source src={'data:audio/mpeg;base64,'.concat(this.props.data.B_SOUND)} controls />
                    </audio>
                </div>

                <RadioPainted
                    idInput={this.props.id}
                    options={this.buildOptions()} />

                <div align='center'>
                    <Button onClick={() => this.props.clicks.OK(this.correctAnswer)}>Ok</Button>
                    <Button onClick={this.props.clicks.CANCEL}>Voltar</Button>
                </div>
            </div>
        );
    }

}