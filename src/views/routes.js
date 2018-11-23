import React from 'react';
import { Route } from 'react-router-dom';
import { Activities, Settings } from './';
import ReportTab from './reports/ReportTab';
import Home from './Home';

let i = 0;
const routes = [
    <Route path='/lembrare' component={Home} key={i++} />,
    <Route path='/atividades' component={Activities} key={i++} />,
    <Route path='/cadastro' component={Settings} key={i++} />,
    <Route path='/relatorio' component={ReportTab} key={i++} />
]
export default routes;