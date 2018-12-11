import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

export default class OnboardOne extends Component {
  render() {
    return (
      <View style={[styles.slide, { backgroundColor: '#C04DEE' }]}>
        <Text style={styles.header}>EAT</Text>
        <Text style={styles.text}>Good nutrition is an important part of leading a healthy lifestyle</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,                    // Take up all screen
    justifyContent: 'center',   // Center vertically
    alignItems: 'center',       // Center horizontally
  },
  // Header styles
  header: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  // Text below header
  text: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: 'center',
  },
});