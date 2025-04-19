import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";

const Signup = () => {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
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
    const formData = new FormData();
    formData.append("name", inputs.name);
    formData.append("email", inputs.email);
    formData.append("phoneNumber", inputs.phoneNumber);
    formData.append("password", inputs.password);
    formData.append("role", inputs.role);
    if (inputs.file) {
      formData.append("file", inputs.file);
    }
    try {
      dispatch(setLoading(true));
      const response = await axios.post(
        "http://localhost:4000/api/user/signup",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("error in signup", error);
    } finally {
      dispatch(setLoading(false));
    }
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
              type="tel"
              placeholder="Enter your number"
              name="phoneNumber"
              value={inputs.phoneNumber}
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
