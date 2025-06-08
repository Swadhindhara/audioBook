import { createSlice } from '@reduxjs/toolkit'
import { service } from '../shared/_services/api_service'
import { setLoading } from './loader';
import { errorHandler, successHandler } from '../shared/_helper/responseHelper';

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
      state.categoryData = payload
    },
    updateCategoryData(state, { payload }) {
      const objIndex = state.categoryData.findIndex((obj) => obj.id === payload.id);
      if (objIndex >= 0) {
        state.categoryData[objIndex] = payload
      }
    },
    pushCategoryData(state, { payload }) {
      state.categoryData.push(payload)
    },
    sliceCategoryData(state, { payload }) {
      const objIndex = state.categoryData.findIndex((obj) => obj._id === payload);
      if (objIndex >= 0) {
        state.categoryData.splice(objIndex, 1)
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

export const { setCategoryData, updateCategoryData, pushCategoryData, sliceCategoryData, isOpenModal, ModalToggle } = categorySlice.actions;

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
          errorHandler(error.response)
        }
      );
    } catch (err) {

    }
  }
}

export function addCategory(payload) {
  return async function addCategoryThunk(dispatch) {
    dispatch(setLoading(true))
    try {
      await service.addCategory(payload).then(
        (response) => {
          dispatch(ModalToggle())
          dispatch(setLoading(false))
          dispatch(pushCategoryData(response.data))
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
export function updateCategory(id, name) {
  return async function updateCategoryThunk(dispatch) {
    dispatch(setLoading(true))
    try {
      await service.updateCategory(id, name).then(
        (response) => {
          dispatch(ModalToggle())
          dispatch(setLoading(false))
          dispatch(updateCategoryData(response.data))
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

export function deleteCategory(id) {
  return async function deleteCategoryThunk(dispatch) {
    try {
      dispatch(setLoading(true))
      await service.deleteCategory(id).then(
        (response) => {
          dispatch(sliceCategoryData(id))
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

