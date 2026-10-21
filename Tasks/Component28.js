import React from 'react';
import {
  View,
  Image,
  FlatList,
  Pressable,
  Alert,
  StyleSheet
} from 'react-native';

const Component28 = () => {

  const images = [
    {id: '1', uri: 'https://tse4.mm.bing.net/th/id/OIP.Yvg_NMtKsGzV-iTurHTmPAHaEK?r=0&pid=Api&h=220&P=0'},
    {id: '2', uri: 'https://assets.goal.com/images/v3/blt7ca3b826d039d7b8/GOAL%20-%20Blank%20WEB%20-%20Facebook(50).jpg?auto=webp&format=pjpg&width=3840&quality=60'},
    {id: '3', uri: 'https://tse1.mm.bing.net/th/id/OIP.e9GcOJgqSCBOzk4GO9TG_QHaEK?r=0&pid=Api&h=220&P=0'},
    {id: '4', uri: 'https://tse4.mm.bing.net/th/id/OIP.pL2BW-lHyWkWnEYUC6aBEAHaHa?r=0&pid=Api&h=220&P=0'},
    {id: '5', uri: 'https://tse2.mm.bing.net/th/id/OIP.r7tssOGv_WSzewqrX4t61gHaE8?r=0&pid=Api&h=220&P=0'},
    {id: '6', uri: 'https://tse2.mm.bing.net/th/id/OIP.FHZyDpQIfZaxWL2vGq35aAHaJQ?r=0&pid=Api&h=220&P=0'},
    {id: '7', uri: 'https://pictures.tribuna.com/image/7a469006-059f-429b-84b6-b3bf291db1d9?width=1920&quality=70'},
    {id: '8', uri: 'https://picsum.photos/id/80/200/200'},
    {id: '9', uri: 'https://picsum.photos/id/90/200/200'},
    {id: '10', uri: 'https://picsum.photos/id/100/200/200'},
  ];
  return (
    <View style={styles.container}>

      <FlatList
        data={images}
        horizontal={true}

        keyExtractor={(item) => item.id}

        renderItem={({item, index}) => (
          <Pressable
            onPress={() =>
              Alert.alert(
                'Selected',
                'You have selected image : ' + index
              )
            }
          >
            <Image
              source={{uri: item.uri}}
              style={styles.image}
            />

          </Pressable>
        )}
      />

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

});

export default Component28;