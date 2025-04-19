import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Navbar = () => {
  const user = true;
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
              <Link to={"/"}>Jobs</Link>
            </li>
            <li>
              <Link to={"/"}>Services</Link>
            </li>
          </ul>
        </div>
        {/* right section */}
        <div className="flex items-center gap-6">
          {!user ? (
            <>
              <Link to={"/login"}>
                <Button className="bg-orange-500 text-white hover:bg-amber-700">
                  Login
                </Button>
              </Link>
              <Link to={"/signup"}>
                <Button>Signup</Button>
              </Link>
            </>
          ) : (
            <Avatar className="cursor-pointer">
              <Popover>
                <PopoverTrigger asChild>
                  <AvatarImage src="https://github.com/shadcn.png" />
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <h2 className="tex-md tex-lg font-semibold text-gray-600">
                    Thakur
                  </h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <div>
                    <Button variant="link">Profile</Button>
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
