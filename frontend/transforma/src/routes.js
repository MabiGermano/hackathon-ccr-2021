import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cadastro from './pages/CadastroPage';


import Landing from './pages/LandingPage';
import Listagem from './pages/ListagemPage';

function Routes () {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/cadastro" exact component={Cadastro} />
                <Route path="/listagem" exact component={Listagem} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;