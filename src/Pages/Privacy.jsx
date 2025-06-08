import { pagesData } from '@/store/pagesSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Privacy = () => {
  const dispatch = useDispatch();
  const pageData = useSelector(state => state.page)
  console.log(pageData);
  

  useEffect(() => {
    dispatch(pagesData(1))
  }, [dispatch])
  return (
<div dangerouslySetInnerHTML={{ __html: pageData.pageDesc }} />
  )
}

export default Privacy