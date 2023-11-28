import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

const Loading = () => {
    const [isLoading, setIsLoading] = useState(true)
    return (
        <ActivityIndicator />
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


export default Loading