import React, {useState} from 'react';
import {View,Button,StyleSheet} from 'react-native';

import Component39 from './Component39';


const Task39 = () => {

  const [showComponent, setShowComponent] = useState(true);

  return (

    <View style={styles.container}>

      <Button

        title={
          showComponent
            ? 'Hide'
            : 'Show'
        }

        onPress={() =>
          setShowComponent(!showComponent)
        }
      />


      {showComponent
        ? <Component39 />
        : null
      }

    </View>

  );

};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

});


export default Task39;