import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const ProfileScreen = () => {

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
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