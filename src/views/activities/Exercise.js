import React from 'react';
import CategoryService from '../../service/CategoryService';
import exercises from './ExerciseTypeEnum';
import {
    Calculation, Event, FormIdentification, Hour, Image, ObjectIdentification,
    PersonalQuestion, Sound, Word
} from './activityType';
import { Button } from 'reactstrap';

export default class Exercise extends React.Component {

    constructor(props) {
        super(props);
        this.state = { exercise: null };
        this.idDivExercise = null;
        this.onClick = this.onClick.bind(this);
    }

    randomExercise(idExercise, level) {
        idExercise = 8;
        this.idExercise = idExercise;
        switch (idExercise) {
            case exercises.PERSONAL_QUESTION:
                this.idDivExercise = 'personal_question_rg';
                return <PersonalQuestion level={level} />
            case exercises.FORM_IDENTIFICATION:
                this.idDivExercise = 'form_identification_rg';
                return <FormIdentification level={level} />
            case exercises.OBJECT_IDENTIFICATION:
                this.idDivExercise = 'object_identification_rg';
                return <ObjectIdentification level={level} />
            case exercises.SOUND:
                this.idDivExercise = 'sound_rg';
                return <Sound level={level} />
            case exercises.IMAGES:
                this.idDivExercise = 'image_rg';
                return <Image leve={level} />
            case exercises.WORDS:
                this.idDivExercise = 'words_rg';
                return <Word level={level} />
            case exercises.EVENT:
                this.idDivExercise = 'event_rg';
                return <Event level={level} />
            case exercises.HOUR:
                this.idDivExercise = 'hour_rg';
                return <Hour level={level} />
            case exercises.CALCULATION:
                this.idDivExercise = 'calculation_rg';
                return <Calculation level={level} />
        }
    }

    chooseExercise() {
        const id = this.props.category.substr(this.props.category.lastIndexOf('_') + 1, this.props.category.length)
        CategoryService.getRandomExerciseByLevel(id).then(res => {
            this.setState({ exercise: this.randomExercise(res.data.EXERCICIO, res.data.LEVEL) });
        }, err => console.log(err));
    }

    componentWillMount() {
        this.chooseExercise()
    }

    onClick() {
        function validate(id) {
            const attribute = document.querySelector('input[name="'.concat(id).concat('"]:checked'));
            if (!attribute) {
                alert('Favor escolher uma opção!');
                return false;
            }
            return attribute;
        }

        const att = validate(this.idDivExercise);
        if (att) {
            if (att.value == 3) {
                alert('Resposta correta!');
            } else {
                alert('Resposta incorreta!');
            }
            const id = this.props.category.substr(this.props.category.lastIndexOf('_') + 1, this.props.category.length)
            /*CategoryService.updateLevel(att.value === 3,  //Valor padrão
                                        id, this.idExercise);*/
            this.props.handleClick();
        }
    }

    render() {

        let exercise = this.state.exercise;

        if (exercise) {
            exercise = (
                <div>
                    {this.state.exercise}
                    <div align='center'>
                        <Button onClick={this.onClick}>Ok</Button>
                        <Button onClick={this.props.handleClick}>Voltar</Button>
                    </div>
                </div>
            );
        }

        return (
            <div>
                {exercise}
            </div>
        );
    }
}