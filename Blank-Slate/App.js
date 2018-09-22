import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class Blink extends Component {
  constructor(props){
    super(props)
    this.state = {isShowingText: true}

    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      })
    }, 1000)
  }
  render(){
    let display = this.state.isShowingText ? this.props.text: ' ';
    return (
      <Text>{display}</Text>
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
        <Blink text="yessss do this!" />
      </View>
    )
  }
}
