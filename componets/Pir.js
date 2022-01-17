import React, { useState, useEffect } from 'react';
import {  StyleSheet, Text, View} from 'react-native';
import { Icon } from 'react-native-elements'


export default function Pir({ value }) {

    const [color, setColor] = useState('#9CDDF9');
    const [detected, setDetect] = useState(value);

    useEffect(() => {
        setDetect(value)
        if (detected == true) {
            setColor('#660000')
        } else if (detected == false) {
            setColor('#9CDDF9')
        }

    }, [detected]);

    return (
        <View style={styles.mainCardView}>
            <View style={styles.icon}>

                {detected
                    ? <Icon
                        name='alert'
                        type='ionicon'
                        color='#660000'
                        size={100}
                    />
                    :
                    <Icon
                        name='alert'
                        type='ionicon'
                        color='#9CDDF9'
                        size={100}
                    />}
                <Text>{value}</Text>
            </View>
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
        width: 150,
        // alignItems: 'center',
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
    }, icon: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    }
});