import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cadastro from './pages/CadastroPage';


import Landing from './pages/LandingPage';

function Routes () {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/cadastro" exact component={Cadastro} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;