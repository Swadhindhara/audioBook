// import React, { useState, useEffect, useRef } from "react";
// import AudioPlayer from "react-h5-audio-player";
// import "react-h5-audio-player/lib/styles.css";
// import { FaStar, FaPlay } from "react-icons/fa";
// import { IoClose } from "react-icons/io5";
// import moment from "moment/moment";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getProductById } from "@/store/productSlice";
// import { assetUrl } from "@/shared/_services/api_service";
// import { RHAP_UI } from "react-h5-audio-player";
// import { Button } from "@/components/ui/button";
// import "./../scrollbar.css";

// const ProductDetails = () => {
//   const [active, setActive] = useState(false);
//   const [subtitles, setSubtitles] = useState([]);
//   const [subtitlesText, setSubtitlesText] = useState("");
//   const [currentSubtitle, setCurrentSubtitle] = useState("");

//   const productVar = useSelector((state) => state.product);
//   const orderVar = useSelector((state) => state.order);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const audioRef = useRef(null);

//   useEffect(() => {
//     dispatch(getProductById(id));
//   }, [dispatch, id]);

//   useEffect(() => {
//     if (!orderVar.subsHistory) {
//       const timer = setTimeout(() => {
//         setActive(true);
//         if (audioRef.current?.audio?.current) {
//           audioRef.current.audio.current.pause();
//         }
//       }, 15000);
//       return () => clearTimeout(timer);
//     }
//   }, [orderVar.subsHistory]);

//   useEffect(() => {
//     const fetchSubtitles = async () => {
//       const rawPath = assetUrl + productVar.singleProductData?.subtitlesFile;
//       if (!rawPath) return;

//       try {
//         const fixedUrl = rawPath.replace(/\\/g, "/");
//         const response = await fetch(fixedUrl);
//         const data = await response.json();
//         setSubtitles(data.segments || []);
//         setSubtitlesText(data.text || "");
//       } catch (err) {
//         console.error("Failed to fetch subtitles:", err);
//       }
//     };

//     fetchSubtitles();
//   }, [productVar.singleProductData?.subtitlesFile]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!audioRef.current?.audio?.current || !subtitles.length) return;

//       const currentTime = audioRef.current.audio.current.currentTime;

//       const activeSegment = subtitles.find(
//         (seg) => currentTime >= seg.start && currentTime <= seg.end
//       );

//       if (activeSegment && subtitlesText) {
//         const segmentStart = activeSegment.start;
//         const segmentEnd = activeSegment.end;
//         const segmentText = activeSegment.text.trim();
//         const words = segmentText.split(" ");
//         const wordDuration = (segmentEnd - segmentStart) / words.length;
//         const wordIndex = Math.floor((currentTime - segmentStart) / wordDuration);

//         const highlightedSegment = words
//           .map((word, index) =>
//             index === wordIndex
//               ? `<span style="background-color: yellow">${word}</span>`
//               : word
//           )
//           .join(" ");

//         const regex = new RegExp(
//           segmentText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
//         );
//         const highlightedText = subtitlesText.replace(regex, highlightedSegment);
//         setCurrentSubtitle(highlightedText);
//       } else {
//         setCurrentSubtitle(subtitlesText);
//       }
//     }, 200);

//     return () => clearInterval(interval);
//   }, [subtitles, subtitlesText]);

//   const handleModal = () => {
//     setActive(false);
//   };

//   return (
//     <div className="main px-[4%] relative">
//       {/* Subscription Modal */}
//       <div
//         className={`modal fixed w-full h-full bg-[#0000007c] top-0 left-0 z-50 items-center justify-center ${
//           active ? "flex" : "hidden"
//         }`}
//       >
//         <div className="pop_box h-fit w-[90%] lg:w-fit bg-white flex items-center py-10 md:py-12 relative px-4 md:px-8 justify-center flex-col gap-4 rounded-xl shadow-xl">
//           <h2 className="font-black text-center font-[Nunito] text-xl md:text-2xl lg:text-4xl">
//             Subscribe to Continue Listening
//           </h2>
//           <p className="lg:text-lg w-[90%] text-center text-md text-zinc-400 mt-[-10px]">
//             Unlock unlimited access to premium audio content
//           </p>
//           <Button
//             onClick={() => navigate("/subscription")}
//             className={`bg-amber-600 text-white lg:mt-5 w-full cursor-pointer py-5 hover:bg-black hover:text-white`}
//           >
//             Subscribe Now
//           </Button>
//           <small className="text-zinc-400 cursor-pointer">Maybe Later</small>
//           <div
//             className="icon absolute top-4 right-4 cursor-pointer flex items-center justify-center"
//             onClick={handleModal}
//           >
//             <IoClose className="w-6 h-6 text-zinc-400" />
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto">
//         <div className="details flex flex-col gap-8 justify-between pb-10">
//           {/* Top Section */}
//           <div className="top flex items-start flex-col lg:flex-row gap-6 py-5">
//             <div className="left w-full lg:w-1/2 flex items-center justify-center lg:h-[70dvh]">
//               <div className="content flex items-center justify-center flex-col gap-2 p-3 w-full lg:w-[80%]">
//                 <p className="font-[Rubik] uppercase text-center">
//                   {productVar.singleProductData?.categoryId?.title}
//                 </p>
//                 <h2 className="font-[Nunito] text-2xl lg:text-4xl uppercase font-semibold text-center">
//                   {productVar.singleProductData?.title}
//                 </h2>
//                 <p className="font-[Rubik] uppercase text-center">
//                   by {productVar.singleProductData?.author}
//                 </p>
//                 <small className="font-semibold font-[Rubik] text-center">
//                   {moment(productVar.singleProductData?.createdAt).format("DD/MM/YYYY")}
//                 </small>
//               </div>
//             </div>

//             <div className="right w-full lg:w-1/2 flex items-center justify-center lg:h-[70dvh]">
//               <img
//                 src={assetUrl + productVar.singleProductData?.image}
//                 alt="image"
//                 className="rounded-xl shadow-xl w-full lg:w-[70%] h-72 lg:h-96 object-cover"
//               />
//             </div>
//           </div>

//           {/* Audio + Subtitle Section */}
//           <div className="bottom flex items-center justify-center flex-col gap-8 lg:gap-14">
//             <div className="audio_box w-full lg:w-4/6">
//               <AudioPlayer
//                 ref={audioRef}
//                 className="w-full bg-black shadow-none"
//                 autoPlay
//                 src={assetUrl + productVar.singleProductData?.audioFile}
//                 onPlay={() => console.log("onPlay")}
//                 showSkipControls={orderVar.subsHistory}
//                 showJumpControls={orderVar.subsHistory}
//                 showFilledVolume
//                 progressJumpSteps={{ backward: 10000, forward: 10000 }}
//                 layout={`${window.innerWidth < 1024 ? "stacked" : "horizontal"}`}
//                 customProgressBarSection={
//                   orderVar.subsHistory ? [RHAP_UI.PROGRESS_BAR] : []
//                 }
//                 customAdditionalControls={
//                   orderVar.subsHistory ? [RHAP_UI.LOOP, RHAP_UI.VOLUME] : []
//                 }
//               />
//             </div>

//             <div className="text_box w-full lg:w-4/6">
//               <p
//                 className="leading-7 text-lg md:text-xl font-medium"
//                 style={{ fontFamily: "Cormorant Garamond" }}
//                 dangerouslySetInnerHTML={{ __html: currentSubtitle }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;


import React, { useState, useEffect, useRef } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { IoClose } from "react-icons/io5";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "@/store/productSlice";
import { assetUrl } from "@/shared/_services/api_service";
import { Button } from "@/components/ui/button";
import DOMPurify from "dompurify";
import "./../scrollbar.css";

const ProductDetails = () => {
  const [active, setActive] = useState(false);
  const [subtitles, setSubtitles] = useState([]);
  const [subtitlesText, setSubtitlesText] = useState("");
  const [currentSubtitle, setCurrentSubtitle] = useState("");

  const productVar = useSelector((state) => state.product);
  const orderVar = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const audioRef = useRef(null);

  // ✅ Fetch product by ID
  useEffect(() => {
    dispatch(getProductById(id));
    // Stop previous audio immediately
    if (audioRef.current?.audio?.current) {
      audioRef.current.audio.current.pause();
      audioRef.current.audio.current.src = "";
    }
    setCurrentSubtitle("");
    setSubtitles([]);
    setSubtitlesText("");
  }, [dispatch, id]);

  // ✅ Subscription modal after 15s for non-subscribers
  useEffect(() => {
    if (orderVar.subsHistory === false) {
      const timer = setTimeout(() => {
        setActive(true);
        if (audioRef.current?.audio?.current) {
          audioRef.current.audio.current.pause();
        }
      }, 15000);
      return () => clearTimeout(timer);
    }
  }, [orderVar.subsHistory]);

  // ✅ Fetch subtitles safely
  useEffect(() => {
    const fetchSubtitles = async () => {
      const subtitlesFile = productVar.singleProductData?.subtitlesFile;
      if (!subtitlesFile) return;

      try {
        const fixedUrl = (assetUrl + subtitlesFile).replace(/\\/g, "/");
        const response = await fetch(fixedUrl);
        const data = await response.json();
        setSubtitles(data.segments || []);
        setSubtitlesText(data.text || "");
      } catch (err) {
        console.error("Failed to fetch subtitles:", err);
      }
    };

    fetchSubtitles();
  }, [productVar.singleProductData?.subtitlesFile]);

  // ✅ Highlight subtitles
  useEffect(() => {
    if (!subtitles.length || !subtitlesText) return;

    const updateHighlight = () => {
      const audioEl = audioRef.current?.audio?.current;
      if (!audioEl) return;

      const currentTime = audioEl.currentTime;
      const segment = subtitles.find(
        (seg) => currentTime >= seg.start && currentTime <= seg.end
      );

      if (!segment) {
        setCurrentSubtitle(subtitlesText);
        return;
      }

      const { start, end, text } = segment;
      const words = text.trim().split(" ");
      const wordDuration = (end - start) / words.length;
      const wordIndex = Math.floor((currentTime - start) / wordDuration);

      const highlightedSegment = words
        .map((word, i) =>
          i === wordIndex
            ? `<span style="background-color: yellow">${word}</span>`
            : word
        )
        .join(" ");

      // Instead of regex (which can replace wrong parts), rebuild text with unique markers
      const safeText = subtitlesText.replace(text, highlightedSegment);
      setCurrentSubtitle(safeText);
    };

    const interval = setInterval(updateHighlight, 400); // Slightly reduced frequency for performance
    return () => clearInterval(interval);
  }, [subtitles, subtitlesText]);

  const handleModalClose = () => setActive(false);

  const product = productVar.singleProductData;
  const imageSrc = product?.image ? assetUrl + product.image : "/fallback.jpg";
  const audioSrc = product?.audioFile ? assetUrl + product.audioFile : "";

  return (
    <div className="main px-[4%] relative">
      {/* 🔒 Subscription Modal */}
      <div
        className={`modal fixed w-full h-full bg-[#0000007c] top-0 left-0 z-50 items-center justify-center ${
          active ? "flex" : "hidden"
        }`}
      >
        <div className="pop_box h-fit w-[90%] lg:w-fit bg-white flex items-center py-10 md:py-12 relative px-4 md:px-8 justify-center flex-col gap-4 rounded-xl shadow-xl">
          <h2 className="font-black text-center font-[Nunito] text-xl md:text-2xl lg:text-4xl">
            Subscribe to Continue Listening
          </h2>
          <p className="lg:text-lg w-[90%] text-center text-md text-zinc-400 mt-[-10px]">
            Unlock unlimited access to premium audio content
          </p>
          <Button
            onClick={() => navigate("/subscription")}
            className="bg-amber-600 text-white lg:mt-5 w-full cursor-pointer py-5 hover:bg-black hover:text-white"
          >
            Subscribe Now
          </Button>
          <small
            className="text-zinc-400 cursor-pointer"
            onClick={handleModalClose}
          >
            Maybe Later
          </small>
          <div
            className="icon absolute top-4 right-4 cursor-pointer flex items-center justify-center"
            onClick={handleModalClose}
          >
            <IoClose className="w-6 h-6 text-zinc-400" />
          </div>
        </div>
      </div>

      {/* 🔊 Main Content */}
      <div className="container mx-auto">
        <div className="details flex flex-col gap-8 justify-between pb-10">
          {/* Top Section */}
          <div className="top flex items-start flex-col lg:flex-row gap-6 py-5">
            <div className="left w-full lg:w-1/2 flex items-center justify-center lg:h-[70dvh]">
              <div className="content flex items-center justify-center flex-col gap-2 p-3 w-full lg:w-[80%]">
                <p className="font-[Rubik] uppercase text-center">
                  {product?.categoryId?.title}
                </p>
                <h2 className="font-[Nunito] text-2xl lg:text-4xl uppercase font-semibold text-center">
                  {product?.title}
                </h2>
                <p className="font-[Rubik] uppercase text-center">
                  by {product?.author}
                </p>
                <small className="font-semibold font-[Rubik] text-center">
                  {moment(product?.createdAt).format("DD/MM/YYYY")}
                </small>
              </div>
            </div>

            <div className="right w-full lg:w-1/2 flex items-center justify-center lg:h-[70dvh]">
              <img
                src={imageSrc}
                alt={product?.title || "Book Cover"}
                className="rounded-xl shadow-xl w-full lg:w-[70%] h-72 lg:h-96 object-cover"
              />
            </div>
          </div>

          {/* Audio + Subtitle Section */}
          <div className="bottom flex items-center justify-center flex-col gap-8 lg:gap-14">
            <div className="audio_box w-full lg:w-4/6">
              {audioSrc && (
                <AudioPlayer
                  ref={audioRef}
                  className="w-full bg-black shadow-none"
                  src={audioSrc}
                  onPlay={() => console.log("Audio started:", product?.title)}
                  showSkipControls={orderVar.subsHistory}
                  showJumpControls={orderVar.subsHistory}
                  showFilledVolume
                  progressJumpSteps={{ backward: 10000, forward: 10000 }}
                  layout={
                    typeof window !== "undefined" && window.innerWidth < 1024
                      ? "stacked"
                      : "horizontal"
                  }
                  customProgressBarSection={
                    orderVar.subsHistory ? [RHAP_UI.PROGRESS_BAR] : []
                  }
                  customAdditionalControls={
                    orderVar.subsHistory ? [RHAP_UI.LOOP, RHAP_UI.VOLUME] : []
                  }
                />
              )}
            </div>

            <div className="text_box w-full lg:w-4/6">
              <p
                className="leading-7 text-lg md:text-xl font-medium"
                style={{ fontFamily: "Cormorant Garamond" }}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(currentSubtitle || subtitlesText),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
