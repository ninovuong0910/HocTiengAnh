import React, { Component } from 'react'
import { View, Text, Picker, Platform, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../redux/action-creators'

class Filter extends Component {
  constructor(props) {
    super(props)

    this.state = ({
      showIOSSelection: false
    })
  }

  render() {
    if (Platform.OS !== 'android') {
      return this.renderiOS();
    }
    return (
      <View style={{backgroundColor: '#ccc6c6', margin: 10, borderRadius: 5}}>
        <Picker 
          selectedValue={this.props.filterMode}
          onValueChange={(itemValue, itemIndex) =>
            this.props.changeFilterMode(itemValue)
          }>
            <Picker.Item value='show_all' label='Show All'/>
            <Picker.Item value='show_memorized' label='Show Memorized'/>
            <Picker.Item value='show_forgot' label='Show Forgot'/>
        </Picker>
      </View>
    )
  }

  renderiOS() {
    return (
      <View style={{backgroundColor: '#ccc6c6', margin: 10, borderRadius: 5, padding:10}}>
        <TouchableOpacity
          onPress={() => this.toggleIOSSelection()}>
          <Text style={{fontSize: 30}}>{filterModeArray.filter(item => item.value === this.props.filterMode)[0].label}</Text>
        </TouchableOpacity>        
        {
          this.state.showIOSSelection
          ?
          <View style={{backgroundColor: 'white', margin: 10, borderRadius: 5, padding:10}}>
            <FlatList
              keyExtractor={(item, index) => item.key}
              renderItem={(item) => this.renderSelectionItem(item.item)}
              data={filterModeArray}/>
          </View>
          :
          null
        }
      </View>
    )
  }

  renderSelectionItem(item) {
    return (
      <TouchableOpacity
        onPress={() => this.selectFilter(item.value)}>
        <Text style={{fontSize: 30, fontWeight: item.value === this.props.filterMode ? 'bold' : 'normal'}} key={item.value}>{item.label}</Text>
      </TouchableOpacity>       
    )
  }

  selectFilter(filterMode) {
    this.setState({
      showIOSSelection: false
    })
    this.props.changeFilterMode(filterMode)
  }

  toggleIOSSelection() {
    this.setState({
      showIOSSelection: !this.state.showIOSSelection
    })
  }
}

const filterModeArray = [
  {value:'show_all', label:'Show All'},
  {value:'show_memorized', label:'Show Memorized'},
  {value:'show_forgot', label:'Show Forgot'}
]

const mapStateToProps = (state) => ({
  filterMode: state.filterMode
})

export default connect(mapStateToProps, actions)(Filter)
