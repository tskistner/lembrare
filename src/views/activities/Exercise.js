import React from 'react';
import CategoryService from '../../service/CategoryService';
import exercises from './ExerciseTypeEnum';
import Report from './Report';
import {
    Calculation, Event, Hour, Image, ObjectIdentification, Sound, Word, DefaultExercise
} from './activityType';
import { Utils } from './../../components';

export default class Exercise extends React.Component {

    constructor(props) {
        super(props);
        this.state = { exercise: null };
        this.idDivExercise = null;
        this.ieCorrectAnswer = false;
        this.onClick = this.onClick.bind(this);
        this.updateLevel = this.updateLevel.bind(this);
    }

    randomExercise(data) {
        const clicks = {
            OK: this.onClick,
            CANCEL: this.props.handleClick
        }
        switch (data.EXERCISE) {
            case exercises.OBJECT_IDENTIFICATION:
            case exercises.FORM_IDENTIFICATION:
                this.idDivExercise = 'object_identification_rg';
                return <ObjectIdentification data={data} id={this.idDivExercise} clicks={clicks} />
            case exercises.SOUND:
                this.idDivExercise = 'sound_rg';
                return <Sound data={data} id={this.idDivExercise} clicks={clicks} />
            case exercises.IMAGES:
                this.idDivExercise = 'image_rg';
                return <Image data={data} id={this.idDivExercise} clicks={clicks} />
            case exercises.WORDS:
                this.idDivExercise = 'words_rg';
                return <Word data={data} id={this.idDivExercise} clicks={clicks} />
            case exercises.EVENT:
                this.idDivExercise = 'event_rg';
                return <Event data={data} id={this.idDivExercise} clicks={clicks} />
            case exercises.HOUR:
                this.idDivExercise = 'hour_rg';
                return <Hour data={data} id={this.idDivExercise} clicks={clicks} />
            case exercises.CALCULATION:
                this.idDivExercise = 'calculation_rg';
                return <Calculation id={this.idDivExercise} clicks={clicks} />
            default:
                this.idDivExercise = 'exercise_default'.concat(data.EXERCISE);
                return <DefaultExercise data={data} id={this.idDivExercise} clicks={clicks} />
        }
    }

    chooseExercise() {
        const idCategory = this.props.category.substr(this.props.category.lastIndexOf('_') + 1, this.props.category.length)
        CategoryService.getExercise(idCategory, this.state.idExercise).then(res => {
            this.setState({ exercise: this.randomExercise(res.data), idExercise: res.data.EXERCISE });
        }, err => console.log(err));
    }

    componentWillMount() {
        this.chooseExercise()
    }

    componentDidMount() {
        setTimeout(() => {
            document.getElementById('activitiesDiv').scrollIntoView()
        }, 150);
    }

    updateLevel(response) {
        const id = this.props.category.substr(this.props.category.lastIndexOf('_') + 1, this.props.category.length)
        CategoryService.updateLevel({
            idCategoria: id,
            idExercicio: this.state.idExercise,
            ieOpcao: this.ieCorrectAnswer ? 'U' : 'D',
            idPessoa: response.ID_PARENT,
            dsBoletim: response.DS_REPORT
        });
        this.chooseExercise();
    }

    onClick(correctAnswer) {
        Utils.validate(this.idDivExercise, correctAnswer, 'Relatório').then(response => {
            this.ieCorrectAnswer = response.ATRIBUTE === '0';
            if (response.BUTTON === 2) {
                document.getElementById('bt_modal_hidden_exer').click();
            } else {
                this.updateLevel(response);
            }
        });
    }

    render() {
        return (
            <div>
                {this.state.exercise}
                <Report onClick={this.updateLevel} />
            </div>
        );
    }
}