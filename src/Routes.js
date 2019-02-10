import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './screen/Login';
import Register from './screen/Register';
import Home from './screen/Home';
import ProjectList from './screen/ProjectList';
import ProjectDetail from './screen/ProjectDetail';

export default class Routes extends Component<{}> {
    render() {
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} title="Login" initial={true}/>
                    <Scene key="register" component={Register} title="Register"/>
                    <Scene key="home" component={Home} title="Home"/>
                    <Scene key="projectlist" component={ProjectList} title="ProjectList"/>
                    <Scene key="project" component={ProjectDetail} title="ProjectDetail"/>
                </Stack>
            </Router>
        );
    }
}