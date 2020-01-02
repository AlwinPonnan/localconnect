/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,FlatList,state
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
         <View style={styles.mainpage}>
           <Text style={styles.MainHeading}>Categories</Text>
           <View style={styles.card}>
             <Text style={styles.Heading}>Salon</Text>
           </View>
           <View style={styles.cards}>
             <Text style={styles.Heading}>Departmental Store</Text>
           </View>
           <View style={styles.cards}>
             <Text style={styles.Heading}>Electical Store</Text>
           </View>
           <View style={styles.cards}>
             <Text style={styles.Heading}>Food Shops</Text>
           </View>
         </View>
         
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  mainpage:{
    backgroundColor:'#A6C4A0',
    height:800,
    flex:1,
  },
  MainHeading:{
   color:"black",
   fontSize:22,
   marginTop:"1%",
   marginBottom:"-6%",
   textAlign:"center",
  },
  Heading:{
    color:"black",
    fontSize:22,
    marginTop:"1%",
    marginBottom:"-6%",
    textAlign:"center",
   },
  card:{
    height:160,
    width:"95%",
    position:"relative",
    left:'2.5%',
    top:"4%",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:20,
    marginBottom:"21%",
    backgroundColor:"#D2DBA2",
  },
  cards:{
    height:160,
    width:"95%",
    position:"relative",
    left:'2.5%',
    top:"-4%",
    marginBottom:"3%",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:20,
    backgroundColor:"#D2DBA2",
  },
});

export default App;
