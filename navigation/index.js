import { StyleSheet, Text, View } from 'react-native';

import Header from "../components/Header";
import Homescreen from '../screens/Homescreen'
import TicketDisplay from '../screens/TicketDisplay';
import VendorScanner from '../screens/VendorScanner';
import EventPage from '../screens/EventPage';

const navigation = () => {

    return (
        <View style={styles.navigationScreen}>
            <Header />
            {/* <TicketDisplay /> */}
            <EventPage/>
            {/* <VendorScanner/> */}
        </View>
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