import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import Login from './LoginComponent';

class Home extends Component {

  // Stores value in state
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Home'
  };

  render() {

    return(
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
      <ScrollView>
        <Login />
      </ScrollView>
      </View>
    );
  }
}

export default Home;