import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';


const Component35 = () => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');


  useEffect(() => {

    loadData();

  }, []);


  const loadData = async () => {

    try {

      const savedData = await AsyncStorage.getItem('userInfo');

      if (savedData !== null) {

        const data = JSON.parse(savedData);

        const {
          name: savedName,
          age: savedAge,
          country: savedCountry,
          timestamp
        } = data;


        const currentTime = Date.now();

        const savedTime = new Date(timestamp).getTime();

        const difference = currentTime - savedTime;


        if (difference < 60000) {

          setName(savedName);
          setAge(savedAge);
          setCountry(savedCountry);

        } else {

          console.log('Saved data is older than one minute');

        }

      } else {

        console.log('No saved data');

      }

    } catch (error) {

      console.log('Error reading data:', error);

    }

  };


  const saveData = async () => {

    try {

      const user = {
        name: name,
        age: age,
        country: country,
        timestamp: new Date().toISOString()
      };


      await AsyncStorage.setItem(
        'userInfo',
        JSON.stringify(user)
      );


      Alert.alert(
        'Success',
        'Information saved'
      );

    } catch (error) {

      console.log('Error saving data:', error);

      Alert.alert(
        'Error',
        'Could not save information'
      );

    }

  };


  return (

    <View style={styles.container}>

      <Text>Name</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />


      <Text>Age</Text>

      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        placeholder="Enter your age"
        keyboardType="numeric"
      />

      <Text>Country</Text>

      <TextInput
        style={styles.input}
        value={country}
        onChangeText={setCountry}
        placeholder="Enter your country"
      />


      <Button
        title="Submit"
        onPress={saveData}
      />

    </View>

  );

};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
  },

});


export default Component35;