import React, {Component} from 'react';
import {
	TouchableHighlight, 
	CheckBox, 
	AppRegistry, 
	StyleSheet, 
	TextInput, 
	View, 
	Alert, 
	Button, 
	Text, 
	Image, 
	StatusBar, 
} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

import Signin from './screens/Signin';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = { 
			Email:'',
			Password: '',
			FirstName: '',
			LastName: '',
		}
	}
	
	UserRegistrationFunction = () =>{
		const { Email }  = this.state ;
		const { Password }  = this.state ;
		const { rePassword }  = this.state ;
		const { FirstName }  = this.state ;
		const { LastName }  = this.state ;

		fetch('http://localhost/mbu_mobile/user_signup.php', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email : Email,
				pword : Password,
				rpword : rePassword,
				fname : FirstName,
				lname : LastName,
			})

		}).then((response) => response.json())
		.then((responseJson) => {
			Alert.alert(responseJson);
		}).catch((error) => {
			console.error(error);
		});
	}
	
	render() {
		return (
			<RadialGradient style={styles.container} colors={['#1B5378','#0E2A3C']} stops={[0.1,0.5]} radius={500}>
				<View style={{margin:10}}>
				
					<View style={styles.upper}>
						<Image style={styles.logoImage} source={{uri:'logo'}} />
						<Text style={styles.logoText}>myBeatus</Text>
						<Text style={styles.taglineText}>Education - Success - Excellence</Text>
					</View>
					
					<View>
						<Text style= {{ fontSize: 20, color: "#fff", textAlign: 'center', marginBottom: 15 }}>Signup</Text>
						
						<TextInput placeholder="Email" onChangeText={UserName => this.setState({UserName})} underlineColorAndroid='transparent' style={styles.TextInputStyleClass}/>
						
						<TextInput placeholder="Password" onChangeText={Password => this.setState({Password})}underlineColorAndroid='transparent' style={styles.TextInputStyleClass} secureTextEntry={true}/>
						
						<TextInput placeholder="Retype Password" onChangeText={rePassword => this.setState({rePassword})}underlineColorAndroid='transparent' style={styles.TextInputStyleClass} secureTextEntry={true}/>
						
						<TextInput placeholder="Firstname" onChangeText={FirstName => this.setState({FirstName})}underlineColorAndroid='transparent' style={styles.TextInputStyleClass} />
						
						<TextInput placeholder="Lastname" onChangeText={LastName => this.setState({LastName})}underlineColorAndroid='transparent' style={styles.TextInputStyleClass} />
						
						<View style={{marginTop:-5, flexDirection:'row'}}>
							<CheckBox checked={this.state.checked}/>
							<Text style={{flex:20, color:'#fff', fontSize:12, marginBottom:5,}}>By keeping a myBeatus account, you agree to our Terms and Conditions, Privacy Policy, End User Licence Agreement, Cookies Policy.</Text>
						</View>
		
						<View onPress={this.UserRegistrationFunction} style={styles.ButtonStyleClass}>
							<Text onPress={this.UserRegistrationFunction} style = {{fontSize:15,}}>SIGNUP</Text>
						</View>
					</View>
						
					<View onPress={()=> this.props.navigation.navigate('Details')} style={{flexDirection:'row',justifyContent: 'center', marginTop:5}}>
						<Text onPress={()=> this.props.navigation.navigate('Details')} style = {{fontSize:12, color:'#fff'}}>Already have an account? </Text>
						<Text onPress={()=> this.props.navigation.navigate('Details')} style = {{fontSize:12, color:'#009AFF'}}>Signin</Text>
					</View>
					
					<View style={{flexDirection:'row', justifyContent: 'center', alignContent:'center', justifyContent: 'center',alignItems:'center',}}>
						<View style={{backgroundColor:'white', height:1, flex:20}}></View>
						<Text style = {{fontSize:15, color:'#fff', flex:5, textAlign:'center' }}>OR</Text>
						<View style={{backgroundColor:'white', height:1, flex:20}}></View>
					</View>
					
					<View style={{flexDirection:'row', justifyContent: 'center', marginTop:5, alignContent:'center', justifyContent: 'center',alignItems:'center',}}>
						<Text style = {{fontSize:15, color:'#fff', flex:5, textAlign:'center' }}>Signup Using</Text>
					</View>
					
					<View style={{flexDirection:'row',justifyContent: 'center', marginTop:5}}>
						<Image style={styles.signupImage} source={{uri:'fb'}} />
						<Image style={styles.signupImage} source={{uri:'li'}} />
					</View>
				</View>
			</RadialGradient>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	
	upper:{
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
	
	logoImage:{
		height:50,
		width:50,
		borderRadius: 5,
		borderColor:'white',
	},

	TextInputStyleClass: {
		marginBottom: 10,
		height: 40,
		backgroundColor:'white',
		borderRadius: 5,
		fontSize:16,
		color:'red',
		paddingLeft:10,
	},
	
	ButtonStyleClass: {
		backgroundColor: '#fff',
		borderRadius: 100,
		padding: 10,
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowRadius: 5,
		shadowOpacity: 1.0,
		alignContent:'center',
		justifyContent: 'center',
		alignItems:'center',
	},
	
	signupImage:{
		height:50,
		width:150,
		borderRadius: 5,
	},
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
  },
  Details: {
    screen: Signin,
  },
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);