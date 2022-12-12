import { DELETE_USER, SET_USER } from '../types/userTypes';
import * as endPoints from '../../config/endPoints';
import { disableLoader, enableLoader } from './loaderAction';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const getUserFromServer = (id) => async (dispatch) => {
  dispatch(enableLoader());
  const response = await fetch(endPoints.getUser(id), {
    credentials: 'include',
  });
  if (response.status === 200) {
    const currentUser = await response.json();
    dispatch(setUser(currentUser));
  }
  dispatch(disableLoader());
};

export const signUp = (payload, navigate) => async (dispatch) => {
  dispatch(enableLoader());
  const response = await fetch(endPoints.signUp(), {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(payload),
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
    localStorage.setItem('TokenName', user.name);
    navigate('/');
  } else {
    navigate('/auth/signup');
  }
  dispatch(disableLoader());
};

export const signIn = (payload, navigate) => async (dispatch) => {
  console.log(document.cookie);
  dispatch(enableLoader());
  const response = await fetch(endPoints.signIn(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(payload),
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
    localStorage.setItem('TokenName', user.name);
    navigate('/');
  } else {
    navigate('/auth/signin');
  }
  dispatch(disableLoader());
};

export const deleteUser = () => ({
  type: DELETE_USER,
});

export const signOut = () => async (dispatch) => {
  const response = await fetch(endPoints.signOut(), {
    credentials: 'include',
    mode: 'cors',
  });
  if (response.status === 200) {
    localStorage.removeItem('TokenName');
    dispatch(deleteUser());
  }
};

export const checkAuth = () => async (dispatch) => {
  console.log('привет');
  const response = await fetch(endPoints.checkAuth(), {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    mode: 'cors',
  });
  console.log(response);
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
  }
};

export const editUser = (user, navigate) => async (dispatch, getState) => {
  const {
    user: { id: userId },
  } = getState();
  dispatch(enableLoader());
  const response = await fetch(endPoints.editUser(userId), {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(user),
  });
  if (response.status === 200) {
    const userData = await response.json();
    dispatch(setUser(userData));
    navigate(`/users/${userData.id}`);
  } else {
    navigate.replace('/');
  }
  dispatch(disableLoader());
};
