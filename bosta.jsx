import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import poop from './poopemoji.png';

const fezes = (<Image style={{height: 50, width: 50}} source={poop}/>);

const bosta = ({token}) => {
  return (
    <>
        <View>
        
        <View style={styles.row}>{token >= 1 && fezes}</View>

        <View style={styles.row}>
        <View>{token >= 2 && fezes}</View>
        <View>{token >= 3 && fezes}</View>
        </View>
        
        <View style={styles.row}>{token >= 4 && fezes}</View>
        
        </View>
    </>
  )
}

export default bosta

const styles = StyleSheet.create({
    row: {alignContent: 'center', flexDirection: 'row', justifyContent: 'center',},
})