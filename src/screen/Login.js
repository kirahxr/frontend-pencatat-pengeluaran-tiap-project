//import liraries
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import FormLogin from '../components/FormLogin';

import { Actions } from 'react-native-router-flux';

// create a component
export default class Login extends Component<{}> {
    register() {
        Actions.register()
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <FormLogin type="Login"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account yet? </Text>
                    <TouchableOpacity onPress={this.register}>
                        <Text style={styles.signupButton}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container : {
      backgroundColor:'#0336ff',
      flex: 1,
      alignItems:'center',
      justifyContent :'center'
    },
    signupTextCont : {
        flexGrow: 1,
        alignItems:'flex-end',
        justifyContent :'center',
        paddingVertical:16,
        flexDirection:'row'
    },
    signupText: {
        color:'rgba(255,255,255,0.6)',
        fontSize:16
    },
    signupButton: {
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500'
    }
});