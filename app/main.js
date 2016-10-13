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
import {Scene, Router} from 'react-native-router-flux';
import Drawer from 'react-native-drawer'

import Home from './public/pages/Home';
import Second from './public/pages/Second';
import Sidebar from './public/sidebar';

export default class Main extends React.Component {
    render() {
        return <Router>
            <Scene key='drawer' component={Sidebar} open={false}>
                <Scene key="root">
                    <Scene key="home" component={Home} title="home"/>
                    <Scene key="second" component={Second} title="Second"/>
                </Scene>
            </Scene>
        </Router>
    }
}