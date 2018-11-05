import React from 'react';
import { Button } from 'reactstrap';
import { Utils, RadioPainted } from '../../../components';
import ViewActivity from '../ViewActivity';

export default class Word extends React.Component {

    buildOptions() {
        const options = this.props.data.ANSWER.split(';;').map((o, i) => {
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

    render() {

        const viewExercise = (
            <div>
                <h1 className='view title' align='center'>Conforme a descrição abaixo, o que ela define?</h1>

                <div className='exercise-question default'>
                    <p>{this.props.data.DESCRIPTION}</p>
                </div>
            </div>
        );

        return <ViewActivity
            viewExercise={viewExercise}
            options={this.buildOptions()}
            clicks={this.props.clicks}
            id={this.props.id}
        />

    }

}