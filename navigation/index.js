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

const Stack = createStackNavigator();

const navigation = () => {
    return (
        <NavigationContainer >
            <View style={styles.navigationScreen}>
                <Header />
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
                    <Stack.Screen name="Homescreen" component={Homescreen} options={{ title: 'Homescreen' }} />
                    <Stack.Screen name="TicketDisplay" component={TicketDisplay} options={{ title: 'Homescreen' }} />
                    <Stack.Screen name="VendorScanner" component={VendorScanner} options={{ title: 'Homescreen' }} />
                    <Stack.Screen name="EventPage" component={EventPage} options={{ title: 'Homescreen' }} />
                    <Stack.Screen name="UserTickets" component={UserTickets} options={{ title: 'Homescreen' }} />
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