import React, {Component} from 'react';
import CheckBox from 'react-native-checkbox';
import {
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableWithoutFeedback,
  StatusBar,
  SafeAreaView,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image} from 'react-native';


export default class Loginpage extends Component{
  render(){
    return(
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content"/>
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
       <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('./Images/spie.png')}></Image>
       </View>
       <View style={styles.infoContainer}>
           <TextInput style={styles.input} placeholder="Email" placeholderTextColor='#000000' keyboardType='email-address' returnKeyType='next' autoCorrect={false} 
           onSubmitEditing={()=> this.refs.txtPassword.focus()} />
           <TextInput style={styles.input} placeholder="Password" placeholderTextColor='#000000' returnKeyType='go' secureTextEntry autoCorrect={false} 
           ref={"txtPassword"}/>
         <View style={styles.Txtcontainer}>
            <CheckBox label="Remember me"/>
        </View> 
          <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.logoContainer}>
          <Text style={styles.forgetpassword}>Forget Password?</Text>
          </View>
        </View>
       </KeyboardAvoidingView>
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection:'column',
    
  },
  logoContainer:{
    alignItems:'center',
    justifyContent:'center',
    flex: 1,
  },
  logo:{
    width:180,
    height: 200,
    position:'absolute',
    top:25
  },
  infoContainer:{
     position:'absolute',
     left:0,
     right:0,
     bottom:0,
     height:220,
     padding:8,
     marginBottom:60,
     backgroundColor:'#ffffff'
  },
  input:{
    height:40,
    backgroundColor: '#f0f0f0',
    borderBottomWidth:2,
    borderBottomColor: '#787878',
    //width:'90%',
    fontSize: 15,
    paddingHorizontal: 10,
    margin:10,


  },
  buttonContainer:{
    backgroundColor:'#003672',
    paddingVertical:15,
    borderRadius:10,
    marginLeft:15,
    marginRight:15,
    marginTop:10
  },
  buttonText:{
    textAlign:'center',
    color:'#ffffff',
    fontSize: 18
  },
  Txtcontainer:{
         flexDirection: 'row',
         width:'100%',
         paddingLeft:10
   },
   forgetpassword:{
     fontSize:14,
     color:'#003672',
     paddingTop:50,

   }
  
})

