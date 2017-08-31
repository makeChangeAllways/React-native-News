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

//引入外部组件

var  Main = require('./Component/XMGMain');
//var  Main = require('./Component/XMGMessage');

var Socket = require('./Component/socket');

export default class NewProject extends Component {

  render() {

    return (


      <Socket/>
      /*<Main/>*/

    );
  }
}

AppRegistry.registerComponent('NewProject', () => NewProject);
