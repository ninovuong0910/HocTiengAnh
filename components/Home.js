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
    return (
      <FlatList
        data={this.props.words}
        keyExtractor={(item, index) => item.key}
        renderItem={(item) => <Word word={item.item}/>}
      />
    )
  }
}

const mapStateToProps = state => ({
  words: state.words
})

export default connect(mapStateToProps, actions)(Home)
