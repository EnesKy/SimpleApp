import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';
import Login from './app/components/Login'
import Main from './app/components/Main'

const AppNavigator = StackNavigator({
    Login: {screen: Login},
    Main: {screen: Main}
});

export default class App extends React.Component {
  render() {
    return (
      //<Main />
      <AppNavigator />
    );
  }
}