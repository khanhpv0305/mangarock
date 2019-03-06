import update from 'immutability-helper'

import * as trendingActionTypes from 'constants/trending'

export default function(
  state = {
    items: [],
    isLoading: false,
    isError: false
  },
  action
) {
  const { type, payload } = action

  switch (type) {
    case trendingActionTypes.GET_TRENDING_REQUEST: {
      return update(state, {
        isLoading: { $set: true }
      })
    }

    case trendingActionTypes.GET_TRENDING_SUCCESS: {
      return update(state, { 
        items: { $set: payload },
        isLoading: { $set: true }
      })
    }

    case trendingActionTypes.GET_TRENDING_FAILURE: {
      return update(state, { 
        isLoading: { $set: true },
        isError: { $set: true }
      })
    }

    default: {
      return state
    }
  }
}