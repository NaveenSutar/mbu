import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';

import Swiper from './Swiper';

export default class Onboard extends Component {
  render() {
    return (
      <Swiper>
        {/* First screen */}
        <View style={[styles.slide, { backgroundColor: '#ffffff' }]}>
          <View style={styles.logoPart}>
            <Image style={styles.logoImage} source={{ uri: 'logo' }} />
            <Text style={styles.logoText}>myBeatus</Text>
            <Text style={styles.taglineText}>Education - Success - Excellence</Text>
          </View>
          <View style={styles.contentPart}>
            <Text>Select Your Language</Text>
          </View>
        </View>

        {/* Second screen */}
        <View style={[styles.slide, { backgroundColor: '#ffffff' }]}>
        <View style={styles.logoPart}>
            <Image style={styles.logoImage} source={{ uri: 'logo' }} />
            <Text style={styles.logoText}>myBeatus</Text>
            <Text style={styles.taglineText}>Education - Success - Excellence</Text>
          </View>
          <View style={styles.contentPart}>
            <Text>Track Your Academic Growth</Text>
          </View>
        </View>

        {/* Third screen */}
        <View style={[styles.slide, { backgroundColor: '#ffffff' }]}>
        <View style={styles.logoPart}>
            <Image style={styles.logoImage} source={{ uri: 'logo' }} />
            <Text style={styles.logoText}>myBeatus</Text>
            <Text style={styles.taglineText}>Education - Success - Excellence</Text>
          </View>
          <View style={styles.contentPart}>
            <Text>Search for Trainings Around You</Text>
          </View>
        </View>

        {/* Fourth screen */}
        <View style={[styles.slide, { backgroundColor: '#ffffff' }]}>
        <View style={styles.logoPart}>
            <Image style={styles.logoImage} source={{ uri: 'logo' }} />
            <Text style={styles.logoText}>myBeatus</Text>
            <Text style={styles.taglineText}>Education - Success - Excellence</Text>
          </View>
          <View style={styles.contentPart}>
            <Text>Manage your Daily Education Progress</Text>
          </View>
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
  },

  logoPart:{
    flex:3,
    justifyContent: 'center',   // Center vertically
    alignItems: 'center',       // Center horizontally
  },

  contentPart:{
    flex:7,
    alignItems: 'center',       // Center horizontally
  },
  logoImage: {
    height: 50,
    width: 50,
    borderRadius: 5,
    borderColor: "white"
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  taglineText: {
    fontSize: 10,
  },
});