import React from 'react';
import { Utils } from '../../../components';
import ViewActivity from '../ViewActivity';

export default class Sound extends React.Component {

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
                <h1 className='view title' align='center'>Que som é este?</h1>
                <div className='exercise-question default'>
                    <p>Pressione o botão    
                    <img src={require('../../../icons/excercises/play.png')} alt='play' />
                           para ouvir o áudio.</p>
                </div>
                <div className='margens'></div>
                <div align='center'>
                    <audio controls>
                        <source src={'data:audio/mpeg;base64,'.concat(this.props.data.B_SOUND)} controls />
                    </audio>
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