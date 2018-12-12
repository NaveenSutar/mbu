import React, {Component} from 'react';
import {AppRegistry, StatusBar} from 'react-native';

import Onboard from './screens/Onboarding/Onboard';

export default class App extends Component {
	componentDidMount() {
		// Hide the status bar
		StatusBar.setHidden(true);
	  }
	render() {
		return (
			<Onboard />
		);
	}
}

AppRegistry.registerComponent('App', () => App);