import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Svg, Path } from 'react-native-svg';

import qrModule from '../api/qrModule'

const TicketQR = () => {
    const [qrSVG, setQRSVG] = useState("")
    
    useEffect(() => {
        setup()
    }, []);

    const setup = async () => {
        try {
            const qrCode = await qrModule.getQRCode()
            setQRSVG(qrCode)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={styles.headerBox}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 57 57"
                shape-rendering="crispEdges"
                width={200}
                height={200}
            >
                <Path fill="#ffffff" d="M0 0h57v57H0z" />
                <Path
                    stroke="#000000"
                    d="M4 4.5h7m2 0h2m1 0h1m5 0h2m3 0h3m1 0h6m3 0h2m2 0h1m1 0h7M4 5.5h1m5 0h1m1 0h2m1 0h1m1 0h3m1 0h1m2 0h2m6 0h1m1 0h1m1 0h1m2 0h2m1 0h3m1 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m2 0h3m2 0h1m4 0h3m1 0h1m2 0h2m6 0h1m1 0h1m2 0h2m1 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m1 0h2m1 0h4m2 0h1m3 0h1m1 0h4m4 0h1m2 0h4m1 0h1m2 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m2 0h3m3 0h1m2 0h1m2 0h11m10 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m1 0h1m2 0h2m1 0h1m3 0h2m2 0h1m3 0h1m4 0h3m4 0h1m3 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M13 11.5h4m2 0h1m1 0h1m1 0h4m3 0h2m1 0h1m5 0h3m1 0h2M4 12.5h5m1 0h5m2 0h1m4 0h1m1 0h7m2 0h1m1 0h1m1 0h5m1 0h3m1 0h1m1 0h1m1 0h1M4 13.5h1m1 0h4m1 0h1m3 0h1m5 0h1m1 0h1m1 0h2m1 0h2m1 0h5m3 0h1m5 0h2m1 0h1m3 0h1M5 14.5h1m4 0h1m1 0h2m1 0h1m3 0h2m1 0h7m1 0h2m3 0h1m1 0h1m1 0h6m1 0h1m3 0h3M6 15.5h4m2 0h1m1 0h1m1 0h2m1 0h4m1 0h1m3 0h5m3 0h1m1 0h1m3 0h1m3 0h4m1 0h2M8 16.5h4m2 0h1m1 0h1m2 0h1m2 0h3m1 0h3m1 0h1m2 0h1m1 0h1m2 0h4m1 0h3m4 0h1m1 0h1M7 17.5h1m1 0h1m3 0h1m2 0h2m2 0h3m5 0h2m1 0h1m1 0h4m3 0h2m3 0h3m2 0h2M9 18.5h2m1 0h3m1 0h1m1 0h5m3 0h1m4 0h2m3 0h2m1 0h2m3 0h1m1 0h1m2 0h1m1 0h2M4 19.5h1m3 0h1m2 0h1m2 0h2m2 0h1m1 0h1m1 0h1m1 0h1m2 0h5m1 0h2m2 0h4m4 0h1m1 0h1m3 0h2M8 20.5h1m1 0h2m1 0h1m1 0h1m1 0h1m1 0h1m1 0h2m4 0h2m1 0h1m4 0h1m2 0h4m2 0h4m2 0h1m1 0h1M7 21.5h1m1 0h1m1 0h2m1 0h2m1 0h1m4 0h2m1 0h5m3 0h2m1 0h1m2 0h1m1 0h1m1 0h1m1 0h4m2 0h1M4 22.5h1m2 0h5m1 0h3m1 0h2m2 0h1m1 0h7m1 0h1m6 0h4m8 0h1m1 0h1M4 23.5h3m4 0h1m2 0h2m2 0h2m8 0h4m1 0h1m2 0h4m1 0h2m8 0h1M6 24.5h1m1 0h7m1 0h3m2 0h1m1 0h3m1 0h2m4 0h2m2 0h4m3 0h4m1 0h2m1 0h1M5 25.5h1m3 0h1m2 0h1m1 0h2m3 0h1m2 0h1m2 0h2m5 0h3m1 0h1m2 0h1m1 0h1m3 0h7M5 26.5h8m2 0h2m1 0h1m5 0h7m3 0h1m4 0h1m3 0h7m2 0h1M5 27.5h2m1 0h1m3 0h1m1 0h1m2 0h1m1 0h1m1 0h3m1 0h2m3 0h1m1 0h2m1 0h3m1 0h3m1 0h2m3 0h1m2 0h1M4 28.5h3m1 0h1m1 0h1m1 0h2m2 0h2m1 0h1m1 0h6m1 0h1m1 0h1m3 0h2m1 0h1m1 0h2m2 0h2m1 0h1m1 0h1M4 29.5h1m2 0h2m3 0h1m2 0h1m2 0h1m3 0h1m3 0h1m3 0h1m1 0h1m1 0h1m1 0h1m3 0h2m2 0h1m3 0h1M4 30.5h1m3 0h5m1 0h1m7 0h2m2 0h8m1 0h3m1 0h2m1 0h7m1 0h3M4 31.5h2m3 0h1m3 0h1m2 0h2m1 0h4m1 0h1m1 0h1m3 0h1m3 0h1m2 0h1m4 0h1m1 0h4m3 0h1M4 32.5h3m3 0h2m1 0h2m1 0h1m2 0h1m2 0h2m1 0h1m2 0h2m3 0h3m1 0h4m1 0h2m1 0h1m4 0h2M5 33.5h3m1 0h1m1 0h2m1 0h4m2 0h4m1 0h4m1 0h5m1 0h1m2 0h2m2 0h1m1 0h3M6 34.5h1m1 0h3m2 0h2m1 0h2m1 0h4m3 0h1m2 0h1m1 0h1m4 0h3m1 0h1m1 0h1m2 0h5m2 0h1M6 35.5h1m2 0h1m1 0h2m1 0h1m1 0h1m3 0h2m1 0h4m4 0h1m4 0h1m2 0h1m4 0h3m1 0h1m2 0h1M4 36.5h1m2 0h1m1 0h2m2 0h1m1 0h3m2 0h4m1 0h2m1 0h1m1 0h1m2 0h3m1 0h8m2 0h2m2 0h2M4 37.5h4m3 0h4m2 0h3m1 0h1m1 0h1m1 0h1m1 0h4m2 0h4m2 0h3m3 0h2m2 0h2M5 38.5h1m4 0h3m1 0h1m2 0h2m2 0h1m1 0h1m1 0h3m4 0h1m1 0h3m4 0h4m1 0h1m1 0h1m2 0h2M4 39.5h1m1 0h1m1 0h1m2 0h3m1 0h2m1 0h1m7 0h1m2 0h4m2 0h1m3 0h2m1 0h1m2 0h1m5 0h1M4 40.5h1m1 0h6m3 0h4m2 0h1m2 0h1m2 0h1m1 0h2m3 0h2m2 0h6m1 0h2m1 0h2m1 0h2M6 41.5h4m1 0h1m1 0h2m1 0h1m2 0h1m2 0h2m1 0h1m1 0h3m1 0h1m1 0h2m1 0h1m3 0h2m1 0h2m2 0h1m1 0h2M5 42.5h1m3 0h4m1 0h3m1 0h1m5 0h6m3 0h4m6 0h1m1 0h2m2 0h1m1 0h2M5 43.5h3m3 0h1m1 0h2m1 0h1m1 0h2m5 0h2m1 0h1m1 0h2m1 0h2m1 0h1m7 0h1m7 0h1M4 44.5h3m3 0h3m1 0h1m2 0h1m1 0h4m3 0h5m3 0h2m1 0h1m1 0h3m1 0h7m1 0h1M12 45.5h2m1 0h2m1 0h1m4 0h1m1 0h2m3 0h2m1 0h2m1 0h1m2 0h1m1 0h1m2 0h1m3 0h1m1 0h2M4 46.5h7m1 0h5m5 0h1m3 0h1m1 0h1m1 0h1m2 0h3m2 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h5M4 47.5h1m5 0h1m2 0h1m3 0h1m1 0h1m1 0h2m1 0h3m3 0h1m1 0h3m2 0h2m2 0h1m1 0h2m3 0h1M4 48.5h1m1 0h3m1 0h1m1 0h3m1 0h1m2 0h1m2 0h3m1 0h6m3 0h1m1 0h12M4 49.5h1m1 0h3m1 0h1m1 0h4m1 0h1m2 0h3m2 0h2m4 0h4m4 0h3m2 0h5M4 50.5h1m1 0h3m1 0h1m1 0h2m3 0h4m3 0h1m2 0h3m1 0h3m1 0h3m1 0h2m1 0h2m2 0h1m2 0h1M4 51.5h1m5 0h1m1 0h1m2 0h1m2 0h1m1 0h1m2 0h1m2 0h2m1 0h1m2 0h3m1 0h2m1 0h3m2 0h3m5 0h1M4 52.5h7m1 0h1m2 0h1m1 0h1m2 0h1m1 0h4m1 0h1m1 0h3m2 0h2m2 0h4m3 0h1m4 0h3"
                />
            </Svg>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBox: {
        alignItems: 'center',
        height: "10%",
        width: "100%",
    },
});


export default TicketQR