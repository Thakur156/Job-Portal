import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
const Signup = () => {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    file: "",
  });
  const onChangeHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const fileHandler = (e) => {
    setInputs({
      ...inputs,
      file: e.target.files?.[0],
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <div>
      <div className="flex justify-center items-center mt-16 mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/3 mx-auto shadow-md flex flex-col gap-3 "
        >
          <h2 className="text-lg font-semibold text-center">
            Create an account
          </h2>

          <div className="grid w-full px-3  items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={inputs.name}
              onChange={onChangeHandler}
            />
          </div>

          <div className="grid w-full px-3  items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={inputs.email}
              onChange={onChangeHandler}
            />
          </div>

          <div className="grid w-full px-3  items-center gap-1.5">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              type="number"
              placeholder="Enter your number"
              name="phone"
              value={inputs.phone}
              onChange={onChangeHandler}
            />
          </div>

          <div className="grid w-full px-3  items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={onChangeHandler}
              value={inputs.password}
            />
          </div>
          <div className="flex items-center justify-between ml-2">
            <RadioGroup className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <Input
                  className="cursor-pointer"
                  type="radio"
                  name="role"
                  value="student"
                  onChange={onChangeHandler}
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  className="cursor-pointer"
                  type="radio"
                  name="role"
                  value="recruiter"
                  onChange={onChangeHandler}
                />
                <Label htmlFor="r1">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex items-center px-3 gap-2">
            <Label>Profile</Label>
            <Input
              accept="image/*"
              type="file"
              placeholder="Upload your profile"
              className="cursor-pointer"
              name="file"
              onChange={fileHandler}
            />
          </div>
          <Button type="submit" className=" text-white rounded-md w-full">
            Signup
          </Button>
          <span className="ml-2">Already have an Account</span>
          <Link className="text-blue-500 mb-3 ml-2" to={"/login"}>
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
