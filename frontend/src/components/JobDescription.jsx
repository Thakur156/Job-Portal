import { Badge } from "@/components/ui/badge";
import React from "react";
import { Button } from "./ui/button";

const JobDescription = () => {
  const isApplied = false;
  return (
    <div className="w-full mx-auto my-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-3">
          {" "}
          <h1 className="text-2xl font-bold text-gray-800">
            Frontend Developer
          </h1>
          <div className="flex gap-4 items-center  mt-8">
            <Badge className="bg-black text-white rounded-xl hover:bg-orange-700 cursor-pointer">
              5 position
            </Badge>
            <Badge className="bg-black text-white rounded-xl hover:bg-purple-700 cursor-pointer">
              Full Time
            </Badge>
            <Badge className="bg-black text-white rounded-xl hover:bg-pink-700 cursor-pointer">
              15 LPA
            </Badge>
          </div>
        </div>
        <Button
          className={`bg-orange-600 px-10 rounded-xl text-white hover:bg-orange-700 ${
            isApplied ? "cursor-not-allowed" : "cursor-pointer"
          } `}
        >
          {isApplied ? "Applied" : "ApplyNow"}
        </Button>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold tex-gray-800">Job Details</h2>
        <hr className="w-full bg-gray-700" />
      </div>
      <div className="mt-8">
        <div className="flex gap-4 items-center">
          <h3 className="font-semibold text-lg">Role:</h3>
          <p>Frontend Developer</p>
        </div>
        <div className="flex gap-4 items-center">
          <h3 className="font-semibold text-lg">Location:</h3>
          <p>Lahore</p>
        </div>
        <div className="flex gap-4 items-center">
          <h3 className="font-semibold text-lg">Description:</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            nesciunt mollitia doloribus ducimus voluptatibus sapiente?
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <h3 className="font-semibold text-lg">Experience:</h3>
          <p>2 years</p>
        </div>
        <div className="flex gap-4 items-center">
          <h3 className="font-semibold text-lg">Salary:</h3>
          <p>15 LPA</p>
        </div>
        <div className="flex gap-4 items-center">
          <h3 className="font-semibold text-lg">Total Apllicants:</h3>
          <p>7</p>
        </div>
        <div className="flex gap-4 items-center">
          <h3 className="font-semibold text-lg">Posted Date:</h3>
          <p>23-02-2025</p>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
