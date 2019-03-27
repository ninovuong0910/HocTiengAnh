import React, { Component } from 'react'
import { Text, View, FlatList} from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../redux/action-creators'
import Word from './Word';

class Home extends Component {
  componentWillMount() {
    this.props.getWords();
  }

  render() {
    if (this.props.words.length === 0) {
      return (
        <Text style={{fontSize: 30, margin: 10}}>
          No Data
        </Text>
      )
    }
    return (
      <FlatList
        data={this.props.words.filter(word => {
          if (this.props.filterMode === 'show_memorized') {
            return word.isMemorized
          }
          if (this.props.filterMode === 'show_forgot') {
            return !word.isMemorized
          }
          return true;
        })}
        keyExtractor={(item, index) => item.key}
        renderItem={(item) => <Word word={item.item}/>}
      />
    )
  }
}

const mapStateToProps = state => ({
  words: state.words,
  filterMode: state.filterMode
})

export default connect(mapStateToProps, actions)(Home)
