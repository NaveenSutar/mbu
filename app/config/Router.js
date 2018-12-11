import React, {Component} from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';

import Signup from '../screens/Signup';
import Signin from '../screens/Signin';

export const Tabs = TabNavigator({
	Signup:{
		screen : Signup,	
	},
	Signin:{
		screen : Signin,
	}
});