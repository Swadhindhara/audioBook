import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { CategoryBox, ProductCard } from "@/_components";
import b5 from "../assets/images/b5.jpg";
import b6 from "../assets/images/b6.jpg";
import b3 from "../assets/images/b3.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getbanner } from "@/store/bannerSlice";
import { assetUrl } from "@/shared/_services/api_service";
import {
  getFeaturedproduct,
  getLatestproduct,
  getTopRatingPoduct,
  getTopSellerproduct,
  getTrendingproduct,
} from "@/store/productSlice";

const Home = () => {
  const [step, setStep] = useState(1);
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const tabs = [
    {
      name: "top rating",
    },
    {
      name: "top seller",
    },
    {
      name: "latest product",
    },
  ];
  const bannerVar = useSelector((state) => state.banner);
  const productVar = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getbanner());
    dispatch(getTrendingproduct());
    dispatch(getFeaturedproduct());
    dispatch(getTopRatingPoduct());
    dispatch(getTopSellerproduct());
    dispatch(getLatestproduct());
  }, []);

  return (
    <>
      {/* ===================== Section 1 =========================== */}
      <section className="home_section1_container lg:mt-[-80px] ">
        <div className="home_section1">
          <Swiper
            spaceBetween={0}
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
            className="mySwiper h-[40dvh] lg:h-screen"
          >
            {bannerVar.bannerData.map((item, index) => {
              const cleanedPath = item.image.replace(/\\/g, "/");
              const imageUrl = `${assetUrl}${cleanedPath}`;

              return (
                <SwiperSlide
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                  }}
                >
                  <div className="flex items-center justify-center flex-col h-full gap-4 lg:gap-5 bg-linear-to-t from-black bg-transparent px-[3%]">
                    <p className="text-white text-lg lg:text-2xl uppercase font-[Rubik]">
                      {item.title}
                    </p>
                    <h2 className="lg:text-5xl text-2xl text-white lg:w-2/3 text-center font-[Nunito] font-bold leading-8 lg:leading-14">
                      {item.description}{" "}
                    </h2>
                    <Button onClick={() => navigate("/products")}
                      className={`font-[Nunito] bg-white text-black hover:bg-amber-600 hover:text-white cursor-pointer`}
                    >
                      Shop Now
                    </Button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      {/* ================ Section 2 =============================== */}
      <section className="px-[4%]">
        <div className="container mx-auto">
          <div className="home_section py-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {productVar.trendingProductData &&
              productVar.trendingProductData.map((item, index) => (
                <ProductCard item={item} key={index} />
              ))}
          </div>
        </div>
      </section>

      {/* ================= Section 3 ============================== */}
      <section className="bg-zinc-200 px-[4%]">
        <div className="container mx-auto">
          <div className="home_section3 py-10 flex items-center justify-center gap-5 lg:gap-8 flex-col">
            <p className="px-4 py-2 rounded-2xl text-white bg-amber-600 w-fit">
              Books They&apos;ll Treasure
            </p>
            <h2 className="lg:text-6xl text-2xl lg:w-[60%] text-center font-[Rubik] leading-10 lg:leading-18 ">
              Handpicked Stories for Every Little Reader
            </h2>
            <div className="boxes grid gap-4 md:gap-5 lg:gap-6 grid-cols-2 lg:grid-cols-3 w-full">
              {productVar.featuredProductData &&
                productVar.featuredProductData.map((item, index) => (
                  <ProductCard item={item} key={index} />
                ))}
            </div>
            <Link
              to={"/products"}
              className={`bg-black text-white hover:bg-amber-600 hover:text-white cursor-pointer rounded-3xl py-2 px-6`}
            >
              Browse All Collection
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== Section 5 ============================ */}
      <section className="relative h-[50dvh] lg:h-[70dvh] bg-fixed bg-center bg-cover bg-[url(./assets/images/b1.jpg)] px-[4%]">
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center flex-col gap-6">
          <h1 className="text-white lg:text-5xl text-3xl font-bold font-[Nunito] px-[4%] text-center leading-10">
            Discover The Best Audio Book For Kids
          </h1>
          <Button
            className={`bg-white text-black hover:text-white hover:bg-amber-600 cursor-pointer font-semibold font-[Nunito]`}
          >
            Explore More
          </Button>
        </div>
      </section>

      {/* ================= Section 4 ============================= */}
      <section className="px-[4%]">
        <div className="container mx-auto  section">
          <div className="home_section4 py-10 flex items-start lg:items-center justify-center flex-col gap-10 ">
            <div className="tabs tabs_scroll flex items-center md:justify-center gap-10 py-4 w-full overflow-auto">
              {tabs.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setStep(index + 1);
                    setActive(index);
                  }}
                  className={`${
                    active === index ? "border-b-amber-600" : "border-b-white"
                  } tab cursor-pointer whitespace-nowrap text-lg md:text-xl lg:text-2xl font-[Nunito] font-bold uppercase border-b-[3px]`}
                >
                  {item.name}
                </div>
              ))}
            </div>
            {step === 1 && (
              <div className="boxes grid gap-4 md:gap-5 lg:gap-6 grid-cols-2 lg:grid-cols-3 w-full">
                {productVar.topRatingProductData &&
                  productVar.topRatingProductData.map((item, index) => (
                    <ProductCard item={item} key={index} />
                  ))}
              </div>
            )}
            {step === 2 && (
              <div className="boxes grid gap-4 md:gap-5 lg:gap-6 grid-cols-2 lg:grid-cols-3 w-full">
                {productVar.topSellerProductData &&
                  productVar.topSellerProductData
                    .slice(0, 5)
                    .map((item, index) => (
                      <ProductCard item={item} key={index} />
                    ))}
              </div>
            )}
            {step === 3 && (
              <div className="boxes grid gap-4 md:gap-5 lg:gap-6 grid-cols-2 lg:grid-cols-3 w-full">
                {productVar.latestProductData &&
                  productVar.latestProductData
                    .slice(0, 4)
                    .map((item, index) => (
                      <ProductCard item={item} key={index} />
                    ))}
              </div>
            )}
            <Button onClick={()=> navigate('/products')}
              className={`bg-amber-600 text-white hover:bg-black hover:text-white cursor-pointer py-4 px-8 self-center`}
            >
              All Products
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
