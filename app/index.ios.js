
import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import Main from './main'

class kimmi extends Component {
  render() {
    return <Main />
  }
}

AppRegistry.registerComponent('kimmi', () => kimmi);