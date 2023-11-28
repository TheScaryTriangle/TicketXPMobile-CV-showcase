import { NavigationContainer } from '@react-navigation/native';

import { StyleSheet, Text, View } from 'react-native';
import defaultStyle from './styles'
import Navigation from './navigation'

export default function App() {
  return (
    <NavigationContainer>
      <View style={defaultStyle.container}>
        <Navigation />
      </View>
    </NavigationContainer>
  );
}