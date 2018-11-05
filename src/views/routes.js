import React from 'react';
import { Route } from 'react-router-dom';
import { Activities, Settings } from './';
import Home from './Home';
import GenerateReport from '../report/GenerateReport';

let i = 0;
const routes = [
    <Route path='/lembrare' component={Home} key={i++} />,
    <Route path='/atividades' component={Activities} key={i++} />,
    <Route path='/cadastro' component={Settings} key={i++} />,
    <Route path='/relatorio' component={GenerateReport} key={i++} />
]
export default routes;