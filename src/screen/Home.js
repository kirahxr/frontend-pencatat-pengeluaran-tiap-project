import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Icon from 'react-native-ionicons';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'

import ProjectList from './ProjectList';
import ProjectDetail from './ProjectDetail';

export default class Home extends Component<{}> {

    render() {
        return(
            <ProjectList />
        );
    }
}

const TabNavigator = createBottomTabNavigator({
    Home: { screen: ProjectList }
//     Home: { 
//         screen: ProjectList,
//         navigationOptions: {
//             tabBarLabel: 'PROJECT LIST',
//             tabBarIcon:({tintColor}) => (
//                 <Icon name="list" color={tintColor} size={15} />
//             )
//         }  
//     },
//     Detail: {
//         screen: ProjectDetail,
//         navigationOptions: {
//             tabBarLabel: 'PROJECT DETAIL',
//             tabBarIcon:({tintColor}) => (
//                 <Icon name="briefcase" color={tintColor} size={15} />
//             )
//         }
//     }
// }, {
//     animationEnabled: true,
//     swipeEnabled: true,
    
//     tabBarOptions: {
//         activeTintColor: '#ffde03',
//         inactiveTintColor: '#fefefe',
//         style: {
//             backgroundColor: '#0336ff',
//             borderTopWidth: 0,
//             shadowOffset: { width: 5, height: 3 },
//             shadowColor: 'black',
//             shadowOpacity: 0.5,
//             elevation: 5,
//             alignItems: 'center'
//         }
//     }
})
const AppContainer = createAppContainer(TabNavigator)