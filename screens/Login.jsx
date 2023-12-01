import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

// Components
import Button from '../components/basic/Button';

const Login = ({ navigation }) => {
  // Validation schema using Yup
  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const handleLogin = (values) => {
    console.log('Login details:', values);
    navigation.navigate("Homescreen")
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => handleLogin(values)}
        // validationSchema={validationSchema} // Uncomment this for validation
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <Text>Email</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

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

            <Button onPress={handleSubmit} title="Login" />

          </View>
        )}
      </Formik>
      <Button onPress={() => navigation.navigate("VendorScanner")} title="Vendor Login" />

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

export default Login;
