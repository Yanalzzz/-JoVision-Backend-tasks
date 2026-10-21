import React, {useRef,useState,  forwardRef,useImperativeHandle} from 'react';

import {View,Text,TextInput,  StyleSheet} from 'react-native';


const MyFunctionPage = forwardRef((props, ref) => {

  const [text, setText] = useState('');

  useImperativeHandle(ref, () => ({
    updateText(value) {
      setText(value);
    }
  }));
  return (
    <View>
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  );
});


const Task24 = () => {

  const myRef = useRef(null);

  const handleTextChange = (value) => {
    if (myRef.current) {
      myRef.current.updateText(value);
    }
  };

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Type something"
        onChangeText={handleTextChange}
      />

      <MyFunctionPage ref={myRef} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    borderWidth: 1,
    width: 220,
    padding: 10,
    marginBottom: 20,
  },

  text: {
    fontSize: 22,
  },
});

export default Task24;