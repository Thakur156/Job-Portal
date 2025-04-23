import { Contact, Edit, Mail } from "lucide-react";
import React from "react";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";
import AppliedJobs from "./AppliedJobs";
import UpdateProfileModel from "./UpdateProfileModel";
import { useSelector } from "react-redux";
const Profile = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="my-12 w-full">
      <div className="py-5 px-6 rounded-md shadow-lg border-2 border-gray-300 lg:w-1/2 mx-auto">
        {/* Profile Header */}
        <div className="flex items-center justify-between">
          <div className="flex gap-5 items-start">
            <img
              className="w-12 h-12 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYP-KKtRJXm9qK7k2_PA1utxbxWdpzGIdulQ&s"
              alt="Profile"
            />
            <div>
              <h1 className="text-gray-600 font-semibold">{user?.name}</h1>
              <p className="text-sm text-gray-600 max-w-[500px]">
                {user?.profile?.bio}
              </p>
            </div>
          </div>
          <Edit onClick={() => setIsOpen(true)} className="cursor-pointer" />
        </div>

        {/* Email and Phone */}
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex gap-4 items-center">
            <Mail className="w-5 h-5" />
            <p>{user?.email}</p>
          </div>
          <div className="flex gap-4 items-center">
            <Contact className="w-5 h-5" />
            <p>{user?.phoneNumber}</p>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-4">
          <h1 className="text-gray-600 text-lg font-semibold">Skills</h1>
          <div className="flex flex-wrap gap-2 mt-2">
            {user?.profile?.skills.map((item, index) => (
              <Badge
                className="bg-orange-600 rounded-full text-white cursor-pointer hover:bg-orange-700"
                key={index}
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>

        {/* Resume */}
        <div className="mt-4">
          <h4 className="text-gray-400 text-lg font-semibold">
            {user?.profile?.resume}
          </h4>
          <Link to="/" className="text-orange-600 hover:underline">
            {user?.profile?.resumeName}
          </Link>
        </div>
      </div>
      <AppliedJobs />
      <UpdateProfileModel isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Profile;
