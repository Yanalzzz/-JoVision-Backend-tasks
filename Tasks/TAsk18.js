import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import React, {useEffect, useState} from 'react';
const Task18 = () => {
  
  const [loading,setLoading] = useState(true);

useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);




    return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, styles.horizontal]}>
        
      {loading ?  <ActivityIndicator size="large" color="#00ff00" /> : (<Text style={[styles.container]}> YAnal  </Text>)}

      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Task18;