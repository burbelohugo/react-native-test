import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class AnotherGreeting extends Component {
  render() {
    return (
      <Text>Hi there, your age is {this.props.age}.</Text>
    )
  }
}


export default class App extends Component {
  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Greeting name="Hugo"/>
        <Greeting name="Hugo"/>
        <Greeting name="Hugo"/>
        <AnotherGreeting age="12"/>
      </View>
    )
  }
}
