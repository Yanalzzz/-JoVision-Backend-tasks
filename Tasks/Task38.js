import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import TextContext from './TextContext';
import Componenttwo38 from './Componenttwo38';

const Task38 = () => {

  const [text, setText] = useState('');

  return (
    <TextContext.Provider value={{text, setText}}>

      <View style={styles.container}>

        <Componenttwo38 />
        <Componenttwo38 />
        <Componenttwo38 />
        <Componenttwo38 />

      </View>

    </TextContext.Provider>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

});

export default Task38;