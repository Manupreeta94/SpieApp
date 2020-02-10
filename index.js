/**
 * @format
 */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
//import Loginpage from './components/Loginpage';
import SplashScreen from './components/SplashScreen';
import {name as appName} from './app.json';


class Main extends Component {
    constructor(props){
        super(props);
        this.state = { currentScreen: 'SplashScreen' };
        console.log('Start doing some task for aboout 3 seconds')
        setTimeout(()=>{
            console.log('Done some task in 3 seconds')
            this.setState({ currentScreen : 'App' })
        }, 3000)
    }
    render(){
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'SplashScreen' ? <SplashScreen /> : <App />
        return mainScreen
    }
}
AppRegistry.registerComponent(appName, () => Main)

// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
