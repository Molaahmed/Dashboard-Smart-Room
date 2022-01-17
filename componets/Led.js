import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements'




export default function Led({ value, turnLed }) {

    const [color, setColor] = useState('#9CDDF9')
    const [status, setStatus] = useState(value)

    function onLedOnOf() {
        if (status == "on") {
            setColor('#FFC624');
            setStatus("of")
            turnLed("on")
        } else if (status == "of") {
            setColor('#9CDDF9');
            setStatus("on")
            turnLed("of")
        }
    }

    return (
        <View style={styles.mainCardView}>
            <View style={styles.icon}>
                <Icon
                    reverse
                    name='bulb'
                    type='ionicon'
                    color={color}
                    size={50}
                    onPress={() => onLedOnOf()}
                />
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