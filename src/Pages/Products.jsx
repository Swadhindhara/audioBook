import { MainProductCard } from "@/_components";
import { SlidersHorizontal, SquareMenu } from "lucide-react";
import React from "react";
import { Slider } from "antd";

const Products = () => {
    const categories = [
  { "name": "Fiction" },
  { "name": "Children's Audiobooks" },
  { "name": "Non-Fiction" },
  { "name": "Mystery & Thriller" },
  { "name": "Science Fiction" },
  { "name": "Fantasy" },
  { "name": "Health & Wellness" },
  { "name": "Biography & Memoir" },
  { "name": "Self-Help" },
  { "name": "Romance" },
  { "name": "History" },
  { "name": "Fantasy" },
  { "name": "Business & Finance" },
  { "name": "Religion & Spirituality" }
]

  return (
    <>
      <div className="main px-[4%]">
        <div className="container mx-auto">
          <div className="products py-10 w-full flex items-start gap-4">
            <div className="left w-2/8 border border-zinc-500 rounded-2xl py-4 p-2 flex flex-col items-start gap-4">
              <div className="details w-full flex items-center justify-between">
                <p className="font-bold font-[Nunito]">Filters</p>
                <SlidersHorizontal />
              </div>
              <div className="box flex flex-col gap-3">
                <p className="font-bold font-[Nunito]">Categories</p>
                <div className="categories flex items-center flex-wrap gap-3 w-full">
                    {
                        categories.map((item, index) => (
                            <div className="box 
                            border-zinc-400 border py-1 px-3 cursor-pointer rounded-3xl font-[Nunito] text-sm
                            " key={index}>{item?.name}</div>
                        ))
                    }
                </div>
              </div>
              <div className="box flex flex-col gap-3 w-full">
                <p className="font-bold font-[Nunito]">Price Range</p>
                <Slider 
                range 
                defaultValue={[0, 10]}
                step={10}
                className="custom-slider"
                />
                <div className="range w-full flex items-center justify-between mt-[-16px]">
                    <small className="font-semibold font=[Nunito]">100</small>
                    <small className="font-semibold font=[Nunito]">500+</small>
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
                    <small className="font-semibold font=[Nunito]">0</small>
                    <small className="font-semibold font=[Nunito]">18+</small>
                </div>
              </div>
            </div>
            <div className="right w-6/8 grid grid-cols-2 lg:grid-cols-3 gap-4">
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
    </>
  );
};

export default Products;
