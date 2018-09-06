import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Components/Judul';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}> 
      <Judul title = "Biodata"/>
      <Judul title = "Login"/>
      <Judul title = "Form"/>
        <Text>Habenula Mahogra Elfreda</Text>
        <Text>XI RPL 4</Text>
        <Text>13</Text>
        <Image source={require('./gwganteng.png')} style={{width: 150, height:50}}/>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#747fad',
  },

});
