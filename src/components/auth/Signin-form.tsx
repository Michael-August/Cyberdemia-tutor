"use client";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";
import { getSession, signIn } from "next-auth/react";

import { Input } from "../inputs";
import { Label } from "../label";
import { toast } from "react-toastify";
import { baseUrl } from "../../../utils/constants";
import Loader from "../loader";

type FormValues = {
  email: string;
  password: string;
};

const SigninForm: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleforgetpass = () => {
    console.log("Forgot password clicked");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const submitForm: SubmitHandler<FormValues> = async (data: any) => {
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res && res.ok) {
        const user: Session | null | undefined = await getSession();
        try {
          const profileRes = await axios.get(`${baseUrl}/get-profile`, {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          });
          if (profileRes && profileRes?.data) {
            const { data: profileData } = profileRes;
            const userProfile = {
              fullName: profileData?.data.fullName,
              firstName: profileData?.data.firstName,
              lastName: profileData?.data.lastName,
              state: profileData?.data.state,
              gender: profileData?.data.gender,
              country: profileData?.data.country,
              age: profileData?.data.age,
            };
            sessionStorage.setItem("userProfile", JSON.stringify(userProfile));

            toast.success("Login successful");
            router.push("/tutor/home");
          }
        } catch (error: any) {
          toast.error(error.response.data);
        }
      }
      if (res && !res.ok) {
        toast.error("Invalid email or password");
      }
    } catch (error: any) {
      toast.error("Invalid email or password");
    }
    setLoading(false);
  };

  return (
    <>
      {loading && <Loader />}
      <div className="w-full px-2 py-2 gap-4 h-full">
        <form
          onSubmit={handleSubmit(submitForm)}
          noValidate
          className="space-y-4"
        >
          {/* Email */}
          <div className=" py-2 flex flex-col justify-center gap-10">
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                type="email"
                id="email"
                className="w-full p-2"
                placeholder="Email Address"
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  className="w-full p-2 border rounded-md"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </div>
              </div>
              {errors.password && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex items-center justify-end">
              <p
                className="text-cp-primary cursor-pointer underline-offset-4 hover:underline"
                onClick={handleforgetpass}
              >
                Forgot password?
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 mt-10 bg-cp-secondary text-white rounded-md hover:bg-cp-secondaryDarker transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SigninForm;
