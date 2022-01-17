import React, { useState } from 'react';
import Slider from "react-native-slider";
import { StyleSheet, View } from 'react-native';





export default function Bgrightnes() {

    const [value, setValue] = useState(0.0);

    return (
        <View style={styles.mainCardView}>
            <Slider
                value={value}
                style={{width: 300, height: 100,  borderRadius: 15}}
                trackStyle={{ height: 100, }}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#FFFFFF"
                onValueChange={value => setValue(value)}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainCardView: {
        height: 150,
        width: 330,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3F8CDC',
        borderRadius: 15,
        shadowColor: '#3D76AA',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 14,
        marginTop: 10,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
        
    }
});