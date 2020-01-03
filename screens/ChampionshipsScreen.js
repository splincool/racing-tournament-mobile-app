import React, {useState,useEffect} from 'react';
import { 
  ActivityIndicator,
  View, 
  StyleSheet, 
  ScrollView, 
  SafeAreaView,
  RefreshControl
} from 'react-native';
import Constants from 'expo-constants';
import {Champ} from '../components/Champ'
export const ChampionshipsScreen = (props) => {

  // static navigationOptions = {
  //   title: 'Championships',
  // };

  const [isLoading, setIsLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [champsData, setChampData] = useState()

  useEffect(() =>{
    getData()
  },[])

  const getData = () => {
    setRefreshing(true)
    return fetch('https://us-central1-racing-tournament.cloudfunctions.net/getChampionships')
      .then((response) => response.json())
      .then((responseJson) => {

        let dataSource = responseJson.filter(item => {
          if (item.championship && item.championship.status) {
            return item.championship.status === 'Active'
          }
        })
        setIsLoading(false)
        setRefreshing(false)
        setChampData(dataSource)

        console.log('updated')
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  const openChampHandler = (champ) => {
    props.navigation.navigate('Championship', {
      champName: champ.championship.info.name
    })
  }

  if(isLoading){
    return(
      <View style={{flex: 1, padding: 20}}>
        <ActivityIndicator/>
      </View>
    )
  }

  return(
    <SafeAreaView style={styles.area}>
      <ScrollView 
        refreshControl={
          <RefreshControl 
            refreshing={refreshing} 
            onRefresh={() => getData()} 
          />
        }
      >
        <View style={styles.container}>
          <View>
            {champsData && champsData.map((item,i) => 
              <Champ key={i} item={item} onOpen={openChampHandler}/>)}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  area: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});