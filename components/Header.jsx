import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.headerBox}>
            <Text>
                Header
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBox: {
        backgroundColor: 'blue',
        alignItems: 'center',
        height: "10%",
        width: "100%",
    },
});


export default Header