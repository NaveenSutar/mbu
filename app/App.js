import React, {Component} from 'react';
import {AppRegistry, StatusBar} from 'react-native';

import OnboardOne from './screens/Onboarding/OnboardOne';

export default class App extends Component {
	componentDidMount() {
		// Hide the status bar
		StatusBar.setHidden(true);
	  }
	render() {
		return (
			<OnboardOne />
		);
	}
}

AppRegistry.registerComponent('App', () => App);