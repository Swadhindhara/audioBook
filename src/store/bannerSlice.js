import { createSlice } from '@reduxjs/toolkit'
import { service } from '../shared/_services/api_service'
import { setLoading } from './loader';

const initialState = {
  bannerData: [],
}

export const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    setbannerData(state, { payload }) {
      state.bannerData = payload
    },
  }
})

export const { setbannerData } = bannerSlice.actions;

export default bannerSlice.reducer;

export function getbanner() {
  return async function getbannerThunk(dispatch) {
    dispatch(setLoading(true))
    try {
      await service.getbanner().then(
        (response) => {
          console.log(response);
          
          dispatch(setLoading(false))
          dispatch(setbannerData(response.data))
        }, (error) => {
          dispatch(setLoading(false))
          errorHandler(error.response)
        }
      );
    } catch (err) {

    }
  }
}
