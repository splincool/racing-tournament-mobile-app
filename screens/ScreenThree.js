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
import Champ from '../components/Champ'
export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true, refreshing: false}
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
              {this.state.dataSource.map((item,i) => <Champ key={i} item={item}/>)}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});