import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
const Job = () => {
  const navigate = useNavigate();
  const jobId = 1;
  return (
    <div>
      <div className="p-5 shadow-md rounded-lg border-2 border-gray-300">
        <p>3 days ago</p>
        <div className="flex gap-3 mt-2 justify-between">
          <img
            className="w-16 h-6 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh2V5UAh1KUQNDPQOI-UXfi7LlCgaaiDoSMg&s"
            alt=""
          />
          <div>
            <h1 className="font-bold text-xl text-gray-700 ">Company Name</h1>
            <p className="text-gay-700 text-xs ml-3">location</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-2 ">
          <h1 className="text-2xl font-bold">Job Title</h1>
          <p className="text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            voluptates cupiditate rerum aliquam. Eligendi rerum error qui.
            Praesentium, quis illum?
          </p>
          <div className="flex gap-4 items-center justify-between mt-8">
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
          <div className="flex justify-between mt-3 ">
            <Button
              onClick={() => navigate(`/job/description/${jobId}`)}
              className="bg-blue-600 hover:bg-blue-700 rounded-full text-white"
            >
              Details
            </Button>
            <Button className="bg-orange-600 hover:bg-orange-700 rounded-full text-white">
              Save for Later
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
