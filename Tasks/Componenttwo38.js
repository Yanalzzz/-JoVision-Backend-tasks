import React, {useContext} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import TextContext from './TextContext';
import Componentone38 from './Componentone38';

const Componenttwo38 = () => {

  const context = useContext(TextContext);

  return (
    <View style={styles.box}>

      <TextInput
        style={styles.input}
        placeholder="Type something"
        value={context.text}
        onChangeText={context.setText}
      />

      <Componentone38 />

    </View>
  );
};

const styles = StyleSheet.create({

  box: {
    margin: 10,
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
  },

});

export default Componenttwo38;