import { StatusBar } from 'expo-status-bar';
import React, { useState , useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import init from 'react_native_mqtt';
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from 'react-native-uuid';
import Temp from './componets/Temp';
import Himidity from './componets/Himidity';
import Pir from './componets/Pir';
import Led from './componets/Led';

import Slider from "react-native-slider";


init({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  reconnect: true,
  sync: {
  }
});

export default function App() {

  const [led, setled] = useState('on');
  const [temperature, setTemperature] = useState('');
  const [humi, setHumi] = useState('');
  const [pir, setPir] = useState(false);
  const [value, setValue] = useState(0.0);


  function onConnect() {
    console.log("onConnect");
    client.subscribe("pir", 0);
    client.subscribe("humi", 0);
    client.subscribe("temp", 0);
  }

  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:" + responseObject.errorMessage);
    }
  }

  function onMessageArrived(message) {

    if (message.topic == "humi") {
      setHumi(message.payloadString);
    } else if (message.topic == "temp") {
      setTemperature(message.payloadString);
    } else if (message.topic == "pir") {
      setPir(message.payloadString);
    }
    // console.log("onMessageArrived:"+message.payloadString);
    // setData(message.payloadString)
  }


  function changeBrightness(value){
    setValue(value);
    var num = Math.round(value);
    client.publish("led/brightnes", num.toString());
  }

  let currentTime = +new Date();
  let clientID = currentTime + uuid.v1();
  const client = new Paho.MQTT.Client('188.166.31.216', 9001, clientID);
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  client.connect({ onSuccess: onConnect, useSSL: false, userName: 'redzhep', password: '0159753' });

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.cards}>
        <Temp style={styles.cards} value={temperature}></Temp>
        <Himidity style={styles.cards} value={humi}></Himidity>
      </View>
      <View style={styles.cards}>
        <Pir style={styles.cards} value={pir}></Pir>
        <Led style={styles.cards} value={led} turnLed={value => client.publish("led", value)}></Led>
      </View>
      {/* <Bgrightnes></Bgrightnes> */}

      <Slider
        value={value}
        style={{ width: 335, height: 100 }}
        trackStyle={{ height: 100, borderRadius: 15 }}
        thumbStyle={{ width: 0 }}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#F2F2F2"
        maximumTrackTintColor="#68686A"
        onSlidingComplete={value => {changeBrightness(value)}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4793DD',
    alignItems: 'center',
    justifyContent: 'center',
  }, cards: {
    flexDirection: 'row',
  },
});
