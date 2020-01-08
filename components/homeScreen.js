import React, { Component } from 'react';
import {Button,View,Text} from 'react-native'
export class homeScreen extends Component {
  render() {
    return (
        <>
        <View><Text>Hey this is loldsadklsakldsa</Text></View>
        <Button onPress={()=>this.props.navigation.navigate('Second')} title="Click Me"/>
        
        </>
    );
  }
}
// export default homeScreen;