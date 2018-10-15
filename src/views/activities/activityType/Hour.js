import React from 'react';
import { Button } from 'reactstrap';
import CategoryService from './../../../service/CategoryService';
import { RadioPainted } from './../../../components';

export default class Hour extends React.Component {

    constructor(props) {
        super(props);
        this.state = { imgOptions: null };
        this.correctAnswer = null;
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
        this.correctAnswer = rigthOption;
        options.push({ OPTION: rigthOption, VALUE: 0 });
        return options.sort();
    }

    componentWillMount() {
        CategoryService.getImageExcercise(8).then(res => {
            //document.getElementById('ItemPreview').src = 'data:image/png;base64,' + res.data.B_IMAGEM;
            const divC = (
                <div>
                    <div align='center'>
                        <img id='hour' src={'data:image/png;base64,' + res.data.B_IMAGEM} alt='hour' />
                    </div>
                    <RadioPainted
                        idInput={this.props.id}
                        options={this.buildOptions(res.data.ds_imagem)} />
                </div>
            );

            this.ds_imagem = res.data.ds_imagem;
            this.ds_valores = res.data.ds_valores;
            this.setState({ imgOptions: divC });
        }, err => console.log(err));
    }

    componentDidUpdate() {
        //window.scrollTo(0, document.body.scrollHeight);
    }

    render() {

        const imgOptions = this.state.imgOptions;

        return (
            <div>
                <h1 className='view title' align='center'>Conforme imagem abaixo, que horas são?</h1>
                {imgOptions}
                <div align='center'>
                    <Button onClick={() => this.props.clicks.OK(this.correctAnswer)}>Ok</Button>
                    <Button onClick={this.props.clicks.CANCEL}>Voltar</Button>
                </div>
            </div>
        );
    }

}