import update from 'immutability-helper'

import * as genreActionTypes from 'constants/genre'

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
    case genreActionTypes.GET_ALL_GENRES_REQUEST: {
      return update(state, {
        isLoading: { $set: true }
      })
    }

    case genreActionTypes.GET_ALL_GENRES_SUCCESS: {
      return update(state, { 
        items: { $set: payload },
        isLoading: { $set: true }
      })
    }

    case genreActionTypes.GET_ALL_GENRES_FAILURE: {
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