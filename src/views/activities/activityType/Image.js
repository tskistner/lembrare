import React from 'react';
import { Utils } from '../../../components';
import ViewActivity from '../ViewActivity';

export default class Image extends React.Component {

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
                <h1 className='view title' align='center'>Que imagem é esta?</h1>
                <div className='exercise-question default'>
                    <img className='exercise image' id='hour' src={'data:image/png;base64,'.concat(this.props.data.B_IMAGEM)} alt='image_exercise' />
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