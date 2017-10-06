import {
  LOADED_DATA
} from '../action/types';

const INITIAL_STATE = {
  profile: {
    bio: ''
  },
  loading: true
};

export default (state = INITIAL_STATE, action) => {
	console.log(action);
  switch (action.type) {
    case LOADED_DATA:
      return { ...state, profile: action.payload, loading: false };
    default:
      return state;
  }
};