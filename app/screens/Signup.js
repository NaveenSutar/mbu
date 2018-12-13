import React, { Component } from "react";
import {TouchableOpacity, TouchableHighlight, CheckBox, AppRegistry, StyleSheet, TextInput, View, Alert, Button, Text, Image, StatusBar } from "react-native";
import RadialGradient from "react-native-radial-gradient";
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

import Signin from './Signin';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: "",
      isLoading: true
    };
  }

  _FBSDK{
    loginManager({

    });
  }

  UserRegistrationFunction = () => {
    const { email } = this.state;
    const { password } = this.state;
    const { password_confirmation } = this.state;
    const { fname } = this.state;
    const { lname } = this.state;

    fetch("http://192.168.0.190:8000/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-Language": "en-US",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password,
        password_confirmation: password_confirmation,
        fname: fname,
        lname: lname
      })
    })
      .then(response => response.text())
      .then(text => {
        alert(text);
        console.log(text);
      })
      .catch(error => {
        console.error(error);
      });

    //}).then((response) => response.json())
    //.then((responseJson) => {
    //alert(responseJson);
    //Alert.alert(JSON.stringify(responseJson));
    //}).catch((error) => {
    //console.error(error);
    //});
  };

  render() {
    return (
      <RadialGradient style={styles.container} colors={['#1B5378', '#0E2A3C']} stops={[0.1, 0.5]} radius={500}>
        <StatusBar backgroundColor="#0E2A3C" barStyle="light-content" />
        <View style={{ margin: 10 }}>

          <View style={styles.upper}>
            <Image style={styles.logoImage} source={{ uri: 'logo' }} />
            <Text style={styles.logoText}>myBeatus</Text>
            <Text style={styles.taglineText}>Education - Success - Excellence</Text>
          </View>

          <View>
            <Text style={{ fontSize: 20, color: "#fff", textAlign: 'center', marginBottom: 10, marginTop: 10 }}>Signup</Text>

            <TextInput placeholder="Email" onChangeText={email => this.setState({ email })} underlineColorAndroid='transparent' style={styles.TextInputStyleClass} />

            <TextInput placeholder="Password" onChangeText={password => this.setState({ password })} underlineColorAndroid='transparent' style={styles.TextInputStyleClass} secureTextEntry={true} />

            <TextInput placeholder="Retype Password" onChangeText={password_confirmation => this.setState({ password_confirmation })} underlineColorAndroid='transparent' style={styles.TextInputStyleClass} secureTextEntry={true} />

            <TextInput placeholder="Firstname" onChangeText={fname => this.setState({ fname })} underlineColorAndroid='transparent' style={styles.TextInputStyleClass} />

            <TextInput placeholder="Lastname" onChangeText={lname => this.setState({ lname })} underlineColorAndroid='transparent' style={styles.TextInputStyleClass} />

            <View style={{ marginTop: -5, flexDirection: 'row' }}>
              <Text style={{ flex: 20, color: '#fff', fontSize: 12, marginBottom: 5, }}>By keeping a myBeatus account, you agree to our Terms and Conditions, Privacy Policy, End User Licence Agreement, Cookies Policy.</Text>
            </View>
            
            <TouchableOpacity onPress={this.UserRegistrationFunction}>
              <View style={styles.ButtonStyleClass}>
                <Text style={{fontSize: 15,}}>SIGNUP</Text>
              </View>
            </TouchableOpacity>

            
          </View>

          <View onPress={() => this.props.navigation.navigate('signin')} style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 5 }}>
            <Text onPress={() => this.props.navigation.navigate('signin')} style={{ fontSize: 12, color: '#fff' }}>Already have an account? </Text>
            <Text onPress={() => this.props.navigation.navigate('signin')} style={{ fontSize: 12, color: '#009AFF' }}>SIGNIN</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ backgroundColor: 'white', height: 1, flex: 20 }}></View>
            <Text style={{ fontSize: 15, color: '#fff', flex: 5, textAlign: 'center' }}>OR</Text>
            <View style={{ backgroundColor: 'white', height: 1, flex: 20 }}></View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 5, alignContent: 'center', justifyContent: 'center', alignItems: 'center', }}>
            <Text style={{ fontSize: 15, color: '#fff', flex: 5, textAlign: 'center' }}>Signup Using</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', justifyContent: 'center', alignItems: 'center', }}>
            <Text style={{ fontSize: 15, color: '#fff', flex: 1, textAlign: 'center' }}>FACEBOOK</Text>
            <Text style={{ fontSize: 15, color: '#fff', flex: 1, textAlign: 'center' }}>LINKEDIN</Text>
          </View>
        </View>
      </RadialGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },

  upper: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  },

  logoText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  },

  taglineText: {
    fontSize: 10,
    color: "white"
  },

  logoImage: {
    height: 50,
    width: 50,
    borderRadius: 5,
    borderColor: "white"
  },

  TextInputStyleClass: {
    marginBottom: 15,
    height: 40,
    backgroundColor: "white",
    borderRadius: 5,
    fontSize: 16,
    color: "#1A5378",
    paddingLeft: 10
  },

  ButtonStyleClass: {
    backgroundColor: "#fff",
    borderRadius: 100,
    marginTop: 5,
    padding: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  },

  signupImage: {
    height: 50,
    width: 200,
    borderRadius: 5
  }
});

const AppNavigator = createStackNavigator({
  signup: {
    screen: Signup,
    navigationOptions: {
      headerLeft: null,
      headerVisible: false,
    }
  },
  signin: {
    screen: Signin,
    navigationOptions: {
      headerLeft: null,
      headerVisible: false,
    }
  },
}, {
    initialRouteName: 'signup',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

export default createAppContainer(AppNavigator);
