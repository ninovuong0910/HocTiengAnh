import React, {Component} from 'react';
import {View} from 'react-native';
import Home from './components/Home'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Form from './components/Form';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Form/>
          <Home/>
        </View>
      </Provider>
      
    );
  }
}