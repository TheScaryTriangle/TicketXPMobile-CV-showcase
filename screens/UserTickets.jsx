import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

// API
import ticketModule from '../api/ticketModule';
import Loading from '../components/Loading';
import ErrorScreen from './ErrorScreen';
import formatDate from '../utility/formatDate';
import { ScrollView } from 'react-native-gesture-handler';

const UserTickets = ({ navigation }) => {
    const [ticketData, setTicketData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setup();
    }, []);

    const setup = async () => {
        try {
            const userTickets = await ticketModule.getUserTickets(); // Assuming getTickets fetches user's tickets
            console.log(userTickets)
            setTicketData(userTickets);
        } catch (e) {
            console.log(e);
            setError(true);
        }
        setIsLoading(false);
    };

    const dismiss = () => {
        navigation.goBack();
    };

    const viewTicket = (ticketData) => {
        navigation.navigate("TicketDisplay", ticketData)
    }

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return (
            <ErrorScreen
                errorMessage="Error loading the tickets"
                onRetry={dismiss}
                buttonMessage="Dismiss"
            />
        );
    }

    return (
        <ScrollView>

            <View style={styles.container}>
                <Text style={styles.titleText}>Your Tickets</Text>
                {ticketData && ticketData.map((ticket) => (
                    <Pressable key={ticket._id} style={styles.ticketContainer} onPress={() => viewTicket(ticket)}>
                        <Text>Ticket ID: {ticket.TicketId}</Text>
                        <Text>Event ID: {ticket.EventId}</Text>
                        <Text>User ID: {ticket.UserId}</Text>
                        <Text>Created At: {formatDate(ticket.createdAt)}</Text>
                    </Pressable>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    ticketContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '100%',
    },
});

export default UserTickets;
