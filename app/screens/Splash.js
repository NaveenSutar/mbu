import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';

export default class Splash extends Component {
	render() {
		return (
			<RadialGradient style={styles.container} colors={['#1B5378','#0E2A3C']} stops={[0.1,0.5]} radius={500}>
				<StatusBar backgroundColor="#0E2A3C" barStyle="light-content"/>
				<View style={styles.upper}>
					<Image style={styles.logoImage} source={{uri:'logo'}} />
					<Text style={styles.logoText}>myBeatus</Text>
					<Text style={styles.taglineText}>Education - Success - Excellence</Text>
				</View>
				<View style={styles.bottom}>
					<Text style={styles.taglineText}>www.mybeatus.com</Text>
				</View>
			</RadialGradient>
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
	
	upper:{
		flex:30,
		alignContent:'center',
		justifyContent: 'center',
		alignItems:'center',
		
	},
	
	logoText:{
		fontSize:20, 
		color:'white', 
		fontWeight:'bold'
	},
	
	taglineText:{
		fontSize:10, 
		color:'white'
	},
	
	bottom:{
		flex:1,
	},
	
	logoImage:{
		height:50,
		width:50,
		borderRadius: 5,
		borderColor:'white',
	},
});