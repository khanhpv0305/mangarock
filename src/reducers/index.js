import { combineReducers } from 'redux'

// Sub reducers
import trending from './trending'
import readingLists from './readingLists'
import genre from './genre'

export default combineReducers({
  trending,
  readingLists,
  genre
})