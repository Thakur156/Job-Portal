import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="w-full mx-auto flex flex-col items-center">
      <h2 className="text-center mt-12 text-orange-500 max-[200px] text-3xl font-bold">
        Welcome to our Website :)
      </h2>
      <h1 className="mt-12 text-4xl font-bold max-[200px] ">
        Search ,Apply &{" "}
        <span className="text-yellow-600">Get the right job for youself</span>
      </h1>
      <p className="mt-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
        pariatur!
      </p>
      <div className="w-[400px] mt-6  flex items-center">
        <input
          type="text"
          placeholder="Serach your jobs"
          className="w-[70%] border-2 text-center outline-1 border-gray-400 rounded-l-full py-2 "
        />
        <Button className="border-1 rounded-r-full py-[22px] bg-orange-600 text-white hover:bg-orange-800">
          Search
        </Button>
      </div>
    </div>
  );
};

export default Hero;
