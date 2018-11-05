import React from 'react';
import { Utils } from '../../../components';
import ViewActivity from '../ViewActivity';

export default class DefaultExercise extends React.Component {

    buildOptions() {
        const options = this.props.data.ANSWER.split(';;').map((o, i) => {
            if (i === 0) {
                Utils.setCorrectAnswer(o);
            }
            return {
                OPTION: o,
                VALUE: i
            };
        });
        return Utils.shuffle(options);
    }

    render() {

        const viewExercise = (
            <div>
                <h1 className='view title' align='center'>Questões pessoais.</h1>
                <div className='exercise-question default'>
                    <p>{this.props.data.DESCRIPTION}</p>
                </div>
            </div>
        );

        return <ViewActivity
            viewExercise={viewExercise}
            options={this.buildOptions()}
            clicks={this.props.clicks}
            id={this.props.id} />;
    }

}