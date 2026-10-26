import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


const Screen1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 1</Text>
    </View>
  );
};
const Screen2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 2</Text>
    </View>
  );
};

const Screen3 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 3</Text>
    </View>
  );
};
const Screen4 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 4</Text>
    </View>
  );
};


const Task41 = () => {
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
  },

  text: {
    fontSize: 30,
    color: 'black',
  },
});

export default Task41;