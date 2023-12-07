import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TicketQR from '../components/TicketQR';
import Button from '../components/basic/Button';
import Loading from '../components/Loading';

import formatDate from '../utility/formatDate';

import qrModule from '../api/qrModule'

import ErrorScreen from './ErrorScreen';

/**
 * @dev Page display's the user's ticket
 * @todo Get the specific ticket and pass it to this page
 */
const TicketDisplay = ({ navigation,route }) => {
    const [qrSVG, setQRSVG] = useState("")
    const [ticketData, setTicketData] = useState(null)

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    
    useEffect(() => {
        setup()
    }, []);

    const setup = async () => {
        try {
            const qrCode = await qrModule.getQRCode(route.params._id) // Fetch the ticket and event data
            setQRSVG(qrCode.QRSVG)
            setTicketData(qrCode.ticketData) // This dosen't need to be two use states
        } catch (e) {
            console.log(e)
            setError(true)
        }
        setIsLoading(false)
    }

    /**
     * @dev Used to download the ticket to the user's device
     */
    const download = () => {

    }

    /**
     * @dev Used to dismiss this page
     */
    const dismiss = () => {
        navigation.goBack()
    }

    if (isLoading) {
        return (
            <Loading />
        )
    }

    if (error) {
        return (
            <ErrorScreen
                errorMessage={"Error loading the ticket"}
                onRetry={dismiss()} 
                buttonMessage='Dismiss'
            />
        )
    }

    return (
        <View style={styles.headerBox}>
            <Text style={styles.titleText}>
                {ticketData?.EventName}
            </Text>
            <TicketQR />
            <Text style={styles.titleText}>
                at {formatDate(ticketData?.EventDate)}
            </Text>
            <Button
                title={"Download"}
                onPress={() => { download() }}
            />
            <Button
                title={"Dismiss"}
                onPress={() => { dismiss() }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    headerBox: {
        alignItems: 'center',
        height: "100%",
        width: "100%",
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
        textAlign: 'center',
        marginTop: 20,
    },
});


export default TicketDisplay