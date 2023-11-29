import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';

import qrModule from '../api/qrModule'

/**
 * @dev This page scans a customer's QR code
 * @notice https://medium.com/@Sarmilasivaraja/scan-qr-code-with-expo-camera-react-native-c60be39fdb7d
 */
export default function App() {
    const [hasPermission, setHasPermission] = useState(null); // App permission
    const [scanned, setScanned] = useState(false); // Sets if a QR code has been scanned
    const [scanData, setScannedData] = useState("")
    const [lastScannedData, setLastScannedData] = useState("")

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted'); // Add fail case here
        })();
    }, []);

    let backgroundColor = 'white'; // Default background color

    if (scanData === "Invalid Code" || scanData === "Already Scanned") {
        backgroundColor = 'red'; // Set background to red for "Invalid Code"
    } else if (scanData) {
        backgroundColor = 'green'; // Set background to green if there's scan data
    }

    const handleBarCodeScanned = async ({ type, data }) => {
        setScanned(true); // Don't allow multiple to be scanned at once, a ticket must be confirmed
        if(data == lastScannedData){
            setScannedData("Already Scanned")
        }else{
            setLastScannedData(data)
            if (type != 256) {
                setScannedData("Invalid Code")
            }else{
                const ticketRequestReturn = await qrModule.scanQRCode(data)
                setScannedData(ticketRequestReturn)
                console.log(ticketRequestReturn)
            }    
        }
        
        setTimeout(() => {
            setScanned(false);
            setScannedData('');
        }, 2000); 
        return;
    };

    const renderCamera = () => {
        return (
            <View style={styles.cameraContainer}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={styles.camera}
                />
            </View>
        );
    };

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Camera permission not granted</Text>
            </View>
        );
    }

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={styles.title}>Ticket scanner</Text>
            <Text style={styles.paragraph}>Scan a QR code</Text>
            {renderCamera()}
            {scanData ?
                <Text>{scanData}</Text>
                :
                <Text>Scan a ticket</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 40,
    },
    cameraContainer: {
        width: '80%',
        aspectRatio: 1,
        overflow: 'hidden',
        borderRadius: 10,
        marginBottom: 40,
    },
    camera: {
        flex: 1,
    },
    button: {
        backgroundColor: 'blue',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});