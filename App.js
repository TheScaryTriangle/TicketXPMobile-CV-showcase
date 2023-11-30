import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation';
import defaultStyle from './styles'; 

export default function App() {
  return (
    // <NavigationContainer>
      <View style={defaultStyle.container}>
        <Navigation />
      </View>
    // </NavigationContainer>
  );
}
