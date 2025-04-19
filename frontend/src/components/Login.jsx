import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
const Login = () => {
  const [inputs, setInputs] = React.useState({
    email: "",
    password: "",
    role: "",
  });
  const onChangeHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
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
            Login to your account
          </h2>

          <div className="grid w-full px-3  items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={inputs.email}
              onChange={onChangeHandler}
              name="email"
            />
          </div>

          <div className="grid w-full px-3  items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              placeholder="Enter your password"
              value={inputs.password}
              onChange={onChangeHandler}
              name="password"
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex ml-2 items-center space-x-2">
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

          <Button type="submit" className=" text-white rounded-md w-full">
            Login
          </Button>
          <span className="ml-2">Don't have an Account</span>
          <Link className="text-blue-500 mb-3 ml-2" to={"/signup"}>
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
