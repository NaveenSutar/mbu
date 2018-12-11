import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

import Signin from './Signin';

class EmailConfirmation extends Component {
	render() {
		return (
			<RadialGradient style={styles.container} colors={['#1B5378','#0E2A3C']} stops={[0.1,0.5]} radius={500}>
				<StatusBar backgroundColor="#0E2A3C" barStyle="light-content"/>
				<View style={styles.upper}>
					<Image style={styles.logoImage} source={{uri:'logo'}} />
					<Text style={styles.logoText}>myBeatus</Text>
					<Text style={styles.taglineText}>Education - Success - Excellence</Text>
					<Text style={styles.confirmMailText}>Please check your mail box and verify your mail id</Text>
					<Text style={styles.spamText}>(Please check your spam folder)</Text>
				</View>
				<View style={styles.bottom}>
					<Text onPress={() => this.props.navigation.navigate('signin')} style = {{fontSize:12, color:'#fff'}}>Click here to </Text>
					<Text onPress={() => this.props.navigation.navigate('signin')} style = {{fontSize:12, color:'#009AFF'}}>SIGNIN</Text>
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
	
	confirmMailText:{
		marginTop:10,
		fontSize:15,
		fontWeight:'bold',
		color:'white',
	},
	
	spamText:{
		fontSize:10,
		color:'white',
	},
	
	logoImage:{
		height:50,
		width:50,
		borderRadius: 5,
		borderColor:'white',
	},
	
	bottom:{
		flex:1,
		flexDirection:'row',
		justifyContent: 'center'
	},
});

const AppNavigator = createStackNavigator({
	emailconfirm: {
	  screen: EmailConfirmation,
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
	  headerMode: 'none',
	  navigationOptions: {
		headerVisible: false,
	  }
	});
  
  export default createAppContainer(AppNavigator);