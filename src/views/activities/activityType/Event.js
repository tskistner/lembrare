import React from 'react';
import { Utils, RadioPainted } from '../../../components';
import ViewActivity from '../ViewActivity';

export default class Event extends React.Component {

    constructor(props) {
        super(props);
        this.onNext = this.onNext.bind(this);
        this.state = { secondPart: false };
    }

    buildOptions(answers) {
        const options = answers.split(';;').map((o, i) => {
            if (i === 0) {
                Utils.setCorrectAnswer(o);
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
            idInput={this.props.id + id}
            options={this.buildOptions(answer)} />
    }

    onNext() {
        if (!this.state.secondPart) {
            this.setState({ secondPart: true });
        } else {
            this.props.clicks.CANCEL();
        }
    }

    render() {
        const descriptions = this.props.data.DESCRIPTION.split(';;');
        const answers = this.props.data.ANSWER.split('//');
        const description1 = descriptions[0].split(':');

        if (this.state.secondPart) {
            const viewExercise = (
                <div>
                    <h1 className='view title' align='center'>Quantos dias faltam para</h1>
                    <div className='exercise-question default'>
                        <p>{descriptions[1]}</p>
                    </div>
                </div>
            );
            return <ViewActivity
                viewExercise={viewExercise}
                options={this.buildOptions(answers[1])}
                clicks={this.props.clicks}
                id={this.props.id} />;
        } else {
            let viewExercise;
            if (description1.length === 1) {
                viewExercise = (
                    <div>
                        <h1 className='view title' align='center'>Familiares e amigos</h1>
                        <div className='exercise-question default'>
                            <p>{description1[0]}</p>
                        </div>
                    </div>
                );
            } else {
                viewExercise = (
                    <div>
                        <h1 className='view title' align='center'>{description1[0]}</h1>
                        <div className='exercise-question default'>
                            <p>{description1[1]}</p>
                        </div>
                    </div>
                );
            }

            return <ViewActivity
                viewExercise={viewExercise}
                options={this.buildOptions(answers[0])}
                clicks={{ CANCEL: this.onNext }}
                id={this.props.id} />;
        }
    }

}