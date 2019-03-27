import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import * as actions from '../redux/action-creators'
import { connect } from 'react-redux'
const grey = '#ccc6c6'

class Word extends Component {
  
  render() {
    const word = this.props.word

    return (
      <View style={{backgroundColor: grey, height: 180, flexDirection: 'row', justifyContent: 'space-around', margin: 10, borderRadius: 5}} key={word._id}>
        <View style={{justifyContent: 'space-around', alignItems: 'center'}}>
          <Text style={{fontSize: 40, color: 'green'}}>{word.en}</Text>
          {
            word.isMemorized
            ?
            <TouchableOpacity 
              style={{backgroundColor: 'green', padding: 10, borderRadius: 5}}
              onPress={() => this.props.toggleWord(word)}>
              <Text style={{fontSize: 40, color: 'white'}}>Forgot</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity 
              style={{backgroundColor: 'red', padding: 10, borderRadius: 5}}
              onPress={() => this.props.toggleWord(word)}>
              <Text style={{fontSize: 40, color: 'white'}}>Memorized</Text>
            </TouchableOpacity>
          }
          
        </View>
        <View style={{justifyContent: 'space-around', alignItems: 'center'}}>
          <Text style={{fontSize: 40, color: 'red'}}>{word.isMemorized ? '----' : word.vn}</Text>
          <TouchableOpacity 
            style={{backgroundColor: 'orange', padding: 10, borderRadius: 5}}
            onPress={() => this.props.removeWord(word._id)}>
            <Text style={{fontSize: 40, color: 'black'}}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default connect(null, actions)(Word)
