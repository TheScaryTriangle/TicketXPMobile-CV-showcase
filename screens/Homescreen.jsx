import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text } from "react-native"

//Components
import EventBox from "../components/EventBox"

//API
import eventModule from "../api/eventModule"

const Homescreen = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [eventData, setEventData] = useState([])
    useEffect(() => {
        setup()
    }, []);

    const setup = async () => {
        try {
            const eventDataCall = await eventModule.getAllEventDetails()
            setEventData(eventDataCall)
            setIsLoading(false)
        } catch (e) {
            console.log(e)
        }
    }

    if (isLoading) {
        return (
            <ActivityIndicator />
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