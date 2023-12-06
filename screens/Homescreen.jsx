import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from "react-native"

//Components
import EventBox from "../components/EventBox"
import Loading from '../components/Loading';
import ErrorScreen from './ErrorScreen';
import Button from '../components/basic/Button';

//API
import eventModule from "../api/eventModule"


const Homescreen = ({ navigation }) => {
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

    /**
     * @notice Triggers when the user taps the eventBox component
     * @todo Navigate to the event page after
     */
    const buttonPress = (eventId) => {
        console.log("!")
        navigation.navigate("EventPage", { EventId: eventId })
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
                console.log(event)
                return (
                    <View key={i} style={ styles.eventBoxContainer}>
                        <EventBox
                            EventData={event}
                            onPress={() => buttonPress(event._id)}
                        />
                    </View>
                )
            })}
            <Button
                title={"My Tickets"}
                onPress={() => navigation.navigate("UserTickets")}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    eventBoxContainer: {
        height: "50%",
        width: "100%",
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#000000',
        padding: 10,
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default Homescreen