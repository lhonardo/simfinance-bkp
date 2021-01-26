import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutPage from '../components/AboutPage';
import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';

import PrivateRoute from './PrivateRouter';
import LoginPage from '../components/LoginPage';
import GetStartedPage from '../components/GetStartedPage';
import FormsPage from '../components/FormsPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <PrivateRoute path="/" component={HomePage} exact={true} />
                <PrivateRoute path="/home" component={HomePage} />

                <Route path="/login" component={LoginPage} />
                <PrivateRoute path="/about" component={AboutPage} />
                <PrivateRoute path="/forms" component={FormsPage} />

                <PrivateRoute path="/start" component={GetStartedPage} />
                <PrivateRoute path="/contact" component={ContactPage} />

                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
