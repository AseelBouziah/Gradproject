import React, { Component } from "react";
import axios from 'axios'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  ToastAndroid,
  Image,
  Alert,
} from "react-native";
import { AuthContext } from "../context";
//import { login } from "../../server/models/customer.module";
import Logo from './Logo';







export default  class login extends Component {

    

         
    
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  // onClickListener = (viewId) => {
  //   Alert.alert("Alert", "Button pressed "+viewId);
  // }
  static navigationOptions = {
    title: "ּ       تسجيل الدخول",
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: "darkgoldenrod",
      //Sets Header color
    },
    headerTintColor: "#fff",
    //Sets Header text color

    headerTitleStyle: {
      fontWeight: "bold",
      marginLeft: 5,
      fontSize: 20,
      fontFamily: "fontFamily",
      //Sets Header text style
    },
  };





  UserLoginFunction = () => {
    if (!(this.state.password === '' || this.state.email === '')) {
      let url2 = 'http://' + '192.168.1.8' + ':3000/logini/';
      axios.post(url2, {
        email: this.state.email,
        password: this.state.password
      }
      )
        .then(function (result) {
          if (result.data.result === "failed") {
            //AsyncStorage
           // ToastAndroid.show('Error with database. Please try again later. ', ToastAndroid.SHORT)
            Alert.alert("Error with database. Please try again later.")
            
          }
          else if (result.data.result === "success") {
         //   ToastAndroid.show('Email Or Password incorrect', ToastAndroid.SHORT)
            Alert.alert("Email Or Password incorrect.")

            
          }
          else if (result.data.result === "in") {
            console.log("signing-in succsed")
            //ToastAndroid.show('hiiiiiiiiiiiiiii', ToastAndroid.SHORT) 
            Alert.alert("Welcome")

           signedIn()
          }
          else {
             
           // ToastAndroid.show('يجب  عليك ملئ البيانات المطلوبة اولا ', ToastAndroid.SHORT)
            Alert.alert("يجب  عليك ملئ البيانات المطلوبة اولا")

          }

        })
        .catch(function (error) {
          console.log(error);
        });
    }


    const signedIn = ()=>{
        this.props.navigation.navigate('TabsScreen'
              , {
                JSON_ListView_Clicked_Item: this.state.UserEmail,
  
                JSON_ListView_Clicked_Item: this.state.userid,
  
              });
              this.storeToken(this.state.Email);
      }









  };






  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Logo/>
        <View style={styles.inputContainer}>
          <Image source={require("../images/login.png")} style={styles.p1} />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            value={this.state.email}
            onChangeText={TextInputValue => this.setState({email: TextInputValue })}

          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={require("../images/pass.png")} style={styles.p1} />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            value={this.state.password}
            onChangeText={TextInputValue => this.setState({ password: TextInputValue })}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={this.UserLoginFunction}
        >
          <Text style={styles.loginText}>Log In</Text>
        </TouchableHighlight>

        {/* <Icon.Button style={{paddingTop:10,backgroundColor:'blue'}}
           name="facebook"
         backgroundColor="#3b5998"
          onPress={this.loginWithFacebook}>
تسجيل الدخول بواسطة الفيس بوك</Icon.Button>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text> هل نسيت كلمة السر ؟ </Text>
        </TouchableHighlight> */}

        <View>
          <TouchableHighlight>
            <Text
              style={styles.b2}
              onPress={() => this.props.navigation.navigate("CreateAccount")}
            >
              Don't Have an Account?
            </Text>

          </TouchableHighlight>
           
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  inputContainer: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: 275,
    marginRight: 15,
    bottom:150
  },
  inputs: {
    height: 50,
    width: 240,
    borderColor: "#005d66",
    borderWidth: 1,
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#fff",
    marginLeft: 10,
    flex: 1,
  },

  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#005d66",
    bottom:150
  },
  b2: {
    color: "#14b3e3",
    bottom:150

  },
  loginText: {
    color: "white",
  },
  p1: {
    width: 25,
    height: 25,
  },
});


