import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from "react-native"

// Utility
import formatDate from '../utility/formatDate';
// Components
import Loading from '../components/Loading';
import ErrorScreen from './ErrorScreen';
import Button from '../components/basic/Button';
// API
import eventModule from "../api/eventModule"

const EventPage = ({ navigation, route }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const [eventData, setEventData] = useState({})

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

    const buyTicket = async () => {
        console.log("!")
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
        <View style={styles.container}>
            <Text style={styles.eventName}>
                {eventData.EventName}
            </Text>
            <Text style={styles.eventDetails}>
                {eventData.EventDetails}
            </Text>
            <Text style={styles.eventDate}>
                {formatDate(eventData.EventDate)}
            </Text>
            <Text style={styles.eventDate}>
                {(eventData.TicketPrice)} Eth
            </Text>
            <Button
                title={'Buy'}
                onPress={() => buyTicket()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'ceter',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    eventName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    eventDetails: {
        fontSize: 18,
        marginBottom: 10,
    },
    eventDate: {
        fontSize: 16,
        color: '#888',
    },
});

export default EventPage;
