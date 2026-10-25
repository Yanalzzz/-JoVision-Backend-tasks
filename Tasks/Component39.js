import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {setText} from '../Store.js/textSlice';

const Component39 = () => {

  const text = useSelector(
    state => state.text.value
  );
  const dispatch = useDispatch();


  React.useEffect(() => {
    console.log('Component39 mounted');
    return () => {
      console.log('Component39 unmounted');
    };

  }, []);
  return (

    <View>

      <TextInput
        style={styles.input}
        placeholder="Type something"

        value={text}

        onChangeText={(value) =>
          dispatch(setText(value))
        }
      />

      <Text>
        {text}
      </Text>
    </View>

  );
};
const styles = StyleSheet.create({

  input: {
    borderWidth: 1,
    padding: 10,
    width: 250,
  }
});
export default Component39;