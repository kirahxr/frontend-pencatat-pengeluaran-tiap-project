//import liraries
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity 
} from 'react-native';

import { Actions } from 'react-native-router-flux';

// create a component
export default class FormLogin extends Component<{}> {

    home() {
        Actions.home()
    }

    render() {
        return (
            <View style={styles.inputBox}>
                <TextInput style={styles.inputBox2}
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Username"
                    placeholderTextColor = "#ffffff"
                    selectionColor="#fff"
                    onSubmitEditing={()=> this.password.focus()}
                />
                <TextInput style={styles.inputBox2} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor = "#ffffff"
                    selectionColor="#fff"
                    ref={(input) => this.password = input}
                />  
                <TouchableOpacity onPress={this.home} style={styles.button}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container : {
      flexGrow: 1,
      justifyContent:'center',
      alignItems: 'center'
    },  
    inputBox: {
        width:300,
        backgroundColor:'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10
    },
    inputBox2: {
        width: 270,
        backgroundColor:'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        alignItems: 'center',
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10
    },
    button: {
      width:270,
      backgroundColor:'#ffde03',
       borderRadius: 25,
       alignItems: 'center',
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    }
    
});