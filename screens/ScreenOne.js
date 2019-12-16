import React, {useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ScreenOne = () => {

  return (
    <View style={styles.container}>
      <Text>Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ScreenOne;