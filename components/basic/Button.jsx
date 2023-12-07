import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

/**
 * @dev Standard button component for the app
 * @dev Do not use any other custom buttons
 * @notice Button will fill the entire parent container
 */
const Button = ({ title, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width:'100%',
    heigth:'100%',
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
