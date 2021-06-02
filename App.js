import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import firstpage from './First';
import temppage from './Temp';
import humipage from './Humi';
import solarpage from './Solar';
import gradipage from './Gradi';
import LoadingPage from './Loading';
import SignupPage from './SignUp';
const App = createStackNavigator(

    {
        
        Home: {screen:LoadingPage},
        SignUp: {screen:SignupPage},
        First: {screen:firstpage},
        Temp: {screen:temppage},
        Humi: {screen:humipage},
        Solar: {screen:solarpage},
        Gradi: {screen:gradipage}
    },
    {initialRouteName: 'Home', headerMode: 'none'}
);

export default createAppContainer(App);