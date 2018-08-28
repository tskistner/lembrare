import React, { Component } from 'react';

class Page2 extends Component {



    render() {
        return (
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="index.html">Find My Pet - Cadastro Animal</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li class=""><a href="index.html">Home</a></li>
                        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Gerenciar Animais <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Incluir Animal</a></li>
                                <li><a href="CodigoRastreador.html">Codigo Rastreador</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="Cadastro.html"><span class="glyphicon glyphicon-user"></span> Cadastrar</a></li>
                        <li><a href="Login.html"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Page2;
