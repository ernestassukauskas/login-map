import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Input, CheckBox } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import * as SplashScreen from 'expo-splash-screen';
import Map from './MapComponent';

import { NavigationContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';


class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      remember: false
    }
  }

  componentDidMount() {
    SecureStore.getItemAsync('userinfo') // Before store has to be convereted to JSON and after convert back to JS object
      .then((userdata) => {
        let userinfo = JSON.parse(userdata); // to JS object
        if (userinfo) {
          this.setState({email: userinfo.email});
          this.setState({password: userinfo.password});
          this.setState({remember: true});
          return (
            <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Map" component={Map} />
            </Stack.Navigator>
          </NavigationContainer>
          )
        }
      })
      SplashScreen.hideAsync();
  }

  static navigationOptions = {
    title: 'Login',
  };

  handleLogin(email, password) {
    console.log(JSON.stringify(this.state));
    if (this.state.remember)
      SecureStore.setItemAsync(
        'userinfo',
        JSON.stringify({email: this.state.email, password: this.state.password}) // To JSON string to store in secureStore
      )
      .catch((error) => console.log('Could not save user info', error));
    else {
      SecureStore.deleteItemAsync('userinfo')
        .catch((error) => console.log('Could not delete user info', error));
    }
    const Stack = createStackNavigator();
    if (email && password) {
      return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
            placeholder="Email"
            leftIcon={{ type: 'font-awesome', name: 'user-o' }}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
            containerStyle={styles.formInput}
            />
        <Input
            placeholder="Password"
            leftIcon={{ type: 'font-awesome', name: 'key' }}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            containerStyle={styles.formInput}
            />
        <CheckBox title="Remember Me"
            center
            checked={this.state.remember}
            onPress={() => this.setState({remember: !this.state.remember})} // Toggles State
            containerStyle={styles.formCheckbox}
            />
        <View style={styles.formButton}>
          <Button
              onPress={() => this.handleLogin()}
              title="Login"
              color="#512DA8"
              />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 20,
  },
  formInput: {
    margin: 40
  },
  formCheckbox: {
    margin: 40,
    backgroundColor: null
  },
  formButton: {
    margin: 60
  }
});

export default Login;