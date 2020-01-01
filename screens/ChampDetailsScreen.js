import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const ChampDetailsScreen = ({ navigation }) => {
  const champName = navigation.getParam('champName')

  return (
    <View style={styles.container}>
      <Text>Champ Details Screen: {champName}</Text>
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