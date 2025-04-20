import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="h-12  ">
      <div className="flex items-center justify-between  py-3 ">
        {/* left section */}
        <div>
          <Link to={"/"}>
            <h2 className="text-3xl font-bold text-orange-600">Jobify</h2>
          </Link>
        </div>
        {/* middle section  */}
        <div>
          <ul className=" flex items-center gap-6">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/jobs"}>Jobs</Link>
            </li>
            <li>
              <Link to={"/explore"}>Explore</Link>
            </li>
          </ul>
        </div>
        {/* right section */}
        <div className="flex items-center gap-6">
          {!user ? (
            <>
              <Link to={"/login"}>
                <Button className="bg-orange-500 text-white hover:bg-amber-700 rounded-md px-6 py-2">
                  Login
                </Button>
              </Link>
              <Link to={"/signup"}>
                <Button className="rounded-md px-6 py-2">Signup</Button>
              </Link>
            </>
          ) : (
            <Avatar className="cursor-pointer">
              <Popover className="bg-gray-500  z-10">
                <PopoverTrigger asChild>
                  <AvatarImage src="https://github.com/shadcn.png" />
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <h2 className="tex-md tex-lg font-semibold text-gray-600">
                    Thakur
                  </h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <div>
                    <Link to={"/profile"}>
                      <Button variant="link">Profile</Button>
                    </Link>
                    <Button variant="link">Logout</Button>
                  </div>
                </PopoverContent>
              </Popover>
            </Avatar>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
