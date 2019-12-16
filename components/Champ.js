import React from 'react'
import {View, Text, Image} from 'react-native'

const Champ = ({item}) => {
  let image
  if (item.championship.info.champImage) {
    image = <Image
              style={{resizeMode: 'contain', height: 100}}
              source = {{uri: item.championship.info.champImage || "https://fakeimg.pl/250x100/"}}
            />
  }
  return (
    <View>
      {image}
      <Text>{item.championship.info.name}</Text>
    </View>
  )
}

export default Champ