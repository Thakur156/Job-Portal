import React from "react";
import FilterJob from "./FilterJob";
import Job from "./Job";

const Jobs = () => {
  const jobs = ["1", "2", "3", "4", "5", "6", "7", "8"];
  return (
    <div className="w-full mx-auto">
      <div className="flex gap-4 mt-6">
        <div className="w-20%">
          <FilterJob />
        </div>
        <div className="flex-1 w-[88vh] ">
          <div className="grid grid-cols-3 gap-3">
            {jobs.map((job, index) => (
              <div key={index}>
                <Job />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
