import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import userModule from '../api/userModule';
import { useUser } from '../context/userContext';

// Components
import Button from '../components/basic/Button';

const Register = ({ navigation }) => {
    const [isFailed, setIsFailed] = useState(false)
    const { setUserDetails } = useUser();

    // Validation schema using Yup
    const validationSchema = yup.object().shape({
        Username: yup.string().email('Invalid email').required('Email is required'),
        Password: yup.string().required('Password is required'),
    });

    const handleLogin = async (values) => {
        const loginCall = await userModule.register(values)

        if (loginCall != "Failed") {
            setUserDetails(loginCall)
            navigation.goBack()
        } else {
            setIsFailed(true)
        }
    };

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ Username: '', Password: '' }}
                onSubmit={(values) => handleLogin(values)}
                validationSchema={validationSchema} // Uncomment this for validation
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View>
                        <Text>Email</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('Username')}
                            onBlur={handleBlur('Username')}
                            value={values.Username}
                            keyboardType="email-address"
                        />
                        {touched.Username && errors.Username && <Text style={styles.errorText}>{errors.Username}</Text>}

                        <Text>Password</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('Password')}
                            onBlur={handleBlur('Password')}
                            value={values.Password}
                            secureTextEntry
                        />
                        {touched.Password && errors.Password && (
                            <Text style={styles.errorText}>{errors.Password}</Text>
                        )}

                        <Button onPress={handleSubmit} title="Register" />

                    </View>
                )}
            </Formik>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    errorText: {
        color: 'red',
    },
});

export default Register;
