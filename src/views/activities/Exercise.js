import React from 'react';
import CategoryService from '../../service/CategoryService';
import exercises from './ExerciseTypeEnum';
import {
    Calculation, Event, FormIdentification, Hour, Image, ObjectIdentification,
    PersonalQuestion, Sound, Word
} from './activityType';

export default class Exercise extends React.Component {

    constructor() {
        super();
        this.state = {exercise: null};
    }

    randomExercise(idExercise, level) {
        idExercise = 8;
        switch (idExercise) {
            case exercises.PERSONAL_QUESTION:
                return <PersonalQuestion level={level} />
            case exercises.FORM_IDENTIFICATION:
                return <FormIdentification level={level} />
            case exercises.OBJECT_IDENTIFICATION:
                return <ObjectIdentification level={level} />
            case exercises.SOUND:
                return <Sound level={level} />
            case exercises.IMAGES:
                return <Image leve={level} />
            case exercises.WORDS:
                return <Word level={level} />
            case exercises.EVENT:
                return <Event level={level} />
            case exercises.HOUR:
                return <Hour level={level} />
            case exercises.CALCULATION:
                return <Calculation level={level} />
        }
    }

    chooseExercise() {
        const id = this.props.category.substr(this.props.category.lastIndexOf('_')+1,this.props.category.length)
        CategoryService.getRandomExerciseByLevel(id).then(res => {
            this.setState({exercise: this.randomExercise(res.data.EXERCICIO, res.data.LEVEL)});
        }, err => console.log(err));
    }

    componentWillMount() {
        this.chooseExercise()
    }

    render() {

        const exercise = this.state.exercise;

        return (
            <div>
                {exercise}
            </div>
        );
    }
}