//import liraries
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image 
} from 'react-native';

// create a component
export default class Logo extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                {/* <Image style={{ width: 40, height: 70 }} source={require('../img/kira.png')}/> */}
                <Text style={styles.logoText}>Welcome To NamaApp</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent:'flex-end',
        alignItems: 'center'
    },
    logoText : {
        marginVertical: 15,
        fontSize:25,
        fontFamily: 'sans-serif-condensed',
        color:'white'
    }
});