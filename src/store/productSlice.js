import { createSlice } from '@reduxjs/toolkit'
import { service } from '../shared/_services/api_service'
import { setLoading } from './loader';
import { errorHandler, successHandler } from '../shared/_helper/responseHelper';

const initialState = {
  productData: [],
  totalproduct: 0,
  isOpenModal: false,
  isStatusOpenModal: false,
}

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setproductData(state, { payload }) {
      state.productData = payload.result
      state.totalproduct = payload.total
    },
    updateproductData(state, { payload }) {
      const objIndex = state.productData.findIndex((obj) => obj.id === payload.id);
      if (objIndex >= 0) {
        state.productData[objIndex] = payload
      }
    },
    updateproductsStatusData(state, { payload }) {
      const objIndex = state.productData.findIndex((obj) => obj._id === payload.id);
      if (objIndex >= 0) {
        state.productData[objIndex].status = payload.status
      }
    },
    pushproductData(state, { payload }) {
      state.productData.push(payload)
    },
    sliceproductData(state, { payload }) {
      const objIndex = state.productData.findIndex((obj) => obj._id === payload);
      if (objIndex >= 0) {
        state.productData.splice(objIndex, 1)
      }
    },

    isOpenModal(state, { payload }) {
      state.isOpenModal = payload
    },
    ModalToggle(state, { payload }) {
      state.isOpenModal = !state.isOpenModal
    },
    isOpenStatusModal(state, { payload }) {
      state.isStatusOpenModal = payload
    },
    statusToggle(state, { payload }) {
      state.isStatusOpenModal = !state.isStatusOpenModal
    }
  }
})

export const { setproductData, updateproductData, pushproductData, sliceproductData, ModalToggle, isOpenModal, isOpenStatusModal, statusToggle, updateproductsStatusData } = productSlice.actions;

export default productSlice.reducer;

export function getproduct(limit, offset, status, keyword) {
  return async function getproductThunk(dispatch) {
    dispatch(setLoading(true))
    try {
      await service.getproduct(limit, offset, status, keyword).then(
        (response) => {
          dispatch(setLoading(false))
          dispatch(setproductData(response.data))
        }, (error) => {
          dispatch(setLoading(false))
          errorHandler(error.response)
        }
      );
    } catch (err) {

    }
  }
}
export function addproduct(payload) {
  return async function addproductThunk(dispatch) {
    dispatch(setLoading(true))
    try {
      await service.addproducts(payload).then(
        (response) => {
          dispatch(ModalToggle())
          dispatch(setLoading(false))
          dispatch(pushproductData(response.data))
          successHandler('Added Successfully')
        }, (error) => {
          dispatch(setLoading(false))
          errorHandler(error.response)
        }
      );
    } catch (err) {

    }
  }
}
export function updateproduct(id, name) {
  return async function updateproductThunk(dispatch) {
    dispatch(setLoading(true))
    try {
      await service.updateproduct(id, name).then(
        (response) => {
          dispatch(ModalToggle())
          dispatch(setLoading(false))
          dispatch(updateproductData(response.data))
          successHandler('Updated Successfully')
        }, (error) => {
          dispatch(setLoading(false))
          errorHandler(error.response)
        }
      );
    } catch (err) {

    }
  }
}

export function deleteproduct(id) {
  return async function deleteproductThunk(dispatch) {
    try {
      dispatch(setLoading(true))
      await service.deleteproduct(id).then(
        (response) => {
          dispatch(sliceproductData(id))
          dispatch(setLoading(false))
          successHandler('Updated Successfully')
        }, (error) => {
          dispatch(setLoading(false))
          errorHandler(error.response)
        }
      );
    } catch (err) {

    }
  }
}

export function statusUpdateproducts(payload) {
  return async function statusUpdateproductsThunk(dispatch) {
    try {
      dispatch(setLoading(true))
      await service.UpdateStatusProducts(payload).then(
        (response) => {
          dispatch(statusToggle())
          dispatch(updateproductsStatusData(payload))
          dispatch(setLoading(false))
          successHandler('Updated Successfully')
        }, (error) => {
          dispatch(setLoading(false))
          errorHandler(error.response)
        }
      );
    } catch (err) {

    }
  }
}