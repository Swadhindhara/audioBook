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
  pageOneData: {},
  pageDesc: '',
  pageTitle:'',
}

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setOnePageData(state, { payload }) {
      state.pageOneData = payload
      state.pageDesc = payload.description
      state.pageTitle = payload.title
    },
  }
})


export const { setOnePageData, setPageData } = pageSlice.actions;
export default pageSlice.reducer;


/*Get Pages Data */
export function pagesData(pageId) {
  return async function pagesDataThunk(dispatch, getState) {
    try {
      dispatch(setLoading(true))
      await service.pagesData(pageId).then(
        (response) => {
          if (response.data) {
            console.log(response);
            
            dispatch(setLoading(false))
            dispatch(setOnePageData(response.data))
          }
        }, (error) => {
          dispatch(setLoading(false))
        }
      );
    } catch (err) {

    }
  }
}
