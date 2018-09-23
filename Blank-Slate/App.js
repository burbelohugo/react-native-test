import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, AppRegistry, Image } from 'react-native';

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
  constructor(props){
    super(props)
    this.state = {text: ''}
  }
  render() {
    return (
      <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={(text) => this.setState({text})
      }
      />
      <Text style ={{padding:10, fontSize: 42}}>
      {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
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
