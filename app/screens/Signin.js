import React, { Component } from 'react';
import { TouchableHighlight, CheckBox, AppRegistry, StyleSheet, TextInput, View, Alert, Button, Text, Image, StatusBar } from 'react-native';
import RadialGradient from 'react-native-radial-gradient';

class Signin extends Component {
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
						<Text style={{ fontSize: 20, color: "#fff", textAlign: 'center', marginBottom: 10, marginTop: 10 }}>Signin</Text>
						<TextInput placeholder="Email" onChangeText={UserName => this.setState({ UserName })} underlineColorAndroid='transparent' style={styles.TextInputStyleClass} />
						<TextInput placeholder="Password" onChangeText={Password => this.setState({ Password })} underlineColorAndroid='transparent' style={styles.TextInputStyleClass} secureTextEntry={true} />
						<View onPress={this.UserRegistrationFunction} style={styles.ButtonStyleClass}>
							<Text onPress={this.UserRegistrationFunction} style={{ fontSize: 15, }}>SIGNIN</Text>
						</View>
					</View>

					<View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 5 }}>
						<Text style={{ fontSize: 12, color: '#fff' }}>Don't have an account? </Text>
						<Text style={{ fontSize: 12, color: '#009AFF' }}>SIGNUP</Text>
					</View>

					<View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', justifyContent: 'center', alignItems: 'center', }}>
						<View style={{ backgroundColor: 'white', height: 1, flex: 20 }}></View>
						<Text style={{ fontSize: 15, color: '#fff', flex: 5, textAlign: 'center' }}>OR</Text>
						<View style={{ backgroundColor: 'white', height: 1, flex: 20 }}></View>
					</View>

					<View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 5, alignContent: 'center', justifyContent: 'center', alignItems: 'center', }}>
						<Text style={{ fontSize: 15, color: '#fff', flex: 5, textAlign: 'center' }}>Signin Using</Text>
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
		justifyContent: 'center',
	},

	upper: {
		alignContent: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},

	logoText: {
		fontSize: 20,
		color: 'white',
		fontWeight: 'bold'
	},

	taglineText: {
		fontSize: 10,
		color: 'white'
	},

	logoImage: {
		height: 50,
		width: 50,
		borderRadius: 5,
		borderColor: 'white',
	},

	TextInputStyleClass: {
		marginBottom: 15,
		height: 40,
		backgroundColor: 'white',
		borderRadius: 5,
		fontSize: 16,
		color: 'red',
		paddingLeft: 10,
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
		alignContent: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},

	signupImage: {
		height: 50,
		width: 200,
		borderRadius: 5,
	},
});

export default Signin;