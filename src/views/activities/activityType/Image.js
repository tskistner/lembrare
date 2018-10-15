import React from 'react';
import { Button } from 'reactstrap';
import { Utils, RadioPainted } from '../../../components';

export default class Image extends React.Component {

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
                <h1 className='view title' align='center'>Que imagem é esta?</h1>
                <div className='exercise-question default'>
                    <img className='exercise image' id='hour' src={'data:image/png;base64,'.concat(this.props.data.B_IMAGEM)} alt='image_exercise' />
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