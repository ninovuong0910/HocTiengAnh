import axios from 'axios'

const url = 'https://server2802.herokuapp.com/word'

export function getWords() {
  return dispatch => {
    axios.get(url).then(response => {
      dispatch({type: 'GET_WORDS', words: response.data.words})
    });
  }
}

export function addWord(en, vn) {
  return dispatch => {
    axios.post(url, {en, vn}).then(response => {
      dispatch({type: 'ADD_WORD', word: response.data.w})
    })
  }
}

export function removeWord(_id) {
  return dispatch => {
    axios.delete(url + '/' + _id).then(response => {
      dispatch({type: 'REMOVE_WORD', _id})
    })
  }
}

export function toggleWord(word) {
  return dispatch => {
    axios.put(url, {id: word._id, isMemorized: !word.isMemorized}).then(response => {
      dispatch({type: 'TOGGLE_WORD', _id: word._id})
    })
  }
}