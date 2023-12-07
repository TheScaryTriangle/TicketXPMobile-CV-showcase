import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, View, Text, TextInput, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import userModule from '../api/userModule';
import { useUser } from '../context/userContext';

// Components
import Button from '../components/basic/Button';

const Login = ({ navigation }) => {
  const [isFailed, setIsFailed] = useState(false)
  const { setUserDetails } = useUser();

  // Validation schema using Yup
  const validationSchema = yup.object().shape({
    username: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const handleLogin = async (values) => {
    const loginCall = await userModule.login(values)

    if (loginCall != "Failed") {
      setUserDetails(loginCall)
      navigation.navigate("Homescreen")
    } else {
      setIsFailed(true)
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

      <View style={styles.container}>
        <Formik
          initialValues={{ username: 'pupcharr@gmail.com', password: 'Aa' }}
          onSubmit={(values) => handleLogin(values)}
          validationSchema={validationSchema} // Uncomment this for validation
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View>
              <Text>Email</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                keyboardType="email-address"
              />
              {touched.username && errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

              <Text>Password</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}

              {isFailed ? <Text>Invalid Details</Text> : null}
              <View style={styles.button}>
                <Button onPress={handleSubmit} title="Login" />
              </View>
            </View>
          )}
        </Formik>

        <View style={styles.button}>
          <Button onPress={() => navigation.navigate("Register")} title="Register" />
        </View>

        <View style={styles.button}>
          <Button onPress={() => navigation.navigate("VendorScanner")} title="Vendor Login" />
        </View>
      </View>
    </TouchableWithoutFeedback>

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
  button: {
    padding: 10,
    width: '50%',
  },
});

export default Login;
