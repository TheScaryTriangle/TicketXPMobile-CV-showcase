import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text } from "react-native"

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
    const buttonPress = () => {
        console.log("!")
        navigation.navigate("EventPage")
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
                            onPress = {buttonPress}
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

export default Homescreen