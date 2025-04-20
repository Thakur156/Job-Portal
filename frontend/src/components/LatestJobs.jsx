import React from "react";
import JobCart from "./JobCart";

const LatestJobs = () => {
  const jobs = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="w-full mx-auto flex items-center justify-center flex-col gap-5">
      <h1 className="ml-6 text-3xl font-bold">
        Latest Jobs & <span className="text-blue-600">Openings</span>
      </h1>
      <div className="grid w-full items-center justify-center grid-cols-3 gap-5">
        {jobs.slice(0, 6).map((job, index) => (
          <JobCart />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
