import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import defaultStyle from './styles'
import Navigation from './navigation'

export default function App() {
  return (
    <View style={defaultStyle.container}>
      <Navigation />
    </View>
  );
}