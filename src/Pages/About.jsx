import React from "react";
import b7 from "../assets/images/b7.webp";
import b8 from "../assets/images/b8.webp";
import b9 from "../assets/images/b9.webp";
import b10 from "../assets/images/b10.webp";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate()
  const cards = [
    {
      image: b8,
      title: "The easy experience",
      des: "Everything you need in one place, making it easy to create and earn.",
    },
    {
      image: b9,
      title: "You do you",
      des: "An algorithm-free, safe space where you have 100% control to do what you love on your terms.",
    },
    {
      image: b10,
      title: "At your pace",
      des: "You move to your own beat, and so do we. Ko-fi is about real connections, real support, and real rewards.",
    },
  ];

  return (
    <>
      {/* =================== Section 1 =============================== */}
      <div className="main px-[4%]">
        <div className="container mx-auto">
          <section className="pt-7 lg:pb-10 flex items-center justify-center flex-col lg:flex-row lg:gap-0 gap-8">
            <div className="left w-full lg:w-1/2 flex flex-col items-start lg:gap-2 gap-4">
              <h2 className="font-[Nunito] lg:text-7xl text-5xl font-extrabold w-full">
                For Creators <br /> By Creators
              </h2>
              <p className="lg:text-3xl text-xl font-[Nunito]">
                We&apos;ve been around since 2011, staying true to our mission:
                helping creators earn a living from their passions.
              </p>
            </div>
            <div className="right w-full lg:w-1/2 flex items-center justify-center">
              <img src={b7} alt="image" className="lg:w-[90%] md:w-[50%] w-[74%]" />
            </div>
          </section>
        </div>
      </div>
      {/* =================== Section 2 =============================== */}
      <div className="main px-[4%] mb-10">
        <div className="container mx-auto">
          <section className="w-full relative">
            <div className="content z-[1] bg-white w-[98%] border-2 border-black rounded-3xl p-3 md:p-6 lg:p-10">
              <div className="top flex-col flex gap-4">
                <h2 className="font-bold font-[Nunito] text-2xl lg:text-4xl">Our values</h2>
                <p className="text-lg lg:text-2xl font-[Nunito]">
                  Our values are what guide us every day. They shape every
                  decision we make, from the features we build to the way we
                  support our community. We believe when creators feel valued,
                  supported, and empowered, amazing things happen.
                  <br />
                  Our commitment to these values helps us stay true to our
                  mission: to create a welcoming, inclusive platform where every
                  creator has the freedom to share their passion and earn a
                  living on their terms. Here&apos;s what drives us and keeps us
                  focused on what matters most, you.
                </p>
              </div>
              <div className="bottom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 lg:mt-16">
                {cards.map((item, index) => (
                  <div
                    className="box bg-zinc-100
                        p-4 rounded-3xl flex flex-col gap-3 md:gap-4 border border-zinc-400 shadow-lg
                        "
                    key={index}
                  >
                    <img src={item.image} alt="image" className="w-18 md:w-26" />
                    <h3 className="font-[Nunito] font-bold text-xl md:text-2xl">
                      {item?.title}
                    </h3>
                    <p className="font-[Nunito] text-lg md:text-xl">{item?.des}</p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="dotted z-[-1] absolute top-7 left-2 w-full h-full rounded-3xl border-2 border-black"
              style={{
                backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                backgroundSize: "10px 10px",
              }}
            ></div>
          </section>
        </div>
      </div>

      {/* ================== Section 3 ================================ */}
      <div className="main px-[4%]">
        <div className="container mx-auto">
          <section className="py-10 flex-col flex items-center justify-center gap-7">
            <h2 className="text-3xl md:text-5xl text-center leading-10 md:leading-13 font-[Nunito] font-bold">Sound like something <br /> you want to be part of?</h2>
            <p className="text-center font-[Nunito] text-lg md:text-xl w-full md:w-2/3">AudioBook is here to help you do what you love and get paid for it – all without the stress. Come join the community of creators earning, connecting, and growing on their own terms.</p>
            <Button onClick={() => navigate('/products')} className={`rounded-3xl py-7 px-8 bg-amber-600 text-white hover:bg-black hover:text-white cursor-pointer`}>Get Started</Button>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
