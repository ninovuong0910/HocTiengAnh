import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../redux/action-creators'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shouldShowForm: false
    }

    this.toggleForm = this.toggleForm.bind(this)
  }

  toggleForm() {
    this.setState({
      shouldShowForm: !this.state.shouldShowForm,
      txtEn: '',
      txtVn: ''
    })
  }

  render() {
    if (!this.state.shouldShowForm) {
      return (
        <TouchableOpacity 
          style={{backgroundColor: 'green', margin: 10, borderRadius: 5, alignItems: 'center'}}
          onPress={this.toggleForm}>
          <Text style={{fontSize: 40, color: 'white'}}>
            +
          </Text>
        </TouchableOpacity>
      )
    }
    isAddButtonEnabled = this.state.txtEn !== '' && this.state.txtVn !== '';
    return (
      <View style={{backgroundColor: '#ccc6c6', margin: 10, borderRadius: 5}}>
        <TextInput 
          style={{fontSize: 40, backgroundColor: 'white', margin: 10, borderColor: 'black', padding: 10, borderWidth: 2, borderRadius: 5}}
          value={this.state.txtEn}
          placeholder='English'
          onChangeText={text => this.setState({txtEn: text})}/>
        <TextInput 
          style={{fontSize: 40, backgroundColor: 'white', margin: 10, borderColor: 'black', padding: 10, borderWidth: 2, borderRadius: 5}}
          value={this.state.txtVn}
          placeholder='Vietnamese'
          onChangeText={text => this.setState({txtVn: text})}/>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <TouchableOpacity 
              disabled={!isAddButtonEnabled}
              style={{backgroundColor: isAddButtonEnabled ? 'green' : 'grey', margin: 10, borderRadius: 5, alignItems: 'center', padding: 10}}
              onPress={() => {
                this.props.addWord(this.state.txtEn, this.state.txtVn);
                this.toggleForm();
                this.setState({
                  txtEn: '',
                  txtVn: ''
                })
              }}>
              <Text style={{fontSize: 40, color: isAddButtonEnabled ? 'white' : 'black'}}>
                Add word
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity 
              style={{backgroundColor: 'red', margin: 10, borderRadius: 5, alignItems: 'center', padding: 10}}
              onPress={this.toggleForm}>
              <Text style={{fontSize: 40, color: 'white'}}>
                Cancle
              </Text>
            </TouchableOpacity>
          </View>
        
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  // shouldShowForm: state.shouldShowForm
})

export default connect(mapStateToProps, actions)(Form)