import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import SegmentedControlTab from "react-native-segmented-control-tab";


export const ChampDetailsScreen = ({ navigation }) => {
  const champName = navigation.getParam('champName')
  const [selectedIndex, setSelectedIndex] = useState(0)

  handleIndexChange = index => {
    setSelectedIndex(index)
  };

  return (
    <View style={styles.container}>
      <SegmentedControlTab
        values={["Info", "Standings"]}
        selectedIndex={selectedIndex}
        onTabPress={handleIndexChange}
      />
      {selectedIndex === 0 && (
        <View style={styles.body}>
          <Text>Champ Details Screen: {champName}</Text>
        </View>
      )}
      {selectedIndex === 1 && (
        <Text> Tab two</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 4,
    paddingTop: 10
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});