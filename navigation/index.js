import { StyleSheet, Text, View } from 'react-native';

import Header from "../components/Header";
import Homescreen from '../screens/Homescreen'

const navigation = () => {

    return (
        <View style={styles.navigationScreen}>
            <Header/>
            <Homescreen/>
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