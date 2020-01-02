import React from 'react'
import {View, Text, Image, StyleSheet, Button} from 'react-native'

export const Champ = ({item, onOpen}) => {
  let image
  if (item && item.championship && item.championship.info.champImage) {
    image = <Image
              style={styles.image}
              source = {{uri: item.championship.info.champImage}}
            />
  }

  return (
    <View style={styles.champContainer}>
      <View style={styles.champ}>
        <View>
          {image}
        </View>
        <View style={styles.champInfo}>
          <Text>{item.championship && item.championship.info.name}</Text>
          <Button title="Open" onPress={() => onOpen(item)}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  champContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15
  },
  champ: {
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 10,
    width: '100%'
  },
  champInfo: {
    padding: 10
  },
  image: {
    width: '100%',
    aspectRatio: 2
  },
});
