import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  RefreshControl,
} from 'react-native';

function generateRandomWord(length) {
  let result = '';

  const characters = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < length; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return result;
}
const generateWords = () => {
  const list = [];

  for (let i = 0; i < 100; i++) {
    list.push(generateRandomWord(8));
  }

  return list;
};
const Component37 = () => {

  const [words, setWords] = useState(generateWords());
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setWords(generateWords());
      setRefreshing(false);
    }, 1000);
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >

      {words.map((word, index) => (
        <Text
          key={index}
          style={styles.text}
        >
          {index + 1}. {word}
        </Text>
      ))}

    </ScrollView>
  );
};
const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },

  text: {
    fontSize: 20,
    padding: 10,
    color: 'black',
  },

})

export default Component37;