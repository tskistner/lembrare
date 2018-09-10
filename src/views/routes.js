import React from 'react';
import { Route } from 'react-router-dom';
import { Activities, Settings, Book, AddBook } from './';

let i = 0;
const routes = [
    //<Route path={`${process.env.PUBLIC_URL}/`} component={Home} key={i++} />,
    <Route path='/atividades' component={Activities} key={i++} />,
    <Route path='/book' component={Book} key={i++}/>,
    <Route path='/addBook' component={AddBook} key={i++}/>,
    <Route path='/cadastro' component={Settings} key={i++} />
]
export default routes;