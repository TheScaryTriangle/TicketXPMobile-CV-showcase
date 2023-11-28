import { StyleSheet, Text, View, Pressable } from 'react-native';

/**
 * @dev Used to display an event in a box
 * @notice  This component only accepts an object, 
 *          iterate though the array before passing to this component
 * @notice Fetch the event data before passing to this component
 * @param {Obj} EventData The object of the event
 */
const EventBox = ({ EventData }) => {
    /**
     * @notice Triggers when the user taps the component
     * @todo Navigate to the event page after
     */
    const buttonPress = () => {
        console.log("!")
    }

    return (
        <Pressable style={styles.eventBoxContainer} onPress={() => buttonPress()}>
            <Text>
                {EventData?.EventName}
            </Text>
            <Text>
                {EventData?.EventDetails}
            </Text>
            <Text>
                {EventData?.TicketPrice}
            </Text>
            <Text>
                {EventData?.EventDate}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    eventBoxContainer: {
        height: "50%",
        width: "100%",
        backgroundColor: '#aaaaaa',
        padding: "5%",
        borderRadius: 50
    },
});

export default EventBox