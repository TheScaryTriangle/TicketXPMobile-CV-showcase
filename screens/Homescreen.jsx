import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text } from "react-native"

//Components
import EventBox from "../components/EventBox"
import Loading from '../components/Loading';
import ErrorScreen from './ErrorScreen';
//API
import eventModule from "../api/eventModule"
import { err } from 'react-native-svg';

const Homescreen = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const [eventData, setEventData] = useState([])
    useEffect(() => {
        setup()
    }, []);

    const setup = async () => {
        try {
            const eventDataCall = await eventModule.getAllEventDetails()
            setEventData(eventDataCall)
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
            {eventData.map((event, i) => {
                return (
                    <View key={i}>
                        <EventBox
                            EventData={event}
                        />
                    </View>
                )
            })}

        </View>
    )
}

export default Homescreen