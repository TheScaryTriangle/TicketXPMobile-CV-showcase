import React, { useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Pages
import Header from "../components/Header";
import Login from '../screens/Login';
import Homescreen from '../screens/Homescreen'
import TicketDisplay from '../screens/TicketDisplay';
import VendorScanner from '../screens/VendorScanner';
import EventPage from '../screens/EventPage';
import UserTickets from '../screens/UserTickets';
import Register from '../screens/Register';
//Context
import { useUser } from '../context/userContext'; 

const Stack = createStackNavigator();

const navigation = () => {
    const userDetails = useUser().user; // For later use
    return (
        <NavigationContainer >
            <View style={styles.navigationScreen}>
                <Header />
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
                    <Stack.Screen name="Register" component={Register} options={{ title: 'Register' }} />
                    <Stack.Screen name="Homescreen" component={Homescreen} options={{ title: 'Homescreen' }} />
                    <Stack.Screen name="TicketDisplay" component={TicketDisplay} options={{ title: 'Ticket' }} />
                    <Stack.Screen name="VendorScanner" component={VendorScanner} options={{ title: 'Scanner' }} />
                    <Stack.Screen name="EventPage" component={EventPage} options={{ title: 'Event' }} />
                    <Stack.Screen name="UserTickets" component={UserTickets} options={{ title: 'Ticket' }} />
                </Stack.Navigator>
            </View>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    navigationScreen: {
        flex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: '#ffffff',
    },
});

export default navigation