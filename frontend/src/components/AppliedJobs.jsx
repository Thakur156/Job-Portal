import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";

const AppliedJobs = () => {
  const jobs = [
    {
      Date: "23/10/2023",
      role: "Backend Developer",
      Status: "accepted",
      company: "Google",
    },
    {
      Date: "23/10/2023",
      role: "Backend Developer",
      Status: "accepted",
      company: "Google",
    },
    {
      Date: "23/10/2023",
      role: "Backend Developer",
      Status: "accepted",
      company: "Google",
    },
  ];
  return (
    <div className="mt-5 w-full ">
      <div className="w-[80%] mx-auto rounded-md border-2 border-gray-300 shadow-lg p-5">
        <h1 className="text-2xl font-bold text-gray-800">Applied Jobs</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-base font-semibold">Date</TableHead>
              <TableHead className="text-base font-semibold">
                Job Role
              </TableHead>
              <TableHead className="text-base font-semibold">Company</TableHead>
              <TableHead className="text-base font-semibold">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map((job, index) => (
              <TableRow key={index}>
                <TableCell className="tesxt-base font-medium">
                  {job.Date}
                </TableCell>
                <TableCell className="tesxt-base font-medium">
                  {job.role}
                </TableCell>
                <TableCell className="tesxt-base font-medium">
                  {job.company}
                </TableCell>
                <TableCell>
                  <Badge
                    className="bg-black rounded-full text-white cursor-pointer "
                    key={index}
                  >
                    {job.Status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AppliedJobs;
