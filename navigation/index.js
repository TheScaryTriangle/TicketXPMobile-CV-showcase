import { StyleSheet, Text, View } from 'react-native';

import Header from "../components/Header";
import Homescreen from '../screens/Homescreen'
import TicketQR from '../components/TicketQR';

const navigation = () => {

    return (
        <View style={styles.navigationScreen}>
            <Header />
            <Homescreen />
            <TicketQR />
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