import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import HomeScreen from './HomeScreen';
import Game from './Game';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'H O M E'}}/>
        <Stack.Screen name="Game" component={Game} options={{title: 'G A M E'}}/>
    </Stack.Navigator>
  </NavigationContainer>
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
