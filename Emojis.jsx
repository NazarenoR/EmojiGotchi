import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import dead from './dead.png';
import happy from './happyDefault.png';
import sad from './sad.png';
import sick from './sick.png';
import wohoo from './wohoo.png';
import neutral from './neutral.png';
import crazy from './crazy.png';

const skull = (<Image style={{height: 250, width: 250}} source={dead}/>);

const images = [
    { mood: (<Image style={{height: 250, width: 250}} source={crazy}/>), },
    { mood: (<Image style={{height: 250, width: 250}} source={wohoo}/>), },
    { mood: (<Image style={{height: 250, width: 250}} source={happy}/>), },
    { mood: (<Image style={{height: 250, width: 250}} source={neutral}/>), },
    { mood: (<Image style={{height: 250, width: 250}} source={sad}/>), },
    { mood: (<Image style={{height: 250, width: 250}} source={sick}/>), },
]

const Emojis = ({number}) => {
  return (
    <>
    <View>{number <= 59 && images[Math.trunc(number / 10)].mood}</View>
    <View>{number == 60 && skull}</View>
    </>
  )
}

export default Emojis