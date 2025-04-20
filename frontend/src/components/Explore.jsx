import React from "react";
import Job from "./Job";

const Explore = () => {
  const results = [1, 2, 3, 4, 5, 6];
  return (
    <div className="py-8 ">
      <h1 className="text-2xl font-bold my-4">
        Search result {results.length}
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {results.map((item, index) => (
          <Job />
        ))}
      </div>
    </div>
  );
};

export default Explore;
