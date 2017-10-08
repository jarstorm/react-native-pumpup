import reducer from '../../src/reducer/index'
import * as types from '../../src/action/types'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({main:
      {
        profile: {
          bio: ''
        },
        user_photos: [],
        popular_photos: [],
        loading: true
      }
    })
  })

  it('should handle LOAD_PROFILE', () => {
    expect(
      reducer({main:
      {
        profile: {
          bio: ''
        },
        user_photos: [],
        popular_photos: [],
        loading: true
      }
    }, {
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
        loading: false
      }
    })
  })
})