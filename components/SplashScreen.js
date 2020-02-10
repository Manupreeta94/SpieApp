import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View
} from 'react-native';

export default class Splash extends Component {
   render(){
        return(
          <View style={styles.container}>
              <Image style={{width: 200, height: 200}} source={require('./Images/spie.png')} /> 
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})