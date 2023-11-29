import { StyleSheet, Text, View } from 'react-native';

import Header from "../components/Header";
import Homescreen from '../screens/Homescreen'
import TicketQR from '../components/TicketQR';
import QRScanner from '../components/QRScanner';
import TicketDisplay from '../screens/TicketDisplay';

const navigation = () => {

    return (
        <View style={styles.navigationScreen}>
            <Header />
            <TicketDisplay />
            {/* <Homescreen/> */}
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