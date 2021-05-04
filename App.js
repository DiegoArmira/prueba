//import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import {createAppContainer} from 'react-navigation';
//import {createStackNavigator} from 'react-navigation-stack';
import { StyleSheet, Text, View } from 'react-native';
import Registro from "./screen/Registro"
import Login from "./screen/Login"

export default function App()
{
  return <Login/>
}

//---AQUI NO HE MODIFICADO NADA 
/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

*/