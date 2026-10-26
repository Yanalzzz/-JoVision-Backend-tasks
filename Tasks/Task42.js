import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


const Screen1 = ({navigation}) => {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>Screen 1</Text>

      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate('Screen2')}
      />

      <Button
        title="Go to Screen 3"
        onPress={() => navigation.navigate('Screen3')}
      />

      <Button
        title="Go to Screen 4"
        onPress={() => navigation.navigate('Screen4')}
      />

    </View>
  );
};


const Screen2 = ({navigation}) => {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>Screen 2</Text>

      <Button
        title="Go to Screen 1"
        onPress={() => navigation.navigate('Screen1')}
      />

      <Button
        title="Go to Screen 3"
        onPress={() => navigation.navigate('Screen3')}
      />

      <Button
        title="Go to Screen 4"
        onPress={() => navigation.navigate('Screen4')}
      />

    </View>
  );
};


const Screen3 = ({navigation}) => {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>Screen 3</Text>

      <Button
        title="Go to Screen 1"
        onPress={() => navigation.navigate('Screen1')}
      />

      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate('Screen2')}
      />

      <Button
        title="Go to Screen 4"
        onPress={() => navigation.navigate('Screen4')}
      />

    </View>
  );
};


const Screen4 = ({navigation}) => {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>Screen 4</Text>

      <Button
        title="Go to Screen 1"
        onPress={() => navigation.navigate('Screen1')}
      />

      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate('Screen2')}
      />

      <Button
        title="Go to Screen 3"
        onPress={() => navigation.navigate('Screen3')}
      />

    </View>
  );
};


const Task42 = () => {
  return (
    <NavigationContainer>

      <Tab.Navigator>

        <Tab.Screen
          name="Screen1"
          component={Screen1}
        />

        <Tab.Screen
          name="Screen2"
          component={Screen2}
        />

        <Tab.Screen
          name="Screen3"
          component={Screen3}
        />

        <Tab.Screen
          name="Screen4"
          component={Screen4}
        />

      </Tab.Navigator>

    </NavigationContainer>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    gap: 10,
  },

  text: {
    fontSize: 30,
    color: 'black',
    marginBottom: 20,
  },

});


export default Task42;