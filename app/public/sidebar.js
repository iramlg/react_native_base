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
import Drawer from 'react-native-drawer'
import { DefaultRenderer, Actions } from 'react-native-router-flux'

import SidebarItems from './sidebarItems';

export default class Sidebar extends React.Component {
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  render () {
    const state = this.props.navigationState
    const children = state.children
    
    return (
      <Drawer
        ref='navigation'
        type='displace'
        open={state.open}
        content={<SidebarItems />}
        tapToClose
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        tweenHandler={(ratio) => ({
          main: { opacity: Math.max(0.54, 1 - ratio) }
        })}
      >
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
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
