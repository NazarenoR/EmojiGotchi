import React, {useState, useEffect} from 'react';
import {Alert, StyleSheet, View, Text, Button, Image, Pressable, } from 'react-native';
import Clock from './Clock';
import Emojis from './Emojis';
import Bosta from './bosta';
import moji from './moji.png';

const gameLogo = (<Image style={{height: 100, width: 370}} source={moji}/>);


const Game = ({navigation, route, props}) => {

    const [counter, setCounter] = useState(22);
    const [poopToken, setPoopToken] = useState(0);

    useEffect(() => {
        const timerID = setInterval(() => {
        if (counter < 60) {
            setCounter(counter + 1);
        }
        }, 1000);

    console.log(counter);

    return () => {
       clearInterval(timerID);
         };
     }, [counter]);

     const feed = () => {
        if (counter > 0) {
          setCounter(counter - 5);
          
        }

        if (counter <= 0) {
            pooping();
          }

        if (poopToken >= 3) {
            sick();
            
        };
      };

      const candy = () => {
        if (counter > 0) {
          setCounter(0);
          //else-alert? 

          pooping();
        }
      };

      const pooping = () => {
        setPoopToken((poopToken) => poopToken + 1);
        if (poopToken >= 3) {
            sick();
        };
      }

      const cleanPoop = () => {
        setPoopToken((poopToken) => poopToken - 1);
      }

      const sick = () => {
        setCounter(50);
        alert('YOUR PET IS SICK! \n CLEAN THE POOP AND FEED IT!');
      }

      console.log(poopToken);

    return (
    <>
        <View style={styles.content}> 
            <View style={styles.logo}>{gameLogo}</View>

            <Text style={styles.title}>{"\n"}{route.params.name}'s Mood-Health Bar:</Text>

            <View>
                 <Clock name={route.params.name} number={counter}/>
            </View>
             
            <View>
                <Text>{"\n"}</Text>
                 <Emojis number={counter}/>          
            </View>

            <View style={styles.poopbox}>
                <Pressable onPress={cleanPoop}>
                 <Bosta token={poopToken}/>   
                </Pressable>       
            </View>

            <View style={styles.row}>
            <View style={styles.buttons}>
                <Pressable>
                    <Button
                        title="GIVE FOOD"
                        onPress={feed}
                    />
                </Pressable>
            </View>

            <View style={styles.buttons}>
                <Pressable>
                    <Button
                        title="GIVE A CANDY"
                        onPress={candy}
                    />
                </Pressable>
            </View>
            </View>

            {/*  
            <View>
                CANDY
            </View>
            <View>
                CLEAR POOP
            </View>
            
            */}

        </View>
    </>
        

    
  )
}

const styles = StyleSheet.create({

    logo: {
        alignItems: 'center',
      },

    poopbox: {
        height: 150,
    },

    row: {alignContent: 'center',
         flexDirection: 'row',
         justifyContent: 'center',},

    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'top',
        alignItems: 'center',
        height: '100%',
    },

    title: {
        fontSize: 20,
       
    },

    image: {
        resizeMode: 'contain',
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignself: 'center'
    },

    texto: {
        fontSize: 31,
    },

    virtualBox: {
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    box: {
        borderWidth: 1,
        height: 75,
    },

    buttons: {
        borderWidth: 5,
        margin: 2,
        borderRadius: 15,
        fontWeight: 'bold',
        color: 'black',
      },

})

export default Game