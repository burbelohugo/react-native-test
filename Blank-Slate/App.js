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
    this.state = {isShowingText: this.props.OGState}
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      })
    }, 1000)
  }

  render(){
    let display = this.state.isShowingText ? this.props.text: ' ';
    return (
      <Text style={styles.bigblue}>{display}</Text>
    )
  }
}


export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
        <View style={{flex: .10, backgroundColor: 'powderblue'}} />
        <View style={{flex: .2, backgroundColor: 'skyblue'}} />
        <View style={{flex: .10, backgroundColor: 'steelblue'}} />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
