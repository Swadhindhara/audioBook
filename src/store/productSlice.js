import { createSlice } from '@reduxjs/toolkit'
import { service } from '../shared/_services/api_service'
import { setLoading } from './loader';

const initialState = {
  trendingProductData: [],
  featuredProductData: [],
  topRatingProductData: [],
  topSellerProductData: [],
  latestProductData: [],
  allProductData: [],
  totalproduct: 0,
  singleProductData: {}

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
    getAlltProductData(state, { payload }) {
      state.allProductData = payload.result
    },
    getSingletProductData(state, { payload }) {
      state.singleProductData = payload.result
    },

  }
})

export const { setTrendingProductData, setFeaturedProductData, setTopRatingProductData, setTopSellerProductData, setLatestProductData, getAlltProductData, getSingletProductData } = productSlice.actions;

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
export function getAllproduct(limit, offset,  catrgoryId,  minPrice,  maxPrice,  minAge,  maxAge) {
  return async function getAllproductThunk(dispatch) {
    dispatch(setLoading(true))
    try {
      await service.getAllproduct(limit, offset,  catrgoryId,  minPrice,  maxPrice,  minAge,  maxAge).then(
        (response) => {
          dispatch(setLoading(false))
          dispatch(getAlltProductData(response.data))
        }, (error) => {
          dispatch(setLoading(false))
        }
      );
    } catch (err) {

    }
  }
}


export function getProductById(id) {
  return async function getProductByIdThunk(dispatch) {
    dispatch(setLoading(true))
    try {
      await service.getProductById(id).then(
        (response) => {
          dispatch(setLoading(false))
          dispatch(getSingletProductData(response.data))
        }, (error) => {
          dispatch(setLoading(false))
        }
      );
    } catch (err) {

    }
  }
}