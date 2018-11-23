import React from 'react';
import './../css/App.css';
import { Button } from 'reactstrap';
import { LinkMenu } from '../components';
import Loggin from './loggin/Loggin';
import User from '../repository/User';
import { Switch } from 'react-router-dom';
import routes from './routes.js';
import UserService from '../service/UserService';

export default class Default extends React.Component {

  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  onClickMenu() {
    const element = document.getElementById('menu-div');
    element.hidden = !element.hidden;
  }

  hideMenu() {
    document.getElementById('menu-div').hidden = true;
  }

  logout() {
    UserService.logout().then(() => {
      this.setState({ idUser: 0 });
    });
  }

  componentWillMount() {
    UserService.getUser().then(res => {
      User.setIdUser(res.data.ID_USER);
      User.setNameUser(res.data.NM_USER);
      this.setState({ idUser: res.data });
    });
  }

  render() {

    let context;
    let buttonMenu;
    let userInfo;
    let loggout;
    let headder;
    let footer;

    if (User.getIdUser() > 0 || this.setState.idUser > 0) {
      context = (
        <div id='main_div' className='default-div'>
          <Switch>
            {routes}
          </Switch>
        </div>
      );

      buttonMenu = <Button className='menu button' onClick={this.onClickMenu}></Button>;
      userInfo = (
        <div align='right' className='info-navbar user-navbar'>
          <span>Bem-vindo {User.getNameUser()}</span>
        </div>
      );
      loggout = (
        <div align='right' className='info-navbar logout-navbar'>
          <span onClick={this.logout} >Sair</span>
        </div>
      );

      headder = (
        <header className='navbar navbar-expand-lg default '>
          {buttonMenu}
          <p>   </p>
          <p className='title-app'>Lembrare</p>
          {userInfo}
          {loggout}
        </header>
      );

      footer = (
        <footer align='right' className='footer footer-dark'>
          <div className='container'>
            <p>Desenvolvido por Tamires Schloegel Kistner</p>
          </div>
        </footer>
      );
    } else {
      context = <Loggin />;
    }


    return (
      <div className='default-app'>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {headder}
        <div id='menu-div' className='menu-div' onClick={this.hideMenu} onMouseLeave={this.hideMenu} hidden >
          <LinkMenu to='cadastro' name='Cadastro' />
          <LinkMenu to='atividades' name='Atividades' />
          <LinkMenu to='relatorio' name='Relatórios' />
        </div>
        <main>
          {context}
        </main>
        {footer}
      </div>
    );
  }
}

