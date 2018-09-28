import React, { Component } from 'react';
import FormContainer from '../../components/FormContainer';
import View from './../../components/View';
import UserService from './../../service/UserService';
import User from './../../repository/User';

export default class PersonalInformation extends Component {

    constructor(props) {
        super(props);
        this.onSave = this.onSave.bind(this);
    }

    getValue(element) {
        const e = document.getElementById(element);
        if (e) {
            return e.value;
        }
        return null;
    }

    getRadioValue(element) {
        const e = document.querySelector('input[name="'.concat(element).concat('"]:checked'));
        if (e) {
            return e.value;
        }
        return null;
    }

    setValue(element, value) {
        const e = document.getElementById(element);
        if (e) {
            e.value = value;
        }
    }

    setValueRadio(element) {
        const e = document.getElementById(element);
        if (e) {
            e.checked = true;
        }
    }

    onSave() {
        const user = {
            ID_USUARIO : User.getIdUser(),
            DS_EMAIL: this.getValue('ds_email'),
            NM_PESSOA: this.getValue('nm_pessoa'),
            DS_CPF: '',
            DT_NASCIMENTO: this.getValue('dt_nascimento'),
            IE_SEXO: this.getRadioValue('ie_sexo'),
            DS_CIDADE_NATAL: this.getValue('ds_cidade_natal'),
            DS_CIDADE_ATUAL: this.getValue('ds_cidade_atual'),
            DS_ENDERECO: this.getValue('ds_endereco'),
            NR_TELEFONE: this.getValue('nr_telefone')
        }
        UserService.updateUser(user);
    }

    componentDidMount() {
        UserService.getUserInformations().then(resp => {
            if (resp.data) {
                this.setValue('ds_email', resp.data.dsEmail);
                this.setValue('nm_pessoa', resp.data.nmPessoa);
                this.setValue('dt_nascimento', resp.data.dtNascimento);
                this.setValue('ds_cidade_natal', resp.data.dsCidadeNatal);
                this.setValue('ds_cidade_atual', resp.data.dsCidadeAtual);
                this.setValue('ds_endereco', resp.data.dsEndereco);
                this.setValue('nr_telefone', resp.data.nrTelefone);
                this.setValueRadio('ie_sexo_'.concat(resp.data.ieSexo));
            }
        });
    }

    render() {

        const header =
            <header align='center' className='default-header'>
                <img src={require('../../icons/person-icon-blue.png')} className='view image' alt='profile' />
                <h2>Informações pessoais</h2>
            </header>;

        const pInformation =
            <div className='pInformation'>
                <FormContainer fields={[
                    { type: 'text', idInput: 'nm_pessoa', placeholder: 'Nome Completo', required: true },
                    { type: 'date', idInput: 'dt_nascimento', placeholder: 'Data de nascimento', required: true },
                    { type: 'text', idInput: 'ds_cidade_natal', placeholder: 'Cidade natal'},
                    { type: 'radio', idInput: 'ie_sexo', placeholder: 'Sexo', required: true,
                        options: [{OPTION: 'feminino', VALUE: 'f'} , {OPTION: 'masculino', VALUE: 'm' }]}
                ]} />
            </div>;

        const aInformation =
            <div className='pInformation'>
                <FormContainer fields={[
                    { type: 'text', idInput: 'ds_cidade_atual', placeholder: 'Cidade Atual' },
                    { type: 'text', idInput: 'ds_endereco', placeholder: 'Endereço' },
                    { type: 'number', idInput: 'nr_telefone', placeholder: 'Telefone' },
                    { type: 'text', idInput: 'ds_email', placeholder: 'Email' }
                ]} />
            </div>;

        const modeV = (
            <div id='pInformationDiv'>
                {header}
                {pInformation}
                {aInformation}
            </div>
        );

        return (
            <View modeV={modeV} id='pInformationDiv' onSave={this.onSave}/>
        );
    }
}