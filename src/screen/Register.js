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
import FormRegister from '../components/FormRegister';

import { Actions } from 'react-native-router-flux';

// create a component
export default class Register extends Component<{}> {
    goBack() {
        Actions.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <FormRegister type="Register"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Already have an account? </Text>
                    <TouchableOpacity onPress={this.goBack}>
                        <Text style={styles.signupButton}>Sign in</Text>
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