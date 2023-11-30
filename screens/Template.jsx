
import React, { useEffect, useState } from 'react';
import { View, Text } from "react-native"

//Components
import Loading from '../components/Loading';
import ErrorScreen from './ErrorScreen';
//API

const Template = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setup()
    }, []);

    const setup = async () => {
        try {

        } catch (e) {
            console.log(e)
            setError(true)
        }
        setIsLoading(false)
    }

    if (isLoading) {
        return (
            <Loading />
        )
    }

    if (error) {
        return (
            <ErrorScreen
                errorMessage={""}
                onRetry={setup()}
            />
        )
    }

    return (
        <View>

        </View>
    )
}

export default Template