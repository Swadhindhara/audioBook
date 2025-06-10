import { createSlice } from '@reduxjs/toolkit'
import { service } from '../shared/_services/api_service'
import { setLoading } from './loader';

const initialState = {
  orderData: [],
  orderHistory: '',
  subsHistory:''
}

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setorderData(state, { payload }) {
      state.orderData = payload
    },
    setorderHistoeyData(state, { payload }) {
      state.orderHistory = payload
    },
    setSubsHistoeyData(state, { payload }) {
      state.subsHistory = payload
    },
  }
})

export const { setorderData, setorderHistoeyData, setSubsHistoeyData } = orderSlice.actions;

export default orderSlice.reducer;

export function generateOrder(price,subscriptionId) {
  return async function generateOrderThunk(dispatch) {
    dispatch(setLoading(true))
    try {
      await service.generateOrder(price, subscriptionId).then(
        (response) => {          
          dispatch(setLoading(false))
          dispatch(setorderData(response.data))
        }, (error) => {
          dispatch(setLoading(false))
          errorHandler(error.response)
        }
      );
    } catch (err) {

    }
  }
}
export function confirmOrder(transactionId, amount, currency, clientSecret) {
  return async function confirmOrderThunk(dispatch) {
    dispatch(setLoading(true))
    try {
      await service.confirmOrder(transactionId, amount, currency, clientSecret).then(
        (response) => {          
          dispatch(setLoading(false))
          dispatch(setorderData(response.data))
        }, (error) => {
          dispatch(setLoading(false))
          errorHandler(error.response)
        }
      );
    } catch (err) {

    }
  }
}
export function myOrders() {
  return async function myOrdersThunk(dispatch) {
    dispatch(setLoading(true))
    try {
      await service.myOrders().then(
        (response) => {          
          dispatch(setLoading(false))
          dispatch(setorderHistoeyData(response.data))
        }, (error) => {
          dispatch(setLoading(false))
          errorHandler(error.response)
        }
      );
    } catch (err) {

    }
  }
}
export function myActiveSubs() {
  return async function myActiveSubsThunk(dispatch) {
    dispatch(setLoading(true))
    try {
      await service.myActiveSubs().then(
        (response) => {          
          dispatch(setLoading(false))
          dispatch(setSubsHistoeyData(response.data))
        }, (error) => {
          dispatch(setLoading(false))
          errorHandler(error.response)
        }
      );
    } catch (err) {

    }
  }
}
