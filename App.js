// In App.js in a new project
import React from "react";
import CheckBox from 'react-native-checkbox';
import { View, 
         Text, 
         StyleSheet, 
         Button,
         TextInput, 
         TouchableWithoutFeedback,
         StatusBar,
         SafeAreaView,
         Keyboard,
         KeyboardAvoidingView,
         TouchableOpacity,
         Image,
         Linking } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class LoginScreen extends React.Component{
   static navigationOptions = {
       header: null
   }
  render(){
    return(
  <SafeAreaView style={styles.mycontainer}>
    <StatusBar barStyle="light-content"/>
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
       <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('./assets/Images/spie.png')}></Image>
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
              {/* <Text style={styles.buttonText} onPress={()=>this.props.navigation.navigate('Home')}>Login</Text> */}
              <Button title="Login" onPress={()=>this.props.navigation.navigate('Home')}/>
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

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.newcontainer}> 
        <View style={styles.alert}>
          <Image style={{width: 100, height: 100,marginTop:10}} source={require('./assets/Images/thumbup2.png')} />
        </View> 
        <View style={styles.showup}>
        <Image style={{width: 50, height: 50}} source={require('./assets/Images/icon2.png')} />
          <View>
          <Text style={styles.mainTxt}>Wetterwarnung</Text>
          <Text style={styles.secTxt}>Warnung vor Extremwetter</Text>
          </View>
        </View>
        <View style={styles.showup1}>
        <Image style={{width: 50, height: 50}} source={require('./assets/Images/icon3.png')} />
        <View>
          <Text style={styles.mainTxt}>Sanierung
          </Text>
          <Text style={styles.secTxt}>Sanierung des vorderen Eingangsbereichs</Text>
          <View style={{width:'30%',marginTop:5}}>
          <Button title="View" onPress={()=>this.props.navigation.navigate('About')}/>
          </View>
          </View>
        </View>
        <View style={styles.showup1}>
        <Image style={{width: 50, height: 50}} source={require('./assets/Images/icon5.png')} />
        <View>
          <Text style={{marginLeft: 10,fontSize: 15,color: '#484848'}}>Mitarbeiter A hat sich den Arm verstaucht</Text>
          <Text style={styles.secTxt}>Betriebsarzt ist informiert und Mitarbeiter ist in Behandlung</Text>
          </View>
        </View>
        {/* <View style={{width:'100%',height:'7%',backgroundColor:'#FFFFFF'}}></View> */}
        <View style={styles.footer}>
          <View style={styles.foot1}>
          <Image style={{width: 20, height: 20,marginLeft:25,marginTop:5}} source={require('./assets/Images/alert2.png')} />
             <Text style={styles.ftext1}>Warnung</Text>
          </View>
          <View style={styles.foot1}>
          <Image style={{width: 20, height: 20,marginLeft:25,marginTop:5}} source={require('./assets/Images/doc2.png')} />
             <Text style={styles.ftext2}>Unfall</Text>
          </View>
          <View style={styles.foot1}>
          <Image style={{width: 20, height: 20,marginLeft:25,marginTop:5}} source={require('./assets/Images/speaker.png')} />
             <Text style={styles.ftext3}>Havarie</Text>
          </View>
          <View style={styles.foot1}>
          <Image style={{width: 20, height: 20,marginLeft:25,marginTop:5}} source={require('./assets/Images/bookmark2.png')} />
             <Text style={styles.ftext5}>Geplante</Text>
             <Text style={styles.ftext4}>Maßnahmen</Text>
          </View>
          <View style={styles.foot1}>
          <Image style={{width: 20, height: 20,marginLeft:25,marginTop:5}} source={require('./assets/Images/bookmark3.png')} />
             <Text style={styles.ftext5}>Ungeplante</Text>
             <Text style={styles.ftext4}>Maßnahmen</Text>
          </View>
        </View>  
      </View>
    )
  }
}

class AboutScreen extends React.Component {
  render() {
    return (
      <View style={styles.msgcontainer}> 
        <View style={styles.mytxt1}>
        <Image style={{width: 50, height: 50}} source={require('./assets/Images/icon3.png')} />
        <View>
          <Text style={styles.myTxt2}>Sanierung</Text>
          <Text style={styles.myTxt3}>Sanierung des vorderen Eingangsbereichs</Text>
          </View>
        </View>     
        
        <View style={styles.myfetch}>
          <View style={styles.mybox1}>
            <Text style={{color: '#484848'}}>Ereignis Nummer</Text>
            <TextInput style={styles.myinput} />
          </View>
          <View style={styles.mybox1}>
          <Text style={{color: '#484848'}}>Kategorie</Text>
            <TextInput style={styles.myinput} />
          </View>
          </View> 
          <View style={styles.myfetch}>
          <View style={styles.mybox2}>
            <Text style={{color: '#484848'}}>Beschreibung</Text>
            <TextInput style={styles.myinput} />
          </View>
          </View> 
          <View style={styles.myfetch}>
          <View style={styles.mybox1}>
            <Text style={{color: '#484848'}}>Dauer von</Text>
            <TextInput style={styles.myinput} />
          </View>
          <View style={styles.mybox1}>
          <Text style={{color: '#484848'}}>Dauer bis</Text>
            <TextInput style={styles.myinput} />
          </View>
          </View> 
          <View style={styles.myfetch}>
          <View style={styles.mybox1}>
            <Text style={{color: '#484848'}}>Liegenschaft</Text>
            <TextInput style={styles.myinput} />
          </View>
          <View style={styles.mybox1}>
          <Text style={{color: '#484848'}}>Gebaude Nummer</Text>
            <TextInput style={styles.myinput} />
          </View>
          </View> 
          <View style={styles.myfetch}>
          <View style={styles.mybox1}>
            <Text style={{color: '#484848'}}>Etage</Text>
            <TextInput style={styles.myinput} />
          </View>
          <View style={styles.mybox1}>
          </View>
          </View> 
          <View style={styles.myfetch}>
          <View style={styles.mybox2}>
            <Text style={{color: '#484848'}}>Mogliche Einschrankungen</Text>
            <TextInput style={styles.myinput} />
          </View>
          </View> 
          <View style={styles.myfetch}>
          <View style={styles.mybox2}>
            <Text style={{color: '#484848'}}>Ansprechpartner</Text>
            <TextInput style={styles.myinput} />
          </View>
          </View> 
          

 
          {/* <View style={{width:'100%',height:'1%',backgroundColor:'#A9A9A9'}}></View> */}
        <View style={styles.myfooter}>
        <View style={styles.myfoot1}>
          <Image style={{width: 20, height: 20,marginLeft:5,marginTop:5}} source={require('./assets/Images/previous.png')} />
             <Text style={styles.myftext1}>Vorherige Nachricht</Text>
          </View>
          <View style={styles.myfoot1}>
          <Image style={{width: 20, height: 20,marginLeft:150,marginTop:5}} source={require('./assets/Images/next.png')} />
             <Text style={styles.myftext2}>Nachste Nachricht</Text>
          </View>
         </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  About: AboutScreen,
  Login: LoginScreen
},
{
  initialRouteName:'Login',
  defaultNavigationOptions:{
    title: 'Meldungen zu Gebaude A',
    headerStyle:{
      backgroundColor:'#DEEBF4',
    },
    headerTintColor:'#000000',
    headerTitleStyle:{
      fontWeight:'bold',
      fontSize:18
    },
  },
}
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component{
  render(){
    return <AppContainer/>;
  }
}

//export default App;

const styles =  StyleSheet.create({
  //app
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },

  //login
  mycontainer:{
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
     paddingTop:20,

   },

   //landingpage
   newcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  footer:{
    backgroundColor:'#999999',
    height: '14%',
    flexDirection: 'row',
    width:'100%',
    padding:5,
    marginTop: 110
  },
  showup:{
    flexDirection: 'row',
    width:'100%',
    marginTop: 10,
    padding:20,
    borderBottomColor: '#d9d9d9',
    borderBottomWidth: 1
  },
  showup1:{
    flexDirection: 'row',
    width:'100%',
    marginTop: -10,
    padding:20,
    borderBottomColor: '#d9d9d9',
    borderBottomWidth: 1
  },
  mainTxt:{
    marginLeft: 10,
    fontSize: 15,
    marginTop:6,
    color: '#5C85FF',
    fontWeight: 'bold'

  },
  secTxt:{
    marginLeft: 10,
    fontSize: 12,
    color: '#484848',
    marginTop:3,
    marginRight:10
  },
  foot1:{
    width:'20%',
    height:'100%',

  },
  ftext1: {
    color: '#ffffff',
    marginLeft: 10,
    fontSize:12
  },
  ftext2: {
    color: '#ffffff',
    marginLeft: 20,
    fontSize:12
  },
  ftext3: {
    color: '#ffffff',
    marginLeft: 15,
    fontSize:12
  },
  ftext4: {
    color: '#ffffff',
    marginLeft: 12,
    fontSize:10
  },
  ftext5: {
    color: '#ffffff',
    marginLeft: 14,
    fontSize:10
  },
  
  //message

  msgcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  myfooter:{
    backgroundColor:'#999999',
    height: '12%',
    flexDirection: 'row',
    width:'100%',
    padding:5,
    marginTop:45
  },
  myfetch:{
    width:'100%',
    height:'10%',
    flexDirection: 'row',
    padding:5
  },
  mybox1:{
    width:'50%',
    height:'9%',
    padding:5
    
  },
  mybox2:{
    width:'100%',
    height:'9%',
    padding:5
    
  },
  myshowup:{
    flexDirection: 'row',
    width:'100%',
    marginTop: 10,
    padding:20,
    borderBottomColor: '#d9d9d9',
    borderBottomWidth: 1
  },
  mytxt1:{
    flexDirection: 'row',
    width:'100%',
    padding:5,
    borderBottomColor: '#d9d9d9',
    borderBottomWidth: 1
  },
  myTxt2:{
    marginLeft: 10,
    marginTop:5,
    fontSize: 15,
    color: '#5C85FF',
    fontWeight: 'bold'

  },
  myTxt3:{
    marginLeft: 10,
    fontSize: 12,
    color: '#484848',
    marginTop:3,
    marginRight:10
  },
  myfoot1:{
    width:'50%',
    height:'100%',

  },
  myftext1: {
    color: '#ffffff',
    marginLeft: 6,
    fontSize:12,
    marginTop:5
  },
  myftext2: {
    color: '#ffffff',
    marginLeft: 16,
    fontSize:12,
    textAlign:'right',
    marginTop:5
  },
  myinput:{
    width:'100%',
    padding: 18,
    fontSize: 20,
    borderBottomWidth:1,
    borderBottomColor: '#787878'

  }
 
})
