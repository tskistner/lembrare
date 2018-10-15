import React from 'react';
import { Button } from 'reactstrap';
import { RadioPainted, Utils } from '../../../components';

export default class DefaultExercise extends React.Component {

    constructor() {
        super();
        this.correctAnswer = null;
    }

    buildOptions() {
        const options = this.props.data.ANSWER.split(';;').map((o,i) => {
            if (i === 0) {
                this.correctAnswer = i;
            }
            return {
                OPTION: o,
                VALUE: i
            };
        });
        return Utils.shuffle(options);
    }

    getOptions() {
        return <RadioPainted
            idInput={this.props.id}
            options={this.buildOptions()} />
    }

    componentDidUpdate() {
        //Utils.scrollToExercise();
    }

    render() {
        return (
            <div>
                <h1 className='view title' align='center'>{this.props.data.DESCRIPTION}</h1>
                {this.getOptions()}
                <div align='center'>
                    <Button onClick={() => this.props.clicks.OK(this.correctAnswer)}>Ok</Button>
                    <Button onClick={this.props.clicks.CANCEL}>Voltar</Button>
                </div>
            </div>
        );
    }

}