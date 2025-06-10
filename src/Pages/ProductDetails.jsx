  import React, { useState, useEffect, useRef } from "react";
  import AudioPlayer from "react-h5-audio-player";
  import "react-h5-audio-player/lib/styles.css";
  import song from "../assets/song.mp3";
  import b3 from "../assets/images/b3.jpg";
  import { FaStar, FaPlay } from "react-icons/fa";
  import { TbCategoryFilled } from "react-icons/tb";
  import { IoLanguage } from "react-icons/io5";
  import { Button } from "@/components/ui/button";
  import { IoClose } from "react-icons/io5";
  import "./../scrollbar.css";
  import { useLocation, useNavigate, useParams } from "react-router-dom";
  import { getProductById } from "@/store/productSlice";
  import { useDispatch, useSelector } from "react-redux";
  import { assetUrl } from "@/shared/_services/api_service";
import { RHAP_UI } from "react-h5-audio-player";



  const ProductDetails = () => {
    const [active, setActive] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const productVar = useSelector(state => state.product)
    const orderVar = useSelector((state) => state.order);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const audioRef = useRef(null);
    const location = useLocation();
    const { id } = useParams();

    useEffect(() => {
      dispatch(getProductById(id))
    }, [dispatch])


    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     setActive(true);
    //     if (audioRef.current?.audio?.current) {
    //       audioRef.current.audio.current.pause();
    //     }
    //   }, 15000);

    //   return () => clearTimeout(timer);
    // }, []);


    useEffect(() => {
      if (!orderVar.subsHistory) {
        const timer = setTimeout(() => {
          setActive(true);
          if (audioRef.current?.audio?.current) {
            audioRef.current.audio.current.pause();
          }
        }, 15000); // 15 seconds
        return () => clearTimeout(timer);
      }
    }, [orderVar.subsHistory]);

    const handleModal = () => {
      setActive(false);
    };

    return (
      <div className="main px-[4%] relative">
        <div
          className={`modal fixed w-full h-full bg-[#0000007c] top-0 left-0 z-50 items-center justify-center ${active ? "flex" : "hidden"
            }`}
        >
          <div className="pop_box  h-fit w-[90%] lg:w-fit bg-white flex items-center py-10 md:py-12 relative px-4 md:px-8 justify-center flex-col gap-4 rounded-xl shadow-xl">
            <h2 className="font-black text-center font-[Nunito] text-xl md:text-2xl lg:text-4xl">
              Subscribe to Continue Listening
            </h2>
            <p className="lg:text-lg w-[90%] text-center text-md  text-zinc-400 mt-[-10px]">
              Unlock unlimited access to premium audio content
            </p>
            <Button onClick={() => navigate('/subscription')}
              className={`bg-amber-600 text-white  lg:mt-5 w-full cursor-pointer py-5 hover:bg-black hover:text-white`}
            >
              Subscribe Now
            </Button>
            <small className="text-zinc-400 cursor-pointer">Maybe Later</small>
            <div
              className="icon absolute top-4 right-4 cursor-pointer flex items-center justify-center"
              onClick={handleModal}
            >
              <IoClose className="w-6 h-6 text-zinc-400" />
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="details flex flex-col gap-8 justify-between pb-10">
            <div className="top flex items-start flex-col lg:flex-row  gap-6 py-5">
              {/* ============= Left ============================ */}
              <div className="left w-full lg:w-1/2 flex items-center justify-center lg:h-[70dvh]">
                <div className="content flex items-center justify-center flex-col gap-2 p-3 w-full lg:w-[80%]">
                  <p className="font-[Rubik] uppercase text-center">{productVar.singleProductData?.categoryId?.title}</p>
                  <h2 className="font-[Nunito] text-2xl lg:text-4xl uppercase font-semibold text-center">
                    {productVar.singleProductData.title}
                  </h2>
                  <p className="font-[Rubik] uppercase text-center">
                    by {productVar.singleProductData.author}
                  </p>
                  <small className="font-semibold font-[Rubik] text-center">
                    {productVar.singleProductData.createdAt}
                  </small>
                </div>
              </div>

              {/* ============ Right ========================= */}
              <div className="right w-full lg:w-1/2 flex items-center justify-center lg:h-[70dvh]">
                <img
                  src={assetUrl + productVar.singleProductData.image}
                  alt="image"
                  className="rounded-xl shadow-xl w-full lg:w-[70%] h-72 lg:h-96 object-cover"
                />
              </div>
            </div>

            <div className="bottom flex items-center justify-center flex-col gap-8 lg:gap-14">
              <div className="audio_box w-full lg:w-4/6">
                <AudioPlayer
                  ref={audioRef}
                  className="w-full bg-black shadow-none"
                  autoPlay
                  src={assetUrl + productVar.singleProductData.audioFile}
                  onPlay={() => console.log("onPlay")}

                  showSkipControls={orderVar.subsHistory}
                  showJumpControls={orderVar.subsHistory}

                  showFilledVolume
                  progressJumpSteps={{ backward: 10000, forward: 10000 }}
                  layout={`${window.innerWidth < 1024 ? "stacked" : "horizontal"}`}
                  customProgressBarSection={
                    orderVar.subsHistory
                      ? [RHAP_UI.PROGRESS_BAR]
                      : [] 
                  }
                  customAdditionalControls={
                    orderVar.subsHistory
                      ? [RHAP_UI.LOOP, RHAP_UI.VOLUME]
                      : [] 
                  }
                />
              </div>
              <div className="text_box w-full lg:w-4/6">
                <p
                  className="leading-7 text-lg md:text-xl font-medium first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2"
                  style={{ fontFamily: "Cormorant Garamond" }}
                >
                  {productVar.singleProductData.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ProductDetails;
