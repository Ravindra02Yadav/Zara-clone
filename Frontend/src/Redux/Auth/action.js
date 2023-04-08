import * as types from "./actionTypes";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const login = (email, password) => (dispatch) => {
  dispatch({ type: types.GET_LOGIN_REQUEST })
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
     return  dispatch({ type: types.GET_LOGIN_SUCCESS })
    })
    .catch((error) => {
      dispatch({ type: types.GET_LOGIN_FAILURE })
    });
}

export const signin = (email, password) => (dispatch) => {
  dispatch({ type: types.ADD_SIGNUP_REQUEST })
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return dispatch({ type: types.ADD_SIGNUP_SUCCESS })
    })
    .catch((error) => {
      dispatch({ type: types.ADD_SIGNUP_FAILURE, payload:error.message })
    });
}