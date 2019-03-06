import * as readingListsActionTypes from 'constants/readingLists'

// Utils
import delay from 'utils/delay-promise'

// Mock data
import readingLists from 'mock-data/readingLists'

export const getReadingLists = () => async (dispatch) => {
  dispatch({ type: readingListsActionTypes.GET_READING_LISTS_REQUEST })

  try {
    await delay(200)

    dispatch({
      type: readingListsActionTypes.GET_READING_LISTS_SUCCESS,
      payload: readingLists
    })
  } catch(e) {
    dispatch({ type: readingListsActionTypes.GET_READING_LISTS_FAILURE })
  }
}