import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-ionicons';
import { Container, Header, Content, Card, CardItem, Text, Body, Left, Right, Button, Title, Item, Input } from 'native-base';
import ActionButton from 'react-native-action-button';
import { Actions } from 'react-native-router-flux';

export default class CardHeaderFooterExample extends Component {
  
  project() {
    Actions.project()
  }

  login() {
    Actions.login()
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Container style={{ backgroundColor: '#0336ff' }}>
          <Header style={{ backgroundColor: '#0336ff' }}>
              <Left>
                  <Button transparent onPress={this.project}>
                  <Icon name='menu' />
                  </Button>
              </Left>
              <Right>
                  <Button transparent onPress={this.login}>
                  <Icon name='person' />
                  </Button>
              </Right>
          </Header>
          <Content>
            <Card>
              <CardItem header button onPress={this.project}>
                <Text>Golang</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                  Go is an open source programming language that makes it easy to build simple,
                  reliable, and efficient software. Download Go Binary distributions available for
                  </Text>
                  <Text button onPress={this.project} style={{ color: 'blue' }}>Read more...</Text>
                </Body>
              </CardItem>
            </Card>
          </Content>
        </Container>
      <ActionButton buttonColor='rgba(231,76,60,1)'>
        <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
          <Icon name="md-create" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
          <Icon name="md-done-all" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});


// //import liraries
// import React, { Component } from 'react';
// import {Platform, StyleSheet, Text, View, Button} from 'react-native';
// import {
//     Container,
//     Header,
//     Content,
//     Card,
//     CardItem,
//     Body,
//     Text,
//     Left,
//     Right,
//     Icon,
//     Button,
//     Fab,
//     Footer
//   } from "native-base";
// import { Image } from 'react-native';

// import axios from "axios";

// import { connect } from "react-redux";
// import { ALL_PROJECTS } from "../redux/actions/project";

// import { ip } from "../Server";

// // create a component
// class ProjectList extends Component {

//     state = {
//         value: 0,
//         project_id: 0,
//         key:[]
//     };

//     componentDidMount() {
//         this.props.dispatch(ALL_PROJECTS());
//     }

//     render() {
//       return (
//         <Container>
//           <Header />
//           <Content>
//             <Card>
//               <CardItem header>
//                 <Text>NativeBase</Text>
//               </CardItem>
//               <CardItem>
//                 <Body>
//                   <Text>
//                     //Your text here
//                   </Text>
//                 </Body>
//               </CardItem>
//               <CardItem footer>
//                 <Text>GeekyAnts</Text>
//               </CardItem>
//            </Card>
//           </Content>
//         </Container>
//       );
//     }
// }

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#2c3e50',
//     },
// });

// const mapStateToProps = state => ({
//     product: state.productReducer
// });

// //make this component available to the app
// export default connect(mapStateToProps)(ProjectList);
