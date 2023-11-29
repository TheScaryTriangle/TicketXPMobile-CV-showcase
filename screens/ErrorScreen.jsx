import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../components/Button';

/**
 * @dev Use this as the standard error message page
 * @param errorMessage The message that shows above the retry button
 * @returns 
 */
const ErrorScreen = ({ errorMessage, onRetry, buttonMessage = "Retry" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{errorMessage}</Text>
      <Button
        title = {buttonMessage}
        onPress = {onRetry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  errorText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  retryText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default ErrorScreen;
