import { PlanCard } from "@/_components";
import React from "react";

const Plans = () => {
  return (
    <>
      <div className="main px-[4%]">
        <div className="container mx-auto">
          <div className="plans py-10 flex items-center justify-center flex-col gap-5">
            <h2 className="font-[Nunito] md:text-4xl text-3xl font-bold">
              Plans & Pricing
            </h2>
            <p className="text-center font-light">
              Choose the plan that fits your needs and scale as you grow
            </p>
            <div className="boxes w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:px-20 md:px-10 px-5 mt-4">
              <PlanCard />
              <PlanCard />
              <PlanCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
