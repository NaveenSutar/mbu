import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Swiper from './Swiper';

export default class OnboardOne extends Component {
  render() {
    return (
      <Swiper>
        {/* First screen */}
        <View style={[styles.slide, { backgroundColor: '#202020' }]}>
          <Icon name="ios-nutrition" {...iconStyles} />
          <Text style={styles.header}>EAT</Text>
          <Text style={styles.text}>Good nutrition is an important part of leading a healthy lifestyle</Text>
        </View>

        {/* Second screen */}
        <View style={[styles.slide, { backgroundColor: '#222222' }]}>
          <Icon name="ios-cloud-upload" {...iconStyles} />
          <Text style={styles.header}>PRAY</Text>
          <Text style={styles.text}>Prayer is one of the most important things a Christian can do</Text>
        </View>

        {/* Third screen */}
        <View style={[styles.slide, { backgroundColor: '#242424' }]}>
          <Icon name="ios-cloud-upload" {...iconStyles} />
          <Text style={styles.header}>PRAY</Text>
          <Text style={styles.text}>Prayer is one of the most important things a Christian can do</Text>
        </View>

        {/* Fourth screen */}
        <View style={[styles.slide, { backgroundColor: '#262626' }]}>
          <Icon name="ios-heart" {...iconStyles} />
          <Text style={styles.header}>LOVE</Text>
          <Text style={styles.text}>Where there is love there is life</Text>
        </View>

      </Swiper>
    );
  }
}

const iconStyles = {
  size: 100,
  color: '#FFFFFF',
};

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