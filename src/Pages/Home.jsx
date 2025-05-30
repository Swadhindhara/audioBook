import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { CategoryBox, ProductCard } from "@/_components";
import b5 from '../assets/images/b5.jpg'
import b6 from '../assets/images/b6.jpg'
import b3 from '../assets/images/b3.jpg'

const Home = () => {
  return (
    <>
    {/* ===================== Section 1 =========================== */}
      <section className="home_section1_container lg:mt-[-80px] ">
        <div className="home_section1">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            speed={1200}
            loop={true}
            autoplay={{
              delay: 3500,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            pagination={false}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper h-screen"
          >
            <SwiperSlide className="bg-[url(./assets/images/b1.jpg)] h-screen bg-no-repeat bg-cover bg-center w-full">
              <div className="flex items-center justify-center flex-col h-full gap-5 bg-linear-to-t from-black bg-transparent">
                <p className="text-white text-2xl uppercase font-[Rubik]">
                  Lorem, ipsum.
                </p>
                <h2 className="text-5xl text-white w-2/3 text-center font-[Nunito] font-bold leading-14">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                </h2>
                <Button
                  className={`font-[Nunito] bg-white text-black hover:bg-amber-600 hover:text-white cursor-pointer`}
                >
                  Shop Now
                </Button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[url(./assets/images/b1.jpg)] h-screen bg-no-repeat bg-cover bg-center w-full">
              <div className="flex items-center justify-center flex-col h-full gap-5 bg-linear-to-t from-black bg-transparent">
                <p className="text-white text-2xl uppercase font-[Rubik]">
                  Lorem, ipsum.
                </p>
                <h2 className="text-5xl text-white w-2/3 text-center font-[Nunito] font-bold leading-14">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                </h2>
                <Button
                  className={`font-[Nunito] bg-white text-black hover:bg-amber-600 hover:text-white cursor-pointer`}
                >
                  Shop Now
                </Button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[url(./assets/images/b1.jpg)] h-screen bg-no-repeat bg-cover bg-center w-full">
              <div className="flex items-center justify-center flex-col h-full gap-5 bg-linear-to-t from-black bg-transparent">
                <p className="text-white text-2xl uppercase font-[Rubik]">
                  Lorem, ipsum.
                </p>
                <h2 className="text-5xl text-white w-2/3 text-center font-[Nunito] font-bold leading-14">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                </h2>
                <Button
                  className={`font-[Nunito] bg-white text-black hover:bg-amber-600 hover:text-white cursor-pointer`}
                >
                  Shop Now
                </Button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[url(./assets/images/b1.jpg)] h-screen bg-no-repeat bg-cover bg-center w-full">
              <div className="flex items-center justify-center flex-col h-full gap-5 bg-linear-to-t from-black bg-transparent">
                <p className="text-white text-2xl uppercase font-[Rubik]">
                  Lorem, ipsum.
                </p>
                <h2 className="text-5xl text-white w-2/3 text-center font-[Nunito] font-bold leading-14">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                </h2>
                <Button
                  className={`font-[Nunito] bg-white text-black hover:bg-amber-600 hover:text-white cursor-pointer`}
                >
                  Shop Now
                </Button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* ================ Section 2 =============================== */}
      <section className="px-[4%]">
        <div className="container mx-auto">
          <div className="home_section py-10 flex items-center justify-center gap-6">
            <CategoryBox props={b3}/>
            <CategoryBox props={b5}/>
            <CategoryBox props={b6}/>
          </div>
        </div>
      </section>

      {/* ================= Section 3 ============================== */}
      <section className="bg-zinc-200 px-[4%]">
        <div className="container mx-auto">
          <div className="home_section3 py-10 flex items-center justify-center gap-8 flex-col">
            <p className="px-4 py-2 rounded-2xl text-white bg-amber-600 w-fit">
              Books They&apos;ll Treasure
            </p>
            <h2 className="text-6xl w-[60%] text-center font-[Rubik] leading-18 ">
              Handpicked Stories for Every Little Reader
            </h2>
            <div className="boxes w-full flex items-center justify-center gap-6">
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
            <Button
              className={`bg-black text-white hover:bg-amber-600 hover:text-white cursor-pointer rounded-3xl py-5 px-6`}
            >
              Browse All Collection
            </Button>
          </div>
        </div>
      </section>

      {/* ==================== Section 5 ============================ */}
      <section
        className="relative h-[70dvh] bg-fixed bg-center bg-cover bg-[url(./assets/images/b1.jpg)] px-[4%]"
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center flex-col gap-6">
          <h1 className="text-white text-5xl font-bold font-[Nunito]">Discover The Best Audio Book For Kids</h1>
          <Button className={`bg-white text-black hover:text-white hover:bg-amber-600 cursor-pointer font-semibold font-[Nunito]`}>Explore More</Button>
        </div>
      </section>

      {/* ================= Section 4 ============================= */}
      <section className="px-[4%]">
        <div className="container mx-auto">
          <div className="home_section4 py-10 flex items-center justify-center flex-col gap-10">
            <div className="tabs flex items-center justify-center gap-10">
              <div className="tab text-2xl font-[Nunito] font-bold uppercase border-b-[3px] border-b-amber-600">
                Top rating
              </div>
              <div className="tab text-2xl font-[Nunito] font-bold uppercase">
                Top sellers
              </div>
              <div className="tab text-2xl font-[Nunito] font-bold uppercase">
                latest products
              </div>
            </div>
            <div className="boxes flex items-center justify-center gap-6 flex-wrap">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
            <Button className={`bg-amber-600 text-white hover:bg-black hover:text-white cursor-pointer py-4 px-8`}>All Products</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
