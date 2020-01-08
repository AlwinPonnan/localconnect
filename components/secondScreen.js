import React, { Component } from 'react';
import {Button,View,Text} from 'react-native'
export default class secondScreen extends Component {
  render() {
    return (
        <>
        <View><Text>Hey this is lol</Text></View>
        <Button onPress={()=>this.props.navigation.navigate('Home')} title="Click Me"/>
        
        </>
    );
  }
}
