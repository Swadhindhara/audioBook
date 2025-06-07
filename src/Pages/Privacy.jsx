import { fetchPageData } from '@/features/Pages/PageSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Privacy = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.page)

  useEffect(() => {
    dispatch(fetchPageData(1))
  }, [dispatch])
  return (
    <div>privacy</div>
  )
}

export default Privacy