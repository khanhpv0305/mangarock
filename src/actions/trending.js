import * as trendingActionTypes from 'constants/trending'

// Utils
import delay from 'utils/delay-promise'

// Mock data
import trending from 'mock-data/trending'

export const getTrending = () => async (dispatch) => {
  dispatch({ type: trendingActionTypes.GET_TRENDING_REQUEST })

  try {
    await delay(200)

    dispatch({
      type: trendingActionTypes.GET_TRENDING_SUCCESS,
      payload: trending
    })
  } catch(e) {
    dispatch({ type: trendingActionTypes.GET_TRENDING_FAILURE })
  }
}