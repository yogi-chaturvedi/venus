/**
 * Created by Yogesh Chaturvedi on 11-06-2017.
 */
import React, { Component } from 'react';
import { Router, Route, browserHistory ,IndexRoute} from 'react-router';
import Login from './user/login';
import Student from './student';
import Employee from './employee';
import Assets from './assets';
import Header from '../component/header';
import App from '../component/app';
import Role from './role';
import ForgotPassword from './user/forgot-password';
import SignUp from './user/signup';

class Routes extends Component {

    constructor(props) {
        super(props);
        this.handleLoginRedirect = this.handleLoginRedirect.bind(this);
        this.handleRouteEnter = this.handleRouteEnter.bind(this);
        this.handleRouteChange = this.handleRouteChange.bind(this);
        this.handleProtectedRoute = this.handleProtectedRoute.bind(this);
    }

    handleLoginRedirect(nextState, replace) {
        if (localStorage.getItem("isUserLoggedIn") === 'true') {
            localStorage.setItem('activeTab', '/student');
            replace('/student');
        }
    }

    handleRouteEnter(nextRoute, replace) {
        this.handleProtectedRoute(nextRoute, replace);
    }

    handleRouteChange(previousRoute, nextRoute, replace) {
        this.handleProtectedRoute(nextRoute, replace);
    }

    handleProtectedRoute(nextRoute, replace) {
        let isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
        if (isUserLoggedIn === null || isUserLoggedIn === 'false') {
            localStorage.clear();
            replace('/');
        }
        else {
            let pathName = nextRoute.location.pathname;
            localStorage.setItem("activeTab", pathName.slice(1, pathName.length));
        }
    }

    render() {
        return (
            <Router history={browserHistory} {...this.props} >
                <Route path="/" component={App}>
                    <IndexRoute component={Login} onEnter={this.handleLoginRedirect}/>
                    <Route path="/" component={Header} onEnter={this.handleRouteEnter}
                           onChange={this.handleRouteChange}>
                        <Route component={Role}>
                            <Route path="/student" component={Student}/>
                            <Route path="/employee" component={Employee}/>
                            <Route path="/assets" component={Assets}/>
                        </Route>
                    </Route>
                    <Route path="/verify-user" component={ForgotPassword}/>
                    <Route path="/signup" component={SignUp}/>
                </Route>
            </Router>

        );
    }

}
export default Routes;