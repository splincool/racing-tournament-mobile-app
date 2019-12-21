import React from 'react'
import {View, Text, Image, StyleSheet, Button} from 'react-native'

const Champ = ({item}) => {
  let image
  if (item.championship.info.champImage) {
    image = <Image
              style={styles.image}
              source = {{uri: item.championship.info.champImage}}
            />
  }
  return (
    <View style={styles.champ}>
      {image}
      <Text>{item.championship.info.name}</Text>
      <Button title="Open"/>
    </View>
  )
}

const styles = StyleSheet.create({
  champ: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor : "#fff",
    marginTop: 10,
    width: 300
  },
  image: {
    resizeMode: 'cover',
    height: 150
  }
});

export default Champ