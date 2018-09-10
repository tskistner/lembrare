import React from 'react';
import ButtonImage from './../../components/Excercise/ButtonImage';

export default class Excercise extends React.Component {

    getTypeExercise() {
        switch (this.props.category) {
            case 'card_autonomia':
                return (
                    <div>
                        <ButtonImage idIconImage={1} value={0} />
                        <ButtonImage idIconImage={1} value={0} />
                        <ButtonImage idIconImage={1} value={0} />
                        <ButtonImage idIconImage={1} value={1} />
                        <ButtonImage idIconImage={1} value={1} />
                        <ButtonImage idIconImage={1} value={0} />
                        <ButtonImage idIconImage={1} value={1} />
                        <ButtonImage idIconImage={1} value={0} />
                        <ButtonImage idIconImage={1} value={0} />
                        <ButtonImage idIconImage={1} value={0} />
                    </div>
                )
                break;
            case 'card_cprazo':
                break;
            case 'card_lprazo':
                return
            default:
                return this.props.handleClick;
        }
    }

    render() {

        const exercise = this.getTypeExercise();

        return (
            <div>
                {exercise}
                <button onClick={this.props.handleClick}>Clique</button>
            </div>
        );
    }
}