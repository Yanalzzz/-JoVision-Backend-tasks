


import React, { useRef, useState } from 'react';
import {
  View,
  Image,
  FlatList,
  Pressable,
  Alert,
  StyleSheet,
  Button,
  Modal,
  Text,
  TextInput,
} from 'react-native';

const Component29 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageIndex, setImageIndex] = useState('');
  const flatListRef = useRef(null);

  const images = [
    { id: '1', uri: 'https://tse4.mm.bing.net/th/id/OIP.Yvg_NMtKsGzV-iTurHTmPAHaEK?r=0&pid=Api&h=220&P=0' },
    { id: '2', uri: 'https://assets.goal.com/images/v3/blt7ca3b826d039d7b8/GOAL%20-%20Blank%20WEB%20-%20Facebook(50).jpg?auto=webp&format=pjpg&width=3840&quality=60' },
    { id: '3', uri: 'https://tse1.mm.bing.net/th/id/OIP.e9GcOJgqSCBOzk4GO9TG_QHaEK?r=0&pid=Api&h=220&P=0' },
    { id: '4', uri: 'https://tse4.mm.bing.net/th/id/OIP.pL2BW-lHyWkWnEYUC6aBEAHaHa?r=0&pid=Api&h=220&P=0' },
    { id: '5', uri: 'https://tse2.mm.bing.net/th/id/OIP.r7tssOGv_WSzewqrX4t61gHaE8?r=0&pid=Api&h=220&P=0' },
    { id: '6', uri: 'https://tse2.mm.bing.net/th/id/OIP.FHZyDpQIfZaxWL2vGq35aAHaJQ?r=0&pid=Api&h=220&P=0' },
    { id: '7', uri: 'https://pictures.tribuna.com/image/7a469006-059f-429b-84b6-b3bf291db1d9?width=1920&quality=70' },
    { id: '8', uri: 'https://picsum.photos/id/80/200/200' },
    { id: '9', uri: 'https://picsum.photos/id/90/200/200' },
    { id: '10', uri: 'https://picsum.photos/id/100/200/200' },
  ];

  const goToImage = () => {
    const index = Number.parseInt(imageIndex, 10);

    if (!Number.isInteger(index) || index < 0 || index >= images.length) {
      Alert.alert('Error', 'Enter an index from 0 to 9');
      return;
    }

    flatListRef.current?.scrollToIndex({
      index,
      animated: true,
    });

    setModalVisible(false);
    setImageIndex('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        keyExtractor={(item) => item.id}
        getItemLayout={(_, index) => ({
          length: 170,
          offset: 170 * index,
          index,
        })}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() =>
              Alert.alert('Selected', `You selected image: ${index}`)
            }
          >
            <Image source={{ uri: item.uri }} style={styles.image} />
          </Pressable>
        )}
      />

      <Button title="Show images" onPress={() => setModalVisible(true)} />

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            <Text>Enter image index:</Text>

            <TextInput
              style={styles.input}
              value={imageIndex}
              onChangeText={setImageIndex}
              keyboardType="number-pad"
              placeholder="0 - 9"
              maxLength={2}
            />

            <Button title="Go To Image" onPress={goToImage} />
            <Button
              title="Cancel"
              onPress={() => {
                setModalVisible(false);
                setImageIndex('');
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    margin: 10,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 30,
    width: 280,
  },
  input: {
    borderWidth: 1,
    marginVertical: 20,
    padding: 10,
  },
});

export default Component29;


