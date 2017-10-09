import {
  LOAD_PROFILE,
  LOAD_USER_PHOTOS,
  LOAD_POPULAR_PHOTOS,
  READ_MORE
} from '../action/types'

const INITIAL_STATE = {
  profile: {
    bio: ''
  },
  user_photos: [],
  popular_photos: [],
  loading_profile: true,
  loading_user_photos: true,
  loading_popular_photos: true,
  expanded: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOAD_PROFILE:
    return { ...state, profile: action.payload, loading_profile: false }
  case READ_MORE:
    return { ...state, expanded: action.payload }
  case LOAD_USER_PHOTOS:
    return { ...state, user_photos: action.payload.result.posts, loading_user_photos: false }
  case LOAD_POPULAR_PHOTOS:
    return { ...state, popular_photos: action.payload.result.posts, loading_popular_photos: false }
  default:
    return state
  }
}