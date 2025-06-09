import { createSlice } from '@reduxjs/toolkit'
import { service } from '../shared/_services/api_service'
import { setLoading } from './loader';

const initialState = {
  subscriptionData: [],
}

export const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    setsubscriptionData(state, { payload }) {
      state.subscriptionData = payload
    },
  }
})

export const { setsubscriptionData } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;

export function getsubscription() {
  return async function getsubscriptionThunk(dispatch) {
    dispatch(setLoading(true))
    try {
      await service.getsubscription().then(
        (response) => {          
          dispatch(setLoading(false))
          dispatch(setsubscriptionData(response.data))
        }, (error) => {
          dispatch(setLoading(false))
          errorHandler(error.response)
        }
      );
    } catch (err) {

    }
  }
}
