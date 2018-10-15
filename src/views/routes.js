import React from 'react';
import { Route } from 'react-router-dom';
import { Activities, Settings } from './';
import Home from './Home';

let i = 0;
const routes = [
    <Route path={`${process.env.PUBLIC_URL}/home`} component={Home} key={i++} />,
    <Route path='/atividades' component={Activities} key={i++} />,
    <Route path='/cadastro' component={Settings} key={i++} />
]
export default routes;