import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text } from "react-native"

//Components
import Loading from '../components/Loading';
import ErrorScreen from './ErrorScreen';
//API
import eventModule from "../api/eventModule"

const EventPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const [eventId, setEventId] = useState("653ff2caf8b58cc9fe4a27d4")
    const [eventData, setEventData] = useState({})
    useEffect(() => {
        setup()
    }, []);

    const setup = async () => {
        try {
            const eventDataCall = await eventModule.getEventFromId(eventId)
            setEventData(eventDataCall)
        } catch (e) {
            console.log(e)
            setError(true)
        }
        setIsLoading(false)
    }
    console.log(eventData)
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
            <Text>
                {eventData.EventName}
            </Text>
            <Text>
                {eventData.EventDetails}
            </Text>
            <Text>
                {eventData.EventDate}
            </Text>
        </View>
    )
}

export default EventPage