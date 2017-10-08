import {
  LOAD_PROFILE,
  LOAD_USER_PHOTOS,
  LOAD_POPULAR_PHOTOS
} from '../action/types';

const INITIAL_STATE = {
  profile: {
    bio: ''
  },
  user_photos: [],
  popular_photos: [],
  loading: true
};

export default (state = INITIAL_STATE, action) => {
	console.log(action);
  switch (action.type) {
    case LOAD_PROFILE:
      return { ...state, profile: action.payload, loading: false };
    case LOAD_USER_PHOTOS:
      return { ...state, user_photos: action.payload.result.posts, loading: false };  
    case LOAD_POPULAR_PHOTOS:
      return { ...state, popular_photos: action.payload.result.posts, loading: false };  
    default:
      return state;
  }
};