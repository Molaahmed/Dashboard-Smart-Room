import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Icon } from 'react-native-elements'

export default function Temp(props) {

    return (
        <View style={styles.mainCardView}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    {/* <Icon
                        style={styles.icon}
                        name='thermometer'
                        type='ionicon'
                        color='#9CDDF9'
                    /> */}

                        <Image
                        style={styles.icon}
                        source={require('../assets/temperature.png')} />

                    <Text style={styles.temperatureText}>Temperature</Text>
                </View>
            </View>
            <View style={styles.body}>
                <Text style={styles.valueText}>{props.value}</Text>
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
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 14,
        marginTop: 10,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
    },header: {
        flex: 1, 
    },headerContent: {
       flexDirection: "row"
    },body: {
        flex: 4, 
        alignItems: "center",
        justifyContent: 'center',
        
    },icon:{
        marginTop: 5,
        marginRight: 5,
        width: 30,
        height: 30,
    }, temperatureText: {
        fontSize:15,
        marginTop: 5,
    } , valueText: {
        fontSize: 50,
        color: "white",
    }
});