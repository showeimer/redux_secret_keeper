import {SET_TOKEN, SET_ERROR, SET_USER, LOG_OUT} from '../actions/actions';

import update from 'immutability-helper';

const initialState = {
    token: null,
    error: null,
    email: null,
    name: null,
    secret: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return update(state, {
        error: {
          $set: action.payload
        }
      })

    case SET_TOKEN:
      return update(state, {
        token: {
          $set: action.payload
        }
      });

    case SET_USER:
      return update(state, {
        email: {
          $set: action.payload.email
        },
        name: {
          $set: action.payload.name
        },
        secret: {
          $set: action.payload.secret
        }
      });

    case LOG_OUT:
      return update(state, {
        token: {
          $set: null
        },
        error: {
          $set: null
        },
        email: {
          $set: null
        },
        name: {
          $set: null
        },
        secret: {
          $set: null
        }
      })

    default:
      return state;
    }
}

export default reducer;
