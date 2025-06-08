import { pagesData } from "@/store/pagesSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Privacy = () => {
  const dispatch = useDispatch();
  const pageData = useSelector((state) => state.page);
  console.log(pageData);

  useEffect(() => {
    dispatch(pagesData(1));
  }, [dispatch]);
  return (
    <div className="main py-10 px-[4%] min-h-screen">
      <div className="container mx-auto">
        <div dangerouslySetInnerHTML={{ __html: pageData.pageDesc }} />
      </div>
    </div>
  );
};

export default Privacy;
