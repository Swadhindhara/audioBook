import { createSlice } from '@reduxjs/toolkit'
import { service } from '../shared/_services/api_service'
import { setLoading } from './loader';
// import { errorHandler, successHandler } from '../shared/_helper/responseHelper';

const initialState = {
  categoryData: [],
  totalCategory: 0,
  isOpenModal: false,
  isStatusOpenModal: false,
}

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryData(state, { payload }) {
      console.log(payload);
      
      state.categoryData = payload
    },
  }
})

export const { setCategoryData,  } = categorySlice.actions;

export default categorySlice.reducer;

export function getCategory(limit, offset, status, keyword) {
  return async function getCategoryThunk(dispatch) {
    dispatch(setLoading(true))
    try {
      await service.getCategory(limit, offset, status, keyword).then(
        (response) => {
          dispatch(setLoading(false))
          dispatch(setCategoryData(response.data))
        }, (error) => {
          dispatch(setLoading(false))
          // errorHandler(error.response)
        }
      );
    } catch (err) {

    }
  }
}
