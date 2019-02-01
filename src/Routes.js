import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './screen/Login';
import Register from './screen/Register';
import Home from './screen/Home';
import ProductList from './screen/ProductList';

export default class Routes extends Component<{}> {
    render() {
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} title="Login" initial={true}/>
                    <Scene key="register" component={Register} title="Register"/>
                    <Scene key="home" component={Home} title="Home"/>
                    <Scene key="productlist" component={ProductList} title="ProductList"/>
                </Stack>
            </Router>
        );
    }
}