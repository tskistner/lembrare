import React from 'react';
import './../css/App.css';
import { Switch } from 'react-router-dom';
import routes from './routes.js';
import MenuContainer from './../components/MenuContainer';

export default class Home extends React.Component {
  render() {

    const menuImage = (
      <img src={require('./../icons/menu.svg')} alt='menu' />
    )

    const menu = [
      { type:'dropdown', 
        itemName: menuImage, 
        options: [
          { itemName: 'Cadastro', link: 'cadastro' },
          { itemName: 'Atividades', link: 'atividades' }
        ]}
    ];
    
    //<main className='App'>
    return (
      <div className='default-app'>
        <header>
          <MenuContainer itens={menu} />
        </header>
        <main className='default-div'>
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

