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
import './../scrollbar.css';

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
        <div className="pop_box  h-fit bg-white flex items-center py-12 relative px-8 justify-center flex-col gap-4 rounded-xl shadow-xl">
          <h2 className="font-black font-[Nunito] text-4xl">
            Subscribe to Continue Listening
          </h2>
          <p className="text-lg  text-zinc-400 mt-[-10px]">
            Unlock unlimited access to premium audio content
          </p>
          <Button
            className={`bg-amber-600  mt-5 w-full cursor-pointer py-5 hover:bg-black hover:text-white`}
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
        <div className="details h-[90dvh] flex flex-col justify-between">
          <div className="top flex items-start gap-6 py-5">
            {/* ============= Left ============================ */}
            <div className="left w-3/8 overflow-y-auto custom-scrollbar scroll-smooth" style={{height: 'calc(90dvh - 100px)'}}> 
              <p className="leading-7 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore corrupti veniam soluta autem nemo necessitatibus dicta
                molestiae quis nesciunt tempore labore voluptatum quia
                repellendus aliquid ea architecto quisquam, explicabo commodi,
                distinctio perferendis. Molestiae veniam asperiores nisi
                adipisci illum libero magnam et numquam. Perferendis laborum
                voluptatum omnis, dignissimos laudantium porro perspiciatis iure
                consequuntur voluptatem tempora ipsam? Quis quae corrupti rem
                ipsum! Voluptates laborum, temporibus, accusamus molestiae
                doloribus saepe eius maiores repellendus voluptatibus voluptas
                corporis, quisquam neque accusantium nobis deleniti cumque
                adipisci! Optio mollitia ducimus nihil adipisci minima facere
                sequi delectus nemo vel repellendus nesciunt minus qui possimus
                molestias, ipsa molestiae corporis ab assumenda esse quae magni
                quibusdam similique illo! Cum iure expedita dolores culpa quia
                alias, nobis impedit fugiat enim quod earum ab neque laboriosam,
                id odio corporis, repellat at nulla eius doloremque minima
                pariatur. Eligendi perferendis iste inventore ratione temporibus
                et, voluptatibus unde quam sed cum voluptatem, ducimus dolorem
                pariatur a quaerat debitis. Voluptas obcaecati voluptates, ad
                rerum earum inventore delectus, eum tempora eaque, vel
                perspiciatis dolorem hic et ullam eligendi consectetur.
                Asperiores commodi et eum quidem vel consectetur corrupti.
                Incidunt ea enim autem at ipsam dolores ratione. Eaque suscipit
                quisquam veniam assumenda, hic in et ipsam at error adipisci,
                cumque tempora, officia similique porro eum sit ipsum? Assumenda
                quaerat minus dolorum possimus reiciendis, amet veniam omnis
                itaque tempore perferendis soluta nam commodi dolor! Sunt,
                impedit officia quaerat qui atque aspernatur mollitia sit
                ducimus dolores minus, labore doloremque consectetur dolore
                laborum beatae doloribus magni pariatur possimus perferendis
                quisquam. Placeat culpa consequuntur suscipit error beatae,
                exercitationem soluta perspiciatis itaque et quae maiores neque
                voluptatum nemo quidem necessitatibus quasi, facilis temporibus
                officiis ipsam facere? Ducimus quod quia sit inventore
                aspernatur officiis, veritatis, repellendus, odio dolore
                deserunt minima! Similique, possimus dolorum recusandae tempore
                aspernatur incidunt architecto labore laborum eligendi quia
                atque rerum impedit repellendus qui cum eius accusamus commodi?
                Numquam, in officiis dignissimos quam cupiditate omnis nisi
                deleniti doloribus modi harum voluptates eum, praesentium
                similique corrupti reiciendis consequuntur nam. Similique
                eligendi, natus harum consequatur repudiandae fugit error ea
                fuga, ipsa libero molestias vero illo doloremque magni quia
                deserunt delectus nesciunt rem iusto sed quod veniam dolores.
                Architecto perferendis rem quis sit non dolorum suscipit unde
                repellendus quaerat tempore cum beatae nulla illo alias ullam
                odio impedit obcaecati ratione quidem voluptates, earum, natus
                tempora provident ea? Facere atque doloribus eum similique
                aliquid sapiente vero eos, ipsum quisquam magni nesciunt,
                tempore porro provident rem ipsam ducimus minus quae iusto
                eligendi culpa accusantium. Soluta, adipisci quasi. Accusantium
                officia aliquam reiciendis similique? Est, itaque reiciendis eum
                rerum, nesciunt cum excepturi dolore ex, quasi fugit aspernatur
                laudantium maxime. Ipsum consectetur sapiente ea eligendi
                voluptatem minima ut voluptates laboriosam iure, eveniet odit!
                Voluptatem sequi exercitationem totam dolor. Enim eaque
                cupiditate adipisci maiores dolor! Placeat dignissimos amet
                minus explicabo praesentium pariatur vero beatae nihil aliquam
                laborum rem aut sed earum temporibus perferendis vel aliquid
                ipsa, dolorum maxime? Amet praesentium culpa, ad sunt vel sit
                necessitatibus dolor earum suscipit deleniti molestias labore
                animi quas ullam! Ea exercitationem suscipit dolore doloremque
                accusantium omnis natus vitae id quod, mollitia magni voluptas
                eum accusamus beatae ratione? Consectetur cumque fugit nostrum
                quod saepe ducimus, cum adipisci, libero assumenda repellat
                minus perspiciatis non blanditiis placeat? Quidem eos culpa
                suscipit accusamus! Fugit, magni amet fuga animi nam aspernatur
                repellendus blanditiis, distinctio omnis quo earum sapiente
                tempora dolor vitae sit iure temporibus porro, at laudantium
                quibusdam rerum dolorum aliquam molestias! Porro, et alias
                laborum, labore fuga minus explicabo blanditiis quia quo 
              </p>
            </div>
            {/* ============ Right ========================= */}
            <div className="right w-5/8 flex items-start flex-col gap-4">
              <div className="details_box flex items-center gap-4">
                <img
                  src={b3}
                  alt="image"
                  className="rounded-2xl shadow-md w-80"
                />
                <div className="details flex flex-col gap-2">
                  <h3 className="font-[Nunito] text-2xl font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </h3>
                  <p>
                    <span>Author :</span> Jhon Dove
                  </p>
                  <div className="boxes flex items-center">
                    <div className="box flex items-center gap-2 border-r border-zinc-400 px-3 pl-0">
                      <FaPlay className="text-amber-600" />
                      <small className="text-zinc-500">18M+</small>
                    </div>
                    <div className="box flex items-center gap-2 border-r border-zinc-400 px-3">
                      <FaStar className="text-amber-600" />
                      <small className="text-zinc-500">4.7</small>
                    </div>
                    <div className="box flex items-center gap-2 border-r border-zinc-400 px-3">
                      <TbCategoryFilled className="text-amber-600" />
                      <small className="text-zinc-500">Science</small>
                    </div>
                    <div className="box flex items-center gap-2 border-r border-zinc-400 px-3">
                      <IoLanguage className="text-amber-600" />
                      <small className="text-zinc-500">Hindi</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="description flex flex-col items-start gap-3">
                <span className="font-[Nunito] font-bold text-xl border-b-2 border-amber-600 uppercase">
                  About Show
                </span>
                <p className="text-zinc-600 selection:bg-amber-600 selection:text-white leading-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita fuga quasi provident labore voluptatem, voluptas
                  alias beatae nisi. Voluptate odio quasi amet dolor natus sunt
                  iste minima eum dicta! Saepe eaque architecto repellendus
                  consequuntur dolor maiores cumque vel porro assumenda officia
                  vero quas deleniti, possimus alias iusto culpa odio, voluptas
                  sed! Harum maiores eum in repellat laboriosam voluptate cumque
                  quaerat.
                </p>
              </div>
            </div>
          </div>

          <div className="bottom h-[100px]">
            <AudioPlayer
              ref={audioRef}
              className="w-full bg-black shadow-none"
              autoPlay
              src={song}
              onPlay={() => console.log("onPlay")}
              showSkipControls
              showJumpControls
              showFilledVolume
              progressJumpSteps={{ backward: 10000, forward: 10000 }}
              layout="horizontal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
