import reducer from '../../src/reducer/index'
import * as types from '../../src/action/types'
import expect from 'expect'

const INITIAL_STATE = 
{main: {
  profile: {
    bio: ''
  },
  user_photos: [],
  popular_photos: [],
  loading_profile: true,
  loading_user_photos: true,
  loading_popular_photos: true,
  expanded: false
}}

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
  })

  it('should handle LOAD_PROFILE', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: types.LOAD_PROFILE,
        payload: {bio: 'test'}
      })
    ).toEqual({main:
      {
        profile: {
          bio: 'test'
        },
        user_photos: [],
        popular_photos: [],
        loading_profile: false,
        loading_user_photos: true,
        loading_popular_photos: true,
        expanded: false
      }
    })
  })
})