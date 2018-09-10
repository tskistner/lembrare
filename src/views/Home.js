import React from 'react';
import './../css/App.css';
import { Switch } from 'react-router-dom';
import routes from './routes.js';
import MenuContainer from './../components/MenuContainer';

export default class Home extends React.Component {
  render() {
    const itens = [
      { itemName: 'Cadastro', link: 'cadastro' },
      { itemName: 'Atividades', link: 'atividades' },
      { itemName: 'Book', link: 'book'},
      { itemName: 'AddBook', link: 'addBook'}
    ];

    return (
      <div >
        <header>
          <MenuContainer itens={itens} />
        </header>
        <main className='App'>
          <Switch>
            {routes}
          </Switch>
        </main>
        <footer className='footer footer-dark'>
          <div className='container'>
            <span className='text-muted'>
              Desenvolvido por Tamires Schloegel Kistner
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

