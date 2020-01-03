import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const LeaderboardScreen = () => {

  return (
    <View style={styles.container}>
      <Text>Leaderboard Screen</Text>
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