import React from 'react';
import {Alert, StyleSheet, View, Text, Button, TextInput, Image} from 'react-native';
import logo from './logo.png';

const gameLogo = (<Image style={{height: 250, width: 370}} source={logo}/>);

const HomeScreen = ({navigation}) => {

    const [name, onChangeName] = React.useState('');

    return (
    <View>

        <View style={styles.logo}>{gameLogo}</View>
        <Text style={styles.description}>Welcome to Emojigotchi!{"\n"}{"\n"}
         Enter a name for your emoji-pet! Feed him so he doesn't die, but don't feed him too much as
         his stomach can get upset. And if it does, things can get ugly...{"\n"} Have fun :{")"}</Text>

        <TextInput
         style={styles.input}
         onChangeText={onChangeName}
         value={name}
         placeholder="emoji name"
        />


        <View style={styles.submit}>
        <Button 
          title="PLAY!"
          onPress={ () => {navigation.navigate('Game', {name});} } />
        </View>

    </View>
  )
}

const styles = StyleSheet.create({

      logo: {
        alignItems: 'center',
      },
  
      input: {
      height: 40,
      margin: 10,
      borderWidth: 5,
      padding: 10,
      marginLeft: 35,
      marginRight: 35,
    },

    description: {
      textAlign: 'center',
      fontSize: 25,
      margin: 20,
      marginTop: 0,
    },

    submit: {
      borderWidth: 5,
      margin: 5,
      marginLeft: 75,
      marginRight: 75,
      borderRadius: 15,
    },

  });

export default HomeScreen