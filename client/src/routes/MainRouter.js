import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import {
    DashboardComponent,
    TeamsComponent,
    SaveSoulComponent,
    AboutUsComponent,
    PetServiceComponent,
    AdoptionComponent
} from '../pages';

import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';

export const history = createHistory();

class MainRouter extends Component {
    render() {
        return (
            <Router history={history}>
                <div className="main_container">
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={DashboardComponent} />
                        <Route path="/adoption" component={AdoptionComponent} />
                        <Route path="/teams" component={TeamsComponent} />
                        <Route path="/sas" component={SaveSoulComponent} />
                        <Route path="/about" component={AboutUsComponent} />
                        <Route
                            path="/services"
                            component={PetServiceComponent}
                        />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export { MainRouter };
