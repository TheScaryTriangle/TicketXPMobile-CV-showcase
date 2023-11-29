import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

const Loading = () => {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <View style={styles.container}>
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#007AFF" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Loading;
