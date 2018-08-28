import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import TabContainer from "./components/TabContainer";
import PersonalInformation from "./views/settings/PersonalInformation";
import Page2 from "./views/settings/Page2";

class App extends Component {
  render() {
    const tabs = [
      { tabName: 'Cadastro', type: 'dropdown', options: [
        {tabName: 'Informações pessoais', link: 'page2'}, 
        {tabName: 'Informações adicionais', link: 'page1'}
      ] },
      { tabName: 'Atividades', link: 'page1' }
    ];

    return (
      <div className='App'>
        <header>
          <TabContainer tabs={tabs} />
        </header>
        <main>
          <Switch>
            <Route path="/page1" component={PersonalInformation} />
            <Route path="/page2" component={Page2} />
          </Switch>
        </main>
        <footer className="footer">
          <div className="container">
            <span className="text-muted">Rodapé bonzão bb</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
