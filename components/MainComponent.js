import React, { Component } from 'react';

import Home from './HomeComponent';
import Map from './MapComponent';
import Login from './LoginComponent';
import { View, Platform, Text, ScrollView, Image, StyleSheet, ToastAndroid } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
  }
}

const HomeNavigator = createStackNavigator({
  Home: { screen: Home }
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"
    },
    headerTintColor: "#fff",
    headerLeft: <Icon name="menu" size={24}
      color= 'white'
      onPress={ () => navigation.toggleDrawer() }
    />
  })
});

const MapNavigator = createStackNavigator({
  Home: { screen: Map }
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"
    },
    headerTintColor: "#fff",
    headerLeft: <Icon name="menu" size={24}
      color= 'white'
      onPress={ () => navigation.toggleDrawer() }
    />
  })
});

const LoginNavigator = createStackNavigator({
  Login: { screen: Login }
}, {
navigationOptions: ({ navigation }) => ({
  headerStyle: {
    backgroundColor: "#512DA8"
  },
  headerTitleStyle: {
    color: "#fff"
  },
  title: 'Login',
  headerTintColor: "#fff",
  headerLeft: <Icon name="menu" size={24}
    iconStyle={{ color: 'white' }}
    onPress={ () => navigation.toggleDrawer() } />
  })
});

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={styles.drawerHeader}>
       {/* flex: mainly horizontally is divided to 3 units  */}
        <View style={{flex:1}}>
        <Image source={require('./images/icon-green3x.png')} style={styles.drawerImage} />
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.drawerHeaderText}>Menu</Text>
        </View>
      </View>
      {/* ES6 specify, pass everything from createDrawerNavigator used earlier*/}
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

// for slide from right side
const MainNavigator = createDrawerNavigator({
  Login:
  { screen: LoginNavigator,
    navigationOptions: {
      title: 'Login',
      drawerLabel: 'Login',
      drawerIcon: ({ tintColor, focused }) => (
        <Icon
          name='sign-in'
          type='font-awesome'
          size={24}
          iconStyle={{ color: tintColor }}
        />
      ),
    }
  },
  Home:
    { screen: HomeNavigator,
      navigationOptions: {
        title: 'Home',
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor, focused }) => (
          <Icon
            name='home'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      }
    },
    Map:
  { screen: MapNavigator,
    navigationOptions: {
      title: 'Map',
      drawerLabel: 'Map',
      drawerIcon: ({ tintColor }) => (
        <Icon
          name='map'
          type='font-awesome'
          size={24}
          iconStyle={{ color: tintColor }}
        />
      ),
    }
  },
}, {
    initialRouteName: 'Home', // Default will be render at top of Navigation, then user opens App, Login will be explicitly
    drawerBackgroundColor: '#D1C4E9',
    contentComponent: CustomDrawerContentComponent
});

class Main extends Component {

  render() {
    return (
      <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
        <MainNavigator />
      </View>
    );
  }
}

// All styles is defined at the bottom of file
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#512DA8',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});

export default connect(mapStateToProps)(Main);