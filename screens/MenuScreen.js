import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const MenuScreen = () => {

  return (
    <View style={styles.container}>
      <Text>Menu Screen</Text>
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
