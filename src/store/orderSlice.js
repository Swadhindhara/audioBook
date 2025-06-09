import { createSlice } from '@reduxjs/toolkit'
import { service } from '../shared/_services/api_service'
import { setLoading } from './loader';

const initialState = {
  orderData: [],
  orderHistory: ''
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
  }
})

export const { setorderData, setorderHistoeyData } = orderSlice.actions;

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
