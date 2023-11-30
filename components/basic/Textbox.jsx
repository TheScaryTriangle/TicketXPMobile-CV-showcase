import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

/**
 * @dev Standard button component for the app
 * @dev Do not use any other custom buttons
 */
const TextBox = ({ title, onPress, buttonStyle, textStyle }) => {
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
            />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default TextBox;
