import React from 'react';
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
export default class ChampionshipsScreen extends React.Component {

  static navigationOptions = {
    title: 'Championships',
  };

  constructor(props){
    super(props)
    this.state ={ isLoading: true, refreshing: false}
    this.openChampHandler = this.openChampHandler.bind(this);
  }

  componentDidMount(){
    this.getData()
  }

  async getData() {
    this.setState({refreshing: true})
    return fetch('https://us-central1-racing-tournament.cloudfunctions.net/getChampionships')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          refreshing: false,
          dataSource: responseJson,
        }, function(){

        });
        console.log('updated')

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  openChampHandler(champ) {
    this.props.navigation.navigate('Championship', {
      champName: champ.championship.info.name
    })
  }

  render(){

    if(this.state.isLoading){
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
              refreshing={this.state.refreshing} 
              onRefresh={() => this.getData()} 
            />
          }
        >
          <View style={styles.container}>
            <View>
              {this.state.dataSource.map((item,i) => 
                <Champ key={i} item={item} onOpen={this.openChampHandler}/>)}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
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