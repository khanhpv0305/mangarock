import update from 'immutability-helper'

import * as readingListsActionTypes from 'constants/readingLists'

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
    case readingListsActionTypes.GET_READING_LISTS_REQUEST: {
      return update(state, {
        isLoading: { $set: true }
      })
    }

    case readingListsActionTypes.GET_READING_LISTS_SUCCESS: {
      return update(state, { 
        items: { $set: payload },
        isLoading: { $set: true }
      })
    }

    case readingListsActionTypes.GET_READING_LISTS_FAILURE: {
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