import { MainProductCard } from "@/_components";
import { SlidersHorizontal } from "lucide-react";
import React from "react";
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
import { Button } from "@/components/ui/button";

const Products = () => {
  const categories = [
    { name: "Fiction" },
    { name: "Children's Audiobooks" },
    { name: "Non-Fiction" },
    { name: "Mystery & Thriller" },
    { name: "Science Fiction" },
    { name: "Fantasy" },
    { name: "Health & Wellness" },
    { name: "Biography & Memoir" },
    { name: "Self-Help" },
    { name: "Romance" },
    { name: "History" },
    { name: "Business & Finance" },
    { name: "Religion & Spirituality" },
  ];

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
                      className={`box border-zinc-400 border py-1 px-3 cursor-pointer rounded-3xl font-[Nunito] text-sm hover:bg-zinc-100`}
                      key={index}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="box flex flex-col gap-3 w-full">
                <p className="font-bold font-[Nunito]">Price Range</p>
                <Slider
                  range
                  defaultValue={[100, 500]}
                  min={100}
                  max={1000}
                  step={50}
                  className="custom-slider"
                />
                <div className="range w-full flex items-center justify-between mt-[-16px]">
                  <small className="font-semibold font-[Nunito]">100</small>
                  <small className="font-semibold font-[Nunito]">500+</small>
                </div>
              </div>

              <div className="box flex flex-col gap-3 w-full">
                <p className="font-bold font-[Nunito]">Age Range</p>
                <Slider
                  range
                  defaultValue={[5, 15]}
                  max={18}
                  step={1}
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
                          className="box border-zinc-400 border py-1 px-3 cursor-pointer rounded-3xl font-[Nunito] text-black text-[13px] md:text-sm"
                          key={index}
                        >
                          {item.name}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="box flex flex-col gap-3 w-full text-black">
                    <p className="font-bold font-[Nunito]">Price Range</p>
                    <Slider
                      range
                      defaultValue={[100, 500]}
                      min={100}
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
                      defaultValue={[5, 15]}
                      max={18}
                      step={1}
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

          <div className="right w-full lg:w-6/8 grid grid-cols-2 md:grid-cols-3 gap-4">
            <MainProductCard />
            <MainProductCard />
            <MainProductCard />
            <MainProductCard />
            <MainProductCard />
            <MainProductCard />
            <MainProductCard />
            <MainProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
