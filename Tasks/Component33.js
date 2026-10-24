import React, {useRef, useState} from 'react';
import {
  View,
  Pressable,
  Text,
  StyleSheet
} from 'react-native';

import Video from 'react-native-video';


const Component33 = () => {

  const videoRef = useRef(null);

  const [paused, setPaused] = useState(true);


  const toggleVideo = () => {

    setPaused(!paused);

  };


  return (
    <View style={styles.container}>

      <Video
        ref={videoRef}

        source={{
               uri: 'https://www.w3schools.com/html/mov_bbb.mp4'        }}

        poster={{
          source: {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Picture_with_Messi.jpg'          },
          resizeMode: 'cover'
        }}

        controls={false}

        paused={paused}

        style={styles.video}
      />


      <Pressable
        style={styles.middleButton}
        onPress={toggleVideo}
      >

        <Text style={styles.buttonText}>
          {paused ? '▶' : '⏸'}
        </Text>

      </Pressable>

    </View>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },

  video: {
    width: '100%',
    height: 250,
    backgroundColor: 'black',
  },

  middleButton: {
    position: 'absolute',
    alignSelf: 'center',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 40,
    color: 'white',
  },

});


export default Component33;