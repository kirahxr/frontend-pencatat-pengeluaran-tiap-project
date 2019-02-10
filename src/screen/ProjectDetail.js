import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, } from 'native-base';
import ActionButton from 'react-native-action-button';
import { Actions } from 'react-native-router-flux';

export default class CardShowcaseExample extends Component {
    back() {
        Actions.pop()
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
                    <Button transparent onPress={this.back}>
                    <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Right>
                    <Button transparent onPress={this.login}>
                    <Icon name='person' />
                    </Button>
                </Right>
            </Header>
            <Content>
            <Card style={{flex: 0}}>
                <CardItem>
                <Left>
                    <Thumbnail source={{uri: 'https://avatars3.githubusercontent.com/u/33960326?s=460&v=4'}} />
                    <Body>
                    <Text>Risky Makira</Text>
                    <Text note>February 5, 2019</Text>
                    </Body>
                </Left>
                </CardItem>
                <CardItem>
                <Body>
                    <Image source={{uri: 'https://www.archer.com.mt/wp-content/uploads/golang-gopher.png'}} style={{height: 200, width: 300, flex: 1}}/>
                    <Text>
                    Go is a statically typed, compiled programming language designed at
                    Google by Robert Griesemer, Rob Pike, and Ken Thompson. Go is
                    syntactically similar to C, but with the added benefits of memory safety,
                    garbage collection, structural typing, and CSP-style concurrency.
                    </Text>
                </Body>
                </CardItem>
                <CardItem>
                <Left>
                    <Button transparent textStyle={{color: '#87838B'}}>
                    <Icon name="cash" />
                    <Text>Rp. 10.000.000</Text>
                    </Button>
                </Left>
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