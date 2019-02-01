import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation'

import ProductList from './ProductList';

export default class Home extends Component<{}> {

    static navigationOptions ={
        header: null
    }

    render() {
        return(
            <AppContainer />
        );
    }
}

const TabNavigator = createMaterialTopTabNavigator({
    HOME: { 
        screen: ProductList,
        navigationOptions:{
            tabBarLabel:'HOME',
            tabBarIcon:({tintColor})=>(
                <Icon name="home" color={tintColor} size={24} />
            )
        }
    },
    RUMAH: {
        screen 
    }

}, {
    tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'white',
        style: {
            backgroundColor: '#fd5c63',
            borderTopWidth: 0,
            shadowOffset: { width: 5, height: 3 },
            shadowColor: 'black',
            shadowOpacity: 0.5,
            elevation: 5,
            alignItems: 'center'
        }
    }
})
// ,{
//     animationEnabled:true,
//     swipeEnabled:true,
//     tabBarPosition:'bottom',
//     tabBarOptions:{
//         style:{
//             ...Platform.select({
//                 android:{
//                     backgroundColor:'#455a64'
//                 }
//             })
//         },
//         activeTintColor: '#000',
//         inactiveTintColor: '#d1cece',
//         showLabel:true
//     }
// })

const AppContainer = createAppContainer(TabNavigator)