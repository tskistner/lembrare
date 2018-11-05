import React from 'react';
import { FormContainer, Utils, AlertBox } from '../../components';
import UserService from '../../service/UserService';
import { Button } from 'reactstrap';

export default class CreateAccount extends React.Component {

    constructor() {
        super();
        this.onSave = this.onSave.bind(this);
    }

    validatePassword() {
        if (Utils.getValueCheck('create_user_ie_use_pwd')) {
            const pwd = Utils.getValue('create_user_ds_senha');
            if (pwd) {
                if (pwd !== Utils.getValue('create_user_ds_rep_senha')) {
                    AlertBox.show('<p align="center">Atenção!</p><p>As senhas precisam ser iguais</p>')
                    return false;
                }
            }
        }
        return true;
    }



    onSave() {
        if (Utils.validateRequiredFields('create-user') && this.validatePassword()) {
            UserService.addUser({
                nmPessoa: Utils.getValue('create_user_nm_pessoa'),
                dsCpf: Utils.getValue('create_user_ds_cpf'),
                dtNascimento: Utils.getDateValue('create_user_dt_nascimento'),
                ieSexo: Utils.getRadioValue('create_user_ie_sexo'),
                dsCidadeNatal: Utils.getValue('create_user_ds_cidade_natal'),
                dsCidadeAtual: Utils.getValue('create_user_ds_cidade_atual'),
                dsEndereco: Utils.getValue('create_user_ds_endereco'),
                nrTelefone: Utils.getValue('create_user_nr_telefone'),
                ieFase: Utils.getValue('create_user_ie_fase'),
                qtTempo: Utils.getValue('create_user_qt_tempo'),
                dsMedicacao: Utils.getValue('create_user_ds_medicacao'),
                ieAntecedentes: Utils.getValueCheck('create_user_ie_antecedentes'),
                dsOutrasDoencas: Utils.getValue('create_user_ds_outras_doencas'),
                ieUsarSenha: Utils.getValueCheck('create_user_ie_use_pwd'),
                dsSenha: Utils.getValue('create_user_ds_senha')
            }).then(() => window.location.href = "http://localhost:3000/");
        }
    }

    buildOptions() {
        return [
            { OPTION: '1ª', VALUE: 1 },
            { OPTION: '2ª', VALUE: 2 },
            { OPTION: '3ª', VALUE: 3 },
            { OPTION: '4ª', VALUE: 4 }
        ]
    }

    render() {
        const id = 'create_user_';
        return (
            <div className='default-div white' id='create-user'>
                <div className='col-12 view div margin' >
                    <FormContainer fields={[
                        { type: 'text', idInput: id + 'nm_pessoa', placeholder: 'Nome Completo', required: true },
                        { type: 'text', idInput: id + 'ds_cpf', placeholder: 'CPF', maxlength: 11, required: true, mask: '___.___.___-__' },
                        { type: 'date', idInput: id + 'dt_nascimento', placeholder: 'Data de nascimento', required: true },
                        {
                            type: 'radio', idInput: id + 'ie_sexo', placeholder: 'Sexo', required: true,
                            options: [{ OPTION: 'Feminino', VALUE: 'f' }, { OPTION: 'Masculino', VALUE: 'm' }]
                        },
                        { type: 'text', idInput: id + 'ds_cidade_natal', placeholder: 'Cidade natal', required: true },
                        { type: 'text', idInput: id + 'ds_cidade_atual', placeholder: 'Cidade Atual', required: true },
                        { type: 'text', idInput: id + 'ds_endereco', placeholder: 'Endereço', required: true },
                        { type: 'number', idInput: id + 'nr_telefone', placeholder: 'Telefone', maxlength: 11, mask: '(__) ____-____', required: true }
                    ]} />
                    <div className='div-group borderG'>
                        <div className='div-group'>
                            <FormContainer fields={[
                                { type: 'select', idInput: id + 'ie_fase', placeholder: 'Fase do Alzheimer', options: this.buildOptions() },
                                { type: 'text', idInput: id + 'qt_tempo', placeholder: 'Tempo da doença' },
                                { type: 'check', idInput: id + 'ie_antecedentes', placeholder: 'Possui antecedentes' },
                                { type: 'textarea', idInput: id + 'ds_medicacao', placeholder: 'Medicações' },
                                { type: 'textarea', idInput: id + 'ds_outras_doencas', placeholder: 'Outras doenças' }
                            ]} />
                        </div>
                    </div>
                    <div className='div-group borderG'>
                        <div className='div-group'>
                            <FormContainer fields={[
                                { type: 'check', idInput: id + 'ie_use_pwd', placeholder: 'Utilizar senha para logar', ieChecked: this.ieUsePwd },
                                { type: 'password', idInput: id + 'ds_senha', placeholder: 'Senha' },
                                { type: 'password', idInput: id + 'ds_rep_senha', placeholder: 'Repetir senha' }
                            ]} />
                        </div>
                    </div>
                    <Button onClick={this.onSave} className='button-default' > Salvar </Button>
                </div>
            </div>
        );
    }
}