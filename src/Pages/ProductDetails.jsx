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

const ProductDetails = () => {
  const [active, setActive] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(true);
      if (audioRef.current?.audio?.current) {
        audioRef.current.audio.current.pause();
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const handleModal = () => {
    setActive(false);
  };

  return (
    <div className="main px-[4%] relative">
      <div
        className={`modal fixed w-full h-full bg-[#0000007c] top-0 left-0 z-50 items-center justify-center ${
          active ? "flex" : "hidden"
        }`}
      >
        <div className="pop_box  h-fit w-[90%] lg:w-fit bg-white flex items-center py-10 md:py-12 relative px-4 md:px-8 justify-center flex-col gap-4 rounded-xl shadow-xl">
          <h2 className="font-black text-center font-[Nunito] text-xl md:text-2xl lg:text-4xl">
            Subscribe to Continue Listening
          </h2>
          <p className="lg:text-lg w-[90%] text-center text-md  text-zinc-400 mt-[-10px]">
            Unlock unlimited access to premium audio content
          </p>
          <Button
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
                <p className="font-[Rubik] uppercase text-center">fiction</p>
                <h2 className="font-[Nunito] text-2xl lg:text-4xl uppercase font-semibold text-center">
                  nocturnal creatures
                </h2>
                <p className="font-[Rubik] uppercase text-center">
                  by said sayrafiezadeh
                </p>
                <small className="font-semibold font-[Rubik] text-center">
                  April 27, 2025
                </small>
              </div>
            </div>

            {/* ============ Right ========================= */}
            <div className="right w-full lg:w-1/2 flex items-center justify-center lg:h-[70dvh]">
              <img
                src={b3}
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
                src={song}
                onPlay={() => console.log("onPlay")}
                // showSkipControls
                showJumpControls
                showFilledVolume
                progressJumpSteps={{ backward: 10000, forward: 10000 }}
                layout={`${window.innerWidth < 1024 ? "stacked" : "horizontal"}`}
              />
            </div>
            <div className="text_box w-full lg:w-4/6">
              <p
                className="leading-7 text-lg md:text-xl font-medium first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2"
                style={{ fontFamily: "Cormorant Garamond" }}
              >
                Iorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate incidunt soluta, eaque quisquam, omnis porro modi
                officia nihil reiciendis, voluptates sint! Atque, reprehenderit
                nobis, dignissimos veritatis officia dolorem fugit ex alias fuga
                a autem labore. Facilis nisi aut, aspernatur fugiat saepe
                placeat nostrum fugit aperiam voluptatibus, doloribus blanditiis
                ratione eligendi aliquid! Vel beatae illum, illo eius,
                distinctio laborum maiores voluptate adipisci in incidunt nulla
                saepe quibusdam. Est quidem, pariatur distinctio quaerat
                reprehenderit error rerum libero voluptate non! Laboriosam rerum
                quam omnis, veniam nostrum harum laudantium nesciunt et dicta,
                placeat voluptas esse perspiciatis eius eum suscipit cumque ut
                veritatis quasi ea nulla provident est quisquam. Porro placeat,
                quam quaerat obcaecati aspernatur tenetur commodi praesentium
                aliquam autem? Iusto officia minima, ducimus vitae possimus nam
                ex molestias perspiciatis quas excepturi inventore voluptatum,
                enim consectetur, quis architecto iure voluptatem blanditiis
                nulla. Voluptates hic minima quos nisi placeat! Obcaecati
                deleniti deserunt minus totam itaque rem, libero optio ex
                delectus, quas, iste modi ipsam quo! Dolores ipsum tempore
                beatae eos necessitatibus recusandae sed praesentium, expedita
                voluptatem iste, quo error! Ad, fugit mollitia voluptatem id
                pariatur assumenda. Iusto tenetur rem ipsa cumque laborum vel
                maiores laudantium explicabo non, neque natus quas porro soluta
                suscipit deleniti culpa quod eveniet. Odit id hic blanditiis
                iusto in non. Cum omnis ex neque explicabo fuga. Voluptatem
                neque dolor nulla totam earum illo impedit optio aperiam eum ad
                similique, nobis asperiores recusandae fugiat nisi in quam
                perferendis corrupti quibusdam harum minima alias? Provident
                asperiores tenetur animi, ipsa sapiente optio dolore voluptate
                qui, velit eligendi ad distinctio totam facere eaque maiores
                quasi eveniet sint quae in! Asperiores perferendis eos eligendi
                qui dolore obcaecati vel doloribus modi ipsa ut quo cumque
                dignissimos earum distinctio repudiandae voluptatem, sunt veniam
                natus iure porro quae mollitia temporibus ullam. Veniam, non.
                Perspiciatis commodi deleniti fuga perferendis, cum officia
                facilis illo vitae rem! Accusantium numquam cupiditate fuga
                eveniet nam saepe, eligendi incidunt autem veritatis sit!
                Voluptatum optio, omnis laboriosam quos asperiores vero quae non
                numquam, cupiditate corporis molestias provident expedita nihil
                dicta! Sunt illum suscipit rem atque, ullam praesentium quae
                ipsum fugit dolore nihil! Voluptates commodi similique
                perspiciatis consequuntur aliquid, natus quo quidem ut totam
                deleniti blanditiis, tempora porro incidunt nostrum eligendi
                aspernatur, veniam adipisci voluptas at aperiam ullam ipsa!
                Error ad, amet ipsum at aut quos accusamus, modi voluptas optio
                ducimus provident? Ullam molestias mollitia nostrum excepturi
                illo placeat amet laborum eum. Animi explicabo officiis quas?
                Ab, dolorum!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
