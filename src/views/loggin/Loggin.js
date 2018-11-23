import React from 'react';
import { FormContainer, Utils, AlertBox } from '../../components';
import { Button } from 'reactstrap';
import UserService from '../../service/UserService';
import CreateAccount from './CreateAccount';


export default class Loggin extends React.Component {

    constructor() {
        super();
        this.loggin = this.loggin.bind(this);
        this.createAccount = this.createAccount.bind(this);
        this.state = { isCreatingAccount: false };
    }

    createAccount() {
        this.setState({ isCreatingAccount: true });
    }

    loggin() {
        UserService.loggin({ dsCpf: Utils.getValue('loggin_cpf'), dsSenha: Utils.getValue('loggin_pwd') }).then(
            response => {
                if (!response.data.DS_ERROR) {
                    window.location.href = "http://localhost:3000/lembrare";
                } else {
                    AlertBox.show(response.data.DS_ERROR);
                }
            }
        );
    }

    render() {
        if (this.state.isCreatingAccount) {
            return <CreateAccount />;
        } else {
            return (
                <div>
                    <div className='margens'></div>
                    <div className='loggin-div'>
                        <img className='img-logo' src={require('../../icons/logo.png')} alt='logo' />
                        <div className='loggin-div-inside'>
                            <FormContainer
                                fields={[
                                    { type: 'text', idInput: 'loggin_cpf', placeholder: 'CPF', maxlength: 11, mask: '___.___.___-__' },
                                    { type: 'password', idInput: 'loggin_pwd', placeholder: 'Senha' }
                                ]} />
                            {'     '}
                            <div align='center'>
                                <Button onClick={this.loggin} className='button-default all'>Entrar</Button>
                                {'     '}
                                <Button onClick={this.createAccount} className='button-default all'>Criar conta</Button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}