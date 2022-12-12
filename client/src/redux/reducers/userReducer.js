import { DELETE_USER, SET_USER } from '../types/userTypes';

// eslint-disable-next-line default-param-last
const userReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER: {
      console.log('set user to state', action.payload);
      return action.payload;
    }

    case DELETE_USER:
      return null;

    default:
      return state;
  }
};

export default userReducer;
