import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.logoText}>Welcome to Main Screen</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignContent:'center',
		justifyContent: 'center',
		alignItems:'center'
	},
	
	logoText:{
		fontSize:20, 
		color:'black', 
		fontWeight:'bold'
	},
});
