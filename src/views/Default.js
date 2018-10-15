import React from 'react';
import './../css/App.css';
import { Switch } from 'react-router-dom';
import routes from './routes.js';
import MenuContainer from './../components/MenuContainer';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Default extends React.Component {

  onClickMenu() {
    const element = document.getElementById('menu-div');
    element.hidden = !element.hidden;
  }

  hideMenu() {
    document.getElementById('menu-div').hidden = true;
  }

  render() {

    const menuImage = (
      <img src={require('./../icons/menu.svg')} alt='menu' />
    )

    const menu = [
      {
        type: 'dropdown',
        itemName: menuImage,
        options: [
          { itemName: 'Cadastro', link: 'cadastro' },
          { itemName: 'Atividades', link: 'atividades' }
        ]
      }
    ];

    //<MenuContainer itens={menu} />
    return (
      <div className='default-app'>
        <header className='navbar navbar-expand-lg default '>
          <Button className='menu-button' onClick={this.onClickMenu}></Button>
        </header>
        <div id='menu-div' className='menu-div' onClick={this.hideMenu} onMouseLeave={this.hideMenu} hidden >
          <Link className='nav-link default' to='cadastro'> Cadastro </Link>
          <Link className='nav-link default' to='atividades'> Atividades </Link>
        </div>
        <main id='main_div' className='default-div white'>
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

