import React from 'react';
import {View, StyleSheet} from 'react-native';
import Video from 'react-native-video';

const Component32 = () => {

  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Flip_Book_-_Messi_Example.webm?utm_source=chatgpt.com'
        }}
        poster={{
          source: {
            uri: 'https://static.bongda24h.vn/medias/original/2024/10/16/messi-1610105156.jpg'
          },
          resizeMode: 'cover'
        }}
        controls={true}

        style={styles.video}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  video: {
    width: '100%',
    height: 250,
  },

});

export default Component32;