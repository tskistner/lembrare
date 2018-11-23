import React from 'react';
import CategoryService from './../../../service/CategoryService';
import { Utils } from './../../../components';
import ViewActivity from '../ViewActivity';

export default class Hour extends React.Component {

    constructor(props) {
        super(props);
        this.state = { imgOptions: null, options: null };
    }

    buildOptions(rigthOption) {
        const options = [];
        //horários que podem ser assumidos
        const hours = ['Uma', 'Duas', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez', 'Onze', 'Meio dia'];
        const minutes = ['', 'cinco', 'dez', 'quinze', 'vinte', 'vinte e cinco', 'meia', 'trinta e cinco',
            'quarenta', 'quarenta e cinco', 'cinquenta', 'cinquenta e cinco'];

        //Retorna um número aleatório conforme tamanho do array
        function getRandom(arr) {
            return Math.floor((Math.random() * arr.length));
        }

        //Constrói uma opção horas + minutos randomicamente
        function addROption(v) {
            const i = getRandom(hours);
            const j = getRandom(minutes);
            options.push({
                OPTION: hours[i].concat(j === 0 ? minutes[0] : ' e '.concat(minutes[j])),
                VALUE: v
            });
        }

        addROption(1);
        addROption(2);
        //adicionar opção correta
        Utils.setCorrectAnswer(rigthOption);
        options.push({ OPTION: rigthOption, VALUE: 0 });
        return options.sort();
    }

    componentWillMount() {
        CategoryService.getImageExcercise(8).then(res => {
            //document.getElementById('ItemPreview').src = 'data:image/png;base64,' + res.data.B_IMAGEM;
            const divC = (
                <div align='center'>
                    <img id='hour' src={'data:image/png;base64,' + res.data.B_IMAGEM} alt='hour' />
                </div>
            );

            this.ds_imagem = res.data.ds_imagem;
            this.ds_valores = res.data.ds_valores;
            this.setState({ imgOptions: divC, options: this.buildOptions(res.data.ds_imagem) });
        }, err => console.log(err));
    }

    render() {

        const viewExercise = (
            <div>
                <h1 className='view title' align='center'>Conforme imagem abaixo, que horas são?</h1>
                {this.state.imgOptions}
            </div>
        );

        return <ViewActivity
            viewExercise={viewExercise}
            options={this.state.options}
            clicks={this.props.clicks}
            id={this.props.id} />
    }

}