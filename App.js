import React, { useState } from 'react';
import { View } from 'react-native';
import Navigation from './navigation';
import styles from './styles'
//Context
import { UserProvider } from './context/userContext';
import { ThemeProvider } from './context/themeContext'

export default function App() {
  const [userDetails, setUserDetails] = useState({})

  return (
    <UserProvider>
      <ThemeProvider>
        <View style={styles.container}>
          <Navigation />
        </View>
      </ThemeProvider>
    </UserProvider>

  );
}
