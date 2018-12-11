import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

export default class OnboardThree extends Component {
  render() {
    return (
      <View style={styles.container}>
	  <StatusBar backgroundColor="#1B5378" barStyle="light-content"/>
        <Text style={styles.title}>
          OnboardThree
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});