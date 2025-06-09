import { pagesData } from "@/store/pagesSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Terms = () => {
  const dispatch = useDispatch();
  const pageData = useSelector((state) => state.page);

  useEffect(() => {
    dispatch(pagesData(2));
  }, [dispatch]);
  return (
    <div className="main py-10 px-[4%] min-h-screen">
      <div className="container mx-auto">
        <div dangerouslySetInnerHTML={{ __html: pageData.pageDesc }} />
      </div>
    </div>
  );
};

export default Terms;
