// Signup.tsx
import Image from "next/image";
import React from "react";
import SignupForm from "./Signup-form";

const Signup = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-10">
      {/* Left section: Image and text */}
      <div className="col-span-1 hidden sm:block">
        <div className="flex flex-col justify-center items-center gap-5">
          <Image
            src={"/images/loginImage.svg"}
            width={600}
            height={600}
            alt={"signup image"}
          />
          <h1 className="text-3xl font-extrabold text-center px-[10rem]">
            Gain Industry Standard Skills & Become a Cybersecurity Expert
          </h1>
          <p className="text-black py-20">© 2024 CyberDemia</p>
        </div>
      </div>

      {/* Right section: Form container */}
      <div className="col-span-1">
        <div className="flex flex-col justify-center sm:pt-10 items-start gap-10 h-[100vh] overflow-y-auto">
          {/* Container for logo and form */}

          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;
