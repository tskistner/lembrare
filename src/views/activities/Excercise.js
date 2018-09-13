import React from 'react';
import CategoryService from '../../service/CategoryService';
import excercises from './ExcerciseTypeEnum';
import {
    Calculation, Event, FormIdentification, Hour, Image, ObjectIdentification,
    PersonalQuestion, Sound, Word
} from './activityType';

const autonomyE = [excercises.FORM_IDENTIFICATION, excercises.EVENT, excercises.HOUR, excercises.CALCULATION];
const shortE = [excercises.SOUND, excercises.IMAGES, excercises.WORDS];
const longE = [excercises.PERSONAL_QUESTION, excercises.FORM_IDENTIFICATION];

export default class Excercise extends React.Component {

    constructor() {
        super();
        this.cs = new CategoryService();
    }

    randomExcercise(level, arr) {
        var e = arr[Math.floor(Math.random() * arr.length)];
        e = excercises.FORM_IDENTIFICATION;
        switch (e) {
            case excercises.PERSONAL_QUESTION:
                return <PersonalQuestion level={level} />
                break;
            case excercises.FORM_IDENTIFICATION:
                return <FormIdentification level={level} />
                break;
            case excercises.OBJECT_IDENTIFICATION:
                return <ObjectIdentification level={level} />
                break;
            case excercises.SOUND:
                return <Sound level={level} />
                break;
            case excercises.IMAGES:
                return <Image leve={level} />
                break;
            case excercises.WORDS:
                return <Word level={level} />
                break;
            case excercises.EVENT:
                return <Event level={level} />
                break;
            case excercises.HOUR:
                return <Hour level={level} />
                break;
            case excercises.CALCULATION:
                return <Calculation level={level} />
                break;
        }
    }

    randomAutonomy(level) {
        return this.randomExcercise(level, autonomyE);
    }

    chooseRandomExcercise(level) {
        switch (this.props.category) {
            case 'card_autonomy':
                return this.randomAutonomy(level);
                break;
            case 'card_short':
                break;
            case 'card_long':
                break;
        }
    }

    componentWillMount() {
        this.cs.getCategoryLevel().then(res => {
            this.level = res;
        });
    }

    render() {

        const exercise = this.chooseRandomExcercise(this.level);

        return (
            <div>
                {exercise}
                <button onClick={this.props.handleClick}>Clique</button>
            </div>
        );
    }
}