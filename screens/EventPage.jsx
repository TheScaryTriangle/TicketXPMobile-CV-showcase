import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text } from "react-native"
import { useNavigation } from '@react-navigation/native';

//Components
import Loading from '../components/Loading';
import ErrorScreen from './ErrorScreen';
//API
import eventModule from "../api/eventModule"

const EventPage = ({ navigation, route }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const [eventData, setEventData] = useState({})
    const paramId = route.params

    console.log(paramId)
    
    useEffect(() => {
        setup()
    }, []);

    const setup = async () => {
        try {
            const eventDataCall = await eventModule.getEventFromId(route.params.EventId)
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
                errorMessage={"This event does not exist"}
                onRetry={() => navigation.goBack()}
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