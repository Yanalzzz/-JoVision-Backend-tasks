import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

const Component26= () => {

  const [ip, setIp] = useState('');
  const [loading, setLoading] = useState(false);

  // Non-blocking request using Promises
  const getIpNonBlocking = () => {
fetch('https://api.ipify.org/')      .then(data => {
        setIp(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getIpBlocking = async () => {
    try {
      setLoading(true);

      const response = await fetch('https://api.ipify.org/');
      const data = await response.text();

      setIp(data);

    } catch (error) {
      console.log(error);

    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {ip}
      </Text>

      <Button
        title="Get IP Non Blocking"
        onPress={getIpNonBlocking}
        disabled={loading}
      />

      <View style={styles.space} />

      <Button
        title="Get IP Blocking"
        onPress={getIpBlocking}
        disabled={loading}
      />

      {loading ? (
        <ActivityIndicator
          size="large"
          style={styles.loading}
        />
      ) : null}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },

  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30,
  },

  space: {
    height: 20,
  },

  loading: {
    marginTop: 20,
  },
});

export default Component26;