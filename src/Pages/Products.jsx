import { MainProductCard } from "@/_components";
import { SlidersHorizontal } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Slider } from "antd";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "@/features/Categories/categorySlice";
import { fetchAllProducts } from "@/features/Products/productsSlice";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const { products, isLoading, isError } = useSelector(
    (state) => state.products
  );

  const [filters, setActiveFilters] = useState({
    categoryId: "",
    price: [0, 0],
    age: [0, 0],
  });

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchAllProducts());
  }, [dispatch]);

  useEffect(() => {
    const activeFilter = {
      ...(filters.categoryId && { categoryId: filters.categoryId }),
      ...(filters.price && {
        minPrice: filters.price[0],
        maxPrice: filters.price[1],
      }),
      ...(filters.age && { minAge: filters.age[0], maxAge: filters.age[1] }),
    };

    dispatch(fetchAllProducts(activeFilter));
  }, [dispatch, filters]);

  const handleCategory = (index, categoryId) => {
    if (activeCategory === index) {
      setActiveCategory(null);
    } else {
      setActiveCategory(index);
    }

    setActiveFilters((prev) => ({
      ...prev,
      categoryId: prev.categoryId === categoryId ? "" : categoryId,
    }));
  };

  return (
    <div className="main px-[4%]">
      <div className="container mx-auto">
        <div className="products py-10 w-full flex items-start gap-4 flex-col lg:flex-row">
          <Drawer className={`block lg:hidden`}>
            <DrawerTrigger className={`flex justify-end w-full lg:hidden`}>
              <div className="box lg:hidden flex items-center gap-2 border border-zinc-500 py-1 px-3 rounded-3xl font-[Nunito] self-end cursor-pointer">
                Filter
                <SlidersHorizontal className="w-5" />
              </div>
            </DrawerTrigger>
            {/* ============ for web ===================================== */}
            <div className="left hidden lg:flex w-2/8 border border-zinc-500 rounded-2xl py-4 p-2 flex-col items-start gap-4">
              <div className="details w-full flex items-center justify-between">
                <p className="font-bold font-[Nunito]">Filters</p>
                <SlidersHorizontal />
              </div>

              <div className="box flex flex-col gap-3">
                <p className="font-bold font-[Nunito]">Categories</p>
                <div className="categories flex items-center flex-wrap gap-2 w-full">
                  {categories.map((item, index) => (
                    <div
                      className={` ${
                        activeCategory === index
                          ? "bg-orange-200 text-amber-600 border border-amber-600"
                          : ""
                      } box border-zinc-400 border py-1 px-3 cursor-pointer rounded-3xl font-[Nunito] text-sm hover:bg-zinc-100`}
                      key={index}
                      onClick={() => handleCategory(index, item?._id)}
                    >
                      {item?.title}
                    </div>
                  ))}
                </div>
              </div>

              <div className="box flex flex-col gap-3 w-full">
                <p className="font-bold font-[Nunito]">Price Range</p>
                <Slider
                  range
                  defaultValue={[0, 1000]}
                  onChange={(value) => {
                    setActiveFilters((prev) => ({ ...prev, price: value }));
                  }}
                  min={0}
                  max={1000}
                  step={50}
                  className="custom-slider"
                />
                <div className="range w-full flex items-center justify-between mt-[-16px]">
                  <small className="font-semibold font-[Nunito]">0</small>
                  <small className="font-semibold font-[Nunito]">1000</small>
                </div>
              </div>

              <div className="box flex flex-col gap-3 w-full">
                <p className="font-bold font-[Nunito]">Age Range</p>
                <Slider
                  range
                  defaultValue={[0, 18]}
                  min={0}
                  max={18}
                  step={1}
                  onChange={(value) => {
                    setActiveFilters((prev) => ({ ...prev, age: value }));
                  }}
                  className="custom-slider"
                />
                <div className="range w-full flex items-center justify-between mt-[-16px]">
                  <small className="font-semibold font-[Nunito]">0</small>
                  <small className="font-semibold font-[Nunito]">18+</small>
                </div>
              </div>
            </div>

            {/* ================ For mobile and  tab ========================= */}
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>All Filters</DrawerTitle>
                <DrawerDescription className={`flex flex-col gap-3`}>
                  <div className="box flex flex-col gap-3 text-black">
                    <p className="font-bold font-[Nunito]">Categories</p>
                    <div className="categories flex items-center flex-wrap gap-2 w-full">
                      {categories.map((item, index) => (
                        <div
                          className={` ${
                            activeCategory === index
                              ? "bg-orange-200 text-amber-600 border border-amber-600"
                              : ""
                          } box border-zinc-400 border py-1 px-3 cursor-pointer rounded-3xl font-[Nunito] text-sm hover:bg-zinc-100`}
                          key={index}
                          onClick={() => handleCategory(index)}
                        >
                          {item?.title}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="box flex flex-col gap-3 w-full text-black">
                    <p className="font-bold font-[Nunito]">Price Range</p>
                    <Slider
                      range
                      defaultValue={[0, 1000]}
                      onChange={(value) => {
                        setActiveFilters((prev) => ({ ...prev, price: value }));
                      }}
                      min={0}
                      max={1000}
                      step={50}
                      className="custom-slider"
                    />
                    <div className="range w-full flex items-center justify-between mt-[-16px]">
                      <small className="font-semibold font-[Nunito]">100</small>
                      <small className="font-semibold font-[Nunito]">
                        500+
                      </small>
                    </div>
                  </div>

                  <div className="box flex flex-col gap-3 w-full text-black">
                    <p className="font-bold font-[Nunito]">Age Range</p>
                    <Slider
                      range
                      defaultValue={[0, 18]}
                      min={0}
                      max={18}
                      step={1}
                      onChange={(value) => {
                        setActiveFilters((prev) => ({ ...prev, age: value }));
                      }}
                      className="custom-slider"
                    />
                    <div className="range w-full flex items-center justify-between mt-[-16px]">
                      <small className="font-semibold font-[Nunito]">0</small>
                      <small className="font-semibold font-[Nunito]">18+</small>
                    </div>
                  </div>
                </DrawerDescription>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>

          <div className="right w-full lg:w-6/8 flex flex-col justify-center items-center gap-10">
            <div className="boxes w-full grid grid-cols-2 md:grid-cols-3 gap-4 gap-y-6">
              {!isLoading &&
                products?.result?.map((product, index) => (
                  <MainProductCard key={index} product={product} />
                ))}
              {isLoading &&
                [1, 2, 3, 4, 5].map((index) => (
                  <div className="flex flex-col space-y-3" key={index}>
                    <Skeleton className="lg:h-[200px] h-[120px] md:h-[170px] w-full rounded-xl" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 md:w-3/4 w-full" />
                    </div>
                  </div>
                ))}
            </div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
