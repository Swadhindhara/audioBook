import { createSlice } from '@reduxjs/toolkit'
import { service } from '../shared/_services/api_service'
import { setLoading } from './loader';

const initialState = {
  trendingProductData: [],
  featuredProductData: [],
  topRatingProductData: [],
  topSellerProductData: [],
  latestProductData: [],
  totalproduct: 0,

}

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setTrendingProductData(state, { payload }) {
      state.trendingProductData = payload.result
    },
   
    setFeaturedProductData(state, { payload }) {
      state.featuredProductData = payload.result
    },
    setTopRatingProductData(state, { payload }) {
      state.topRatingProductData = payload.result
    },
    setTopSellerProductData(state, { payload }) {
      state.topSellerProductData = payload.result
    },
    setLatestProductData(state, { payload }) {
      state.latestProductData = payload.result
    },
   
  }
})

export const { setTrendingProductData,setFeaturedProductData, setTopRatingProductData,setTopSellerProductData, setLatestProductData  } = productSlice.actions;

export default productSlice.reducer;

export function getTrendingproduct() {
  return async function getTrendingproductThunk(dispatch) {
    dispatch(setLoading(true))
    try {
      await service.getTrendingproduct().then(
        (response) => {
          dispatch(setLoading(false))
          dispatch(setTrendingProductData(response.data))
        }, (error) => {
          dispatch(setLoading(false))
        }
      );
    } catch (err) {

    }
  }
}
export function getFeaturedproduct() {
  return async function getFeaturedproductThunk(dispatch) {
    dispatch(setLoading(true))
    try {
      await service.getFeaturedproduct().then(
        (response) => {
          dispatch(setLoading(false))
          dispatch(setFeaturedProductData(response.data))
        }, (error) => {
          dispatch(setLoading(false))
        }
      );
    } catch (err) {

    }
  }
}
export function getTopRatingPoduct() {
  return async function getTopRatingPoductThunk(dispatch) {
    dispatch(setLoading(true))
    try {
      await service.getTopRatingPoduct().then(
        (response) => {
          dispatch(setLoading(false))
          dispatch(setTopRatingProductData(response.data))
        }, (error) => {
          dispatch(setLoading(false))
        }
      );
    } catch (err) {

    }
  }
}
export function getTopSellerproduct() {
  return async function getTopSellerproductThunk(dispatch) {
    dispatch(setLoading(true))
    try {
      await service.getTopSellerproduct().then(
        (response) => {
          dispatch(setLoading(false))
          dispatch(setTopSellerProductData(response.data))
        }, (error) => {
          dispatch(setLoading(false))
        }
      );
    } catch (err) {

    }
  }
}
export function getLatestproduct() {
  return async function getLatestproductThunk(dispatch) {
    dispatch(setLoading(true))
    try {
      await service.getLatestproduct().then(
        (response) => {
          dispatch(setLoading(false))
          dispatch(setLatestProductData(response.data))
        }, (error) => {
          dispatch(setLoading(false))
        }
      );
    } catch (err) {

    }
  }
}