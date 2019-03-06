import * as genreActionTypes from 'constants/genre'

// Utils
import delay from 'utils/delay-promise'

// Mock data
import genres from 'mock-data/genres'

export const getAllGenre = () => async (dispatch) => {
  dispatch({ type: genreActionTypes.GET_ALL_GENRES_REQUEST })

  try {
    await delay(200)

    dispatch({
      type: genreActionTypes.GET_ALL_GENRES_SUCCESS,
      payload: genres
    })
  } catch(e) {
    dispatch({ type: genreActionTypes.GET_ALL_GENRES_FAILURE })
  }
}