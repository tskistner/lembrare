import React from 'react';
import { Route } from 'react-router-dom';
import { Activities, Settings, Book, AddBook } from './';
import Page2 from './../views/settings/Page2';

let i = 0;
const routes = [
    //<Route path={`${process.env.PUBLIC_URL}/`} component={Home} key={i++} />,
    <Route path='/atividades' component={Activities} key={i++} />,
    <Route path='/book' component={Book} key={i++}/>,
    <Route path='/addBook' component={AddBook} key={i++}/>,
    <Route path='/cadastro' component={Settings} key={i++} />,
    <Route path='/page2' component={Page2} key={i++} />
]
export default routes;