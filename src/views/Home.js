import React from 'react';

export default class Home extends React.Component {

    componentDidMount() {
        document.getElementById('main_div').classList.remove('white');
    }

    render() {
        return (
            <div>
                <div className='loggin-div initial-page'>
                    <div className='loggin-div-inside'>
                        <p className='view title' align='center'>Bem vindo!</p>
                        <p>Para visualizar as opções clique no botão ao lado esquerdo superior da tela:
                                
                        <img className='menu' src={require('../icons/menu.png')} alt='info-menu' />
                        </p>
                        <p></p>
                        <p>Lá você pode ir para sua área de cadastros, suas atividades, ou gerar um relatório de seu desempenho.</p>
                    </div>
                </div>
            </div>
        );
    }
}