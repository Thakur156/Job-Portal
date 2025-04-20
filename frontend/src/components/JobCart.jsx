import React from "react";
import { Badge } from "@/components/ui/badge";
const JobCart = () => {
  return (
    <div className="border-2 border-gray-100 shadow-lg p-5  rounded-md">
      <div className="flex flex-col gap-3 ">
        <h1 className="text-xl font-semibold text-gray-700">Company</h1>
        <Badge className="bg-blue-400 text-white rounded-xl cursor-pointer hover:bg-blue-600">
          Lahore
        </Badge>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <h1 className="text-2xl font-semibold text-gray-700">Job Title</h1>
        <p className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          iste numquam quos alias sint consectetur ex veritatis nam.
        </p>
      </div>
      <div className="flex gap-4 items-center justify-between mt-8">
        <Badge className="bg-orange-500 text-white rounded-xl hover:bg-orange-700 cursor-pointer">
          5 position
        </Badge>
        <Badge className="bg-purple-500 text-white rounded-xl hover:bg-purple-700 cursor-pointer">
          Full Time
        </Badge>
        <Badge className="bg-pink-500 text-white rounded-xl hover:bg-pink-700 cursor-pointer">
          15 LPA
        </Badge>
      </div>
    </div>
  );
};

export default JobCart;
