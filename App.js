/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, TextInput, ImageBackground, TouchableOpacity
} from 'react-native';
import SearchBar from 'react-native-search-bar';
export class RegisterPage extends Component {
  render() {
    return (
      <View style={styles.containerRegister}>
        <SafeAreaView>
          <ScrollView
            // contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.innercontainerr}>

              <Text style={styles.registerHeading}>Sign Up</Text>
              <TextInput placeholder="Name" style={styles.textAriaRegister}>
              </TextInput>
              <TextInput placeholder="Email" style={styles.textAriaRegister}>
              </TextInput>
              <TextInput placeholder="Phone Number" style={styles.textAriaRegister}>
              </TextInput>
              <TextInput placeholder="Location" style={styles.textAriaRegister}>
              </TextInput>
              <TextInput placeholder="Password" style={styles.textAriaRegister}>
              </TextInput>
              <TextInput placeholder="Confirm Password" style={styles.textAriaRegister}>
              </TextInput>
              <TouchableOpacity style={styles.registerButton}><Text style={{ color: "#fff", }}>Sign Up</Text></TouchableOpacity>
              <TouchableOpacity style={styles.loginButton}><Text style={{ color: "#fff", }}>Login</Text></TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    )
  }
}

export default class LoginPage extends Component {
  render() {
    return (
      <View style={styles.containerLogin}>
        <ImageBackground resizeMode={'cover'} style={{ flex: 2, height: "200%" }} source={require('/work/localconnect/download.jpg')}>
        <View>
            <Text style={{color:"#fff",marginLeft:"6%",
              textAlign:"left",marginBottom:"-28%", marginTop:"22%",fontSize:18}}>

              Login here for best service experience             
            </Text>  
          </View>
          <View style={styles.secondBox}>
            <View style={styles.thirdBox}>
              <View style={styles.innercontainer}>
                <View style={{ height: 200 }}>
                  <Text style={styles.loginHeading}>Hey There Welcome !</Text>
                </View>
                <TextInput placeholder="Name/Email" style={styles.textAriaLogin}>
                </TextInput>
                <TextInput placeholder="Password" style={styles.textAriaLogin}>
                </TextInput>
                <TouchableOpacity style={styles.loginButton}><Text style={{ color: "#fff", }}>Login</Text></TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            <Text style={{color:"#fff",justifyContent:"center", 
              alignSelf:"center",textAlign:"center", marginTop:"8%"}}>
            
              By Logging in you will be able to see all the businesses near you with 
              just few clicks !
            
            </Text>  
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          // contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.mainpage}>           <Text style={styles.MainHeading}>Categories</Text>
            <View style={styles.searchBar}>
              <SearchBar placeholder="Search" />
            </View>
            <View style={styles.card}>
              <Text style={styles.Heading}>Salon</Text>
            </View>
            <View style={styles.cards}>
              <Text style={styles.Headings}>Departmental Store</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.Heading}>Electical Store</Text>
            </View>
            <View style={styles.cards}>
              <Text style={styles.Headings}>Food Shops</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  /*styles for Register page */
  containerRegister: {
    width: "90%",
    alignSelf: "center",
    flex: 1,
    justifyContent: "center"
  },
  innercontainerr: {
    backgroundColor: "#f7f9fa",

    borderRadius: 7,
  },
  registerHeading: {
    fontSize: 35,
    justifyContent: "center",
    alignSelf: "center",
  },
  registerButton: {
    height: 40,
    backgroundColor: "#2f6343",
    margin: 10,
    borderRadius: 5,
    borderColor: "black",
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 10,
  },
  textAriaRegister: {
    color: "black",
    borderWidth: 1,
    margin: 8,
    borderRadius: 5,
    backgroundColor: "#f0f7ff",
    borderColor: "black",
    backfaceVisibility: "visible",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 10,
  },

  loginButton: {
    height: 40,
    backgroundColor: "#0c3a6b",
    margin: 10,
    borderRadius: 5,
    borderColor: "black",
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 10,
  },
  /*styles for Register page ends */
  /*styles for login page */
  containerLogin: {
    width: "100%",
    alignSelf: "center",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  thirdBox: {
    height: 420,
    backgroundColor: "grey",
    width: "96%",
    borderRadius: 12,
    marginTop: "30%",
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
  },
  secondBox: {
    height: 420,
    backgroundColor: "#bfcce0",
    width: "95%",
    borderRadius: 12,
    marginTop: "30%",
    marginLeft: "2%",
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
  },
  innercontainer: {
    height: 420,
    backgroundColor: "#31568c",
    width: "102%",
    marginLeft: "-5%",
    borderRadius: 12,
    marginTop: "5%",
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
  },
  loginHeading: {
    fontSize: 30,
    marginTop: "25%",
    textAlign: "center",
    color: "#fff",
  },
  loginButton: {
    height: 40,
    backgroundColor: "#0c3a6b",
    margin: 10,
    borderRadius: 5,
    borderColor: "black",
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 10,
  },
  textAriaLogin: {
    color: "black",
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#f0f7ff",
    borderColor: "black",
    backfaceVisibility: "visible",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 10,
  },
  /*styles for login page ends here  */
  searchBar: {
    width: "90%",
    height: "3%",
    borderRadius: 20,
    backgroundColor: "#000",
    alignSelf: "center",
    marginTop: "10%",
  },
  mainpage: {
    backgroundColor: "white",
    height: 800,
    flex: 1,
  },
  MainHeading: {
    color: "black",
    fontSize: 22,
    marginTop: "1%",
    marginBottom: "-6%",
    textAlign: "center",
  },
  Heading: {
    color: "black",
    fontSize: 22,
    textAlign: "center",
    marginTop: "40%",
  },
  Headings: {
    color: "black",
    fontSize: 22,
    textAlign: "center",
    marginTop: "-250%",
  },
  card: {
    height: 300,
    width: "45%",
    marginTop: "10%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#e3e3e3",
    borderBottomColor: "grey",
    borderBottomWidth: 6,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    marginLeft: "2%",
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 10,
    flex: 2,
    marginBottom: "5%",
  },
  cards: {
    flex: 2,
    marginLeft: "52%",
    marginTop: "-90%",
    height: 300,
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 10,
    backgroundColor: "#e3e3e3",
    borderBottomColor: "grey",
    borderBottomWidth: 6,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    marginBottom: "5%",
  },
});


