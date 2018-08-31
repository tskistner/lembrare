import React, { Component } from 'react';
import './css/App.css';
import { Switch, Route } from 'react-router-dom';

import TabContainer from './components/TabContainer';
import { PersonalInformation, AditionalInformation, Categories } from './views/';

class App extends Component {
  render() {
    const tabs = [
      {
        tabName: 'Cadastro', type: 'dropdown', options: [
          { tabName: 'Informações pessoais', link: 'settings' },
          { tabName: 'Informações adicionais', link: 'settingsAditional' }
        ]
      },
      { tabName: 'Atividades', link: 'categories' }
    ];

    return (
      <div className='App'>
        <header>
          <TabContainer tabs={tabs} />
        </header>
        <main>
          <Switch>
            <Route path='/settings' component={PersonalInformation} />
            <Route path='/settingsAditional' component={AditionalInformation} />
            <Route path='/categories' component={Categories} />
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

export default App;
