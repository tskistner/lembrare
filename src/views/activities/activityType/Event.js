import React from 'react';
import { Button } from 'reactstrap';
import { Utils, RadioPainted } from '../../../components';

export default class Event extends React.Component {

    constructor(props) {
        super(props);
        this.onOkClick = this.onOkClick.bind(this);
        this.state = { secondPart: false };
        this.correctAnswer = null;
    }

    componentDidUpdate() {
        //Utils.scrollToExercise();
    }

    buildOptions(answers) {
        const options = answers.split(';;').map((o, i) => {
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

    getOptions(answer, id) {
        return <RadioPainted
            idInput={this.props.id+id}
            options={this.buildOptions(answer)} />
    }

    onOkClick() {
        if (this.state.secondPart) {
            this.props.clicks.OK(this.correctAnswer);
        } else {
            Utils.validate(this.props.id+'_0', this.correctAnswer).then(() => {
                this.setState({ secondPart : true })
            });
        }
    }

    render() {

        const descriptions = this.props.data.DESCRIPTION.split(';;');
        const answers = this.props.data.ANSWER.split('//');

        const description1 = descriptions[0].split(':');

        let sPart = null;
        if (this.state.secondPart) {
            sPart = (
                <div>
                    <h1 className='view title' align='center'>{descriptions[1]}</h1>
                    {this.getOptions(answers[1],'')}
                </div>
            );
        }

        const descriptionAditional = description1.length === 1 ? null
            : <div className='exercise-question default'>
                <p>{description1[1]}</p>
            </div>

        return (
            <div>
                <h1 className='view title' align='center'>{description1[0]}</h1>
                {descriptionAditional}
                {this.getOptions(answers[0],'_0')}
                {sPart}
                <div align='center'>
                    <Button onClick={this.onOkClick}>Ok</Button>
                    <Button onClick={this.props.clicks.CANCEL}>Voltar</Button>
                </div>
            </div>
        );
    }

}