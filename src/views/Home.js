import React from 'react';
import { ModalBox } from '../components';

export default class Home extends React.Component {

    componentDidMount() {
        document.getElementById('main_div').classList.remove('white');
        setTimeout(() => {
            document.getElementById('bt_modal_hidden_home').click();
        }, 300);
    }

    render() {
        const body = (
            <div>
                <p className='view title' align='center'>Bem vindo!</p>
                <p>Para visualizar as opções clique no botão ao lado esquerdo superior da tela.</p>
                <p>Lá você pode ir para sua área de cadastros, suas atividades, ou gerar um relatório de seu desempenho.</p>
            </div>
        );
        return <ModalBox 
        modalBody = {body}
        ieHiddenButton = 'home'
        ieBtOk = {true} />
    }
}