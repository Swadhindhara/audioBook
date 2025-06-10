import { createSlice } from '@reduxjs/toolkit'
import { service } from '../shared/_services/api_service'
import { setLoading } from './loader';

const STATUS = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading'
});

const initialState = {
  loadingStatus: STATUS.IDLE,
  error: "",
  token: "",
  isAuthenticated: localStorage.getItem('token') ? true : false,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSucces(state, { payload }) {
      localStorage.setItem("token", payload.token);
      localStorage.setItem("login", true);
      state.isAuthenticated = true;
    },
    loginFailed(state, { payload }) {
      let result = Array.isArray(payload.message);
      if (result) {
        toast.error(payload.message[0]);
        return;
      } else {
        toast.error(payload.message);
        return;
      }
    },
    logOut(state) {
      localStorage.removeItem("token");
      localStorage.removeItem("login");
      state.isAuthenticated = false;
    }
  }
})

export const { loginSucces, loginFailed,logOut } = authSlice.actions;

export default authSlice.reducer;

/*LOGIN GET OTP*/
export function loginUser(data) {
  return async function loginUserThunk(dispatch) {
    dispatch(setLoading(true))
    try {
      await service.loginUser( data).then(
        (response) => {
          if (response.data) {
            dispatch(loginSucces(response.data));
          }
        }, (error) => {
          dispatch(setLoading(false))
        }
      );
    } catch (err) {

    }
  }
}



