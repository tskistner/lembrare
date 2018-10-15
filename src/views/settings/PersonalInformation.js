import React, { Component } from 'react';
import { View, FormContainer, ModalBox, Utils } from './../../components/';
import UserService from './../../service/UserService';
import User from './../../repository/User';

export default class PersonalInformation extends Component {

    constructor(props) {
        super(props);
        this.onSave = this.onSave.bind(this);
        this.onBeforeClosePwdConfig = this.onBeforeClosePwdConfig.bind(this);
    }

    //Events
    onSave() { 
        return UserService.updateUser({
            idUsuario: User.getIdUser(),
            nmPessoa: Utils.getValue('nm_pessoa'),
            dsCpf: Utils.getValue('ds_cpf'),
            dtNascimento: Utils.getValue('dt_nascimento'),
            ieSexo: Utils.getRadioValue('ie_sexo'),
            dsCidadeNatal: Utils.getValue('ds_cidade_natal'),
            dsCidadeAtual: Utils.getValue('ds_cidade_atual'),
            dsEndereco: Utils.getValue('ds_endereco'),
            nrTelefone: Utils.getValue('nr_telefone')
        });
    }

    onBeforeClosePwdConfig() {
        if (Utils.getValue('ds_senha') !== Utils.getValue('ds_rep_senha')) {
            //Melhorar
            alert('As senhas precisam ser iguais');
            return false;
        } else {
            UserService.updatePassword({
                idUsuario: User.getIdUser(),
                dsSenha: Utils.getValue('ds_senha'),
                ieUsarSenha: Utils.getValueCheck('ie_use_pwd')
            })
            return true;
        }
    }

    componentDidMount() {
        UserService.getUserInformations().then(resp => {
            if (resp.data) {
                Utils.setValue('ds_cpf', resp.data.dsCpf);
                Utils.setValue('nm_pessoa', resp.data.nmPessoa);
                Utils.setValue('dt_nascimento', resp.data.dtNascimento);
                Utils.setValue('ds_cidade_natal', resp.data.dsCidadeNatal);
                Utils.setValue('ds_cidade_atual', resp.data.dsCidadeAtual);
                Utils.setValue('ds_endereco', resp.data.dsEndereco);
                Utils.setValue('nr_telefone', resp.data.nrTelefone);
                Utils.setValueRadio('ie_sexo_'.concat(resp.data.ieSexo));
                this.ieUsePwd = resp.data.ieUsarSenha === 'S';
            }
        });
    }

    //Render component
    render() {
        const header =
            <header align='center' className='default-header'>
                <img src={require('../../icons/person-icon-blue.png')} className='view image' alt='profile' />
                <h2>Informações pessoais</h2>
            </header>;

        const modalBody = (
            <FormContainer fields={[
                { type: 'check', idInput: 'ie_use_pwd', placeholder:'Utilizar senha para logar', ieChecke:this.ieUsePwd},
                { type: 'password', idInput: 'ds_senha', placeholder:'Senha'},
                { type: 'password', idInput: 'ds_rep_senha', placeholder:'Repetir senha'}
            ]} />
        );

        const pInformation = (
            <div className='pInformation'>
                <FormContainer fields={[
                    { type: 'text', idInput: 'nm_pessoa', placeholder: 'Nome Completo', required: true },
                    { type: 'text', idInput: 'ds_cpf', placeholder: 'CPF', maxlength: 11, required: true  },
                    { type: 'date', idInput: 'dt_nascimento', placeholder: 'Data de nascimento', required: true },
                    { type: 'text', idInput: 'ds_cidade_natal', placeholder: 'Cidade natal' },
                    {
                        type: 'radio', idInput: 'ie_sexo', placeholder: 'Sexo', required: true,
                        options: [{ OPTION: 'feminino', VALUE: 'f' }, { OPTION: 'masculino', VALUE: 'm' }]
                    },
                    { type: 'text', idInput: 'ds_cidade_atual', placeholder: 'Cidade Atual' },
                    { type: 'text', idInput: 'ds_endereco', placeholder: 'Endereço' },
                    { type: 'number', idInput: 'nr_telefone', placeholder: 'Telefone', maxlength:9 }
                ]} />
                <ModalBox ieModal={false}
                    dsLinkToClick='Configurações de senha'
                    dsTitle='Configurações de senha'
                    modalBody={modalBody}
                    toValidateClose={this.onBeforeClosePwdConfig}
                    ieBtOk={true}
                    ieBtCancel={true}/>
            </div>
        );

        const modeV = (
            <div id='pInformationDiv'>
                {header}
                {pInformation}
            </div>
        );

        return (
            <View modeV={modeV} id='pInformationDiv' 
                onSave={this.onSave} 
                noGrid={true} />
        );
    }
}