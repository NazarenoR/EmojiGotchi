import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Clock = ({number}) => {

    console.log(number);

  return (

    <View>
        <View style={{width: Math.abs(number-60)*5, height: 20, backgroundColor: 'blue', borderRadius: 10}}></View>
    </View>
    
  )
}

export default Clock