/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class SidebarItems extends React.Component {

	gotToSecond() {
		Actions.second()
	}

	gotToHome() {
		Actions.home()
	}

  render () {
    return (
      <View>
        <Text onPress={this.gotToHome}>
          first
        </Text>
        <Text onPress={this.gotToSecond}>
          last
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
