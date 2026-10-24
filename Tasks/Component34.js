import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useCurrentTime from './Hooks/useCurrentTime';

const Component34 = () => {
  const currentTime = useCurrentTime();

  return (
    <View style={styles.container}>

      <Text style={styles.text}>
        Time: {currentTime.toLocaleTimeString()}
      </Text>

      <Text style={styles.text}>
        Date: {currentTime.toLocaleDateString()}
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 22,
    margin: 10,
  },

});

export default Component34;