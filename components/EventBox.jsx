import { StyleSheet, Text, View, Pressable } from 'react-native';
import formatDate from '../utility/formatDate';

/**
 * @dev Used to display an event in a box
 * @notice  This component only accepts an object, 
 *          iterate though the array before passing to this component
 * @notice Fetch the event data before passing to this component
 * @param {Obj} EventData The object of the event
 */
const EventBox = ({ EventData, onPress }) => {
    return (
        <Pressable style={styles.eventBoxContainer} onPress={() => onPress()}>
            <Text style={styles.text}>
                {EventData.EventName}
            </Text>
            <Text style={styles.text}>
                {EventData.EventDetails}
            </Text>
            <Text style={styles.text}>
                {EventData.TicketPrice} Eth
            </Text>
            <Text style={styles.text}>
                {formatDate(EventData.EventDate)}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    eventBoxContainer: {
        height: "100%",
        width: "100%",
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#000000',
        padding: 5,
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default EventBox