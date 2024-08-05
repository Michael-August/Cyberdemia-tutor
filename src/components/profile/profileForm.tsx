import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../inputs";

type FormValues = {
  firstname: string;
  lastname: string;
  phoneNumber: string;
  bio: string;
  language: string;
};

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const languages = ["English", "Spanish", "French", "German", "Chinese"];

  const submitForm = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="form">
      <form
        onSubmit={handleSubmit(submitForm)}
        noValidate
        className="mt-4 flex flex-col gap-5 lg:w-[70%]"
      >
        <div className="w-full flex flex-col md:flex-row gap-5">
          <div className="w-full flex flex-col gap-3">
            <span className="text-[12px] text-gray-600">First Name</span>
            <Input
              className="w-full !p-3 !py-6 focus:!outline-none focus:!ring-0 border text-xs !border-solid !border-[#00000033] !bg-[#F5F5F5]"
              placeholder="First Name"
              autoComplete="off"
              type="text"
              id="firstname"
              {...register("firstname", {
                required: "First name is required",
              })}
            />
            {errors.firstname && (
              <p className="text-red-500 py-2 text-xs">
                {errors.firstname.message}
              </p>
            )}
          </div>
          <div className="w-full flex flex-col gap-3">
            <span className="text-[12px] text-gray-600">Last Name</span>
            <Input
              className="w-full !p-3 !py-6 text-xs focus:!outline-none focus:!ring-0 border !border-solid !bg-[#F5F5F5]"
              placeholder="Last Name"
              autoComplete="off"
              type="text"
              id="lastname"
              {...register("lastname", {
                required: "Last name is required",
              })}
            />
            {errors.lastname && (
              <p className="text-red-500 py-2 text-xs">
                {errors.lastname.message}
              </p>
            )}
          </div>
        </div>

        <div className="w-full flex flex-row gap-5 pt-1">
          <div className="w-full flex flex-col gap-3">
            <span className="text-[12px]   text-gray-600">Phone Number</span>
            <Input
              className="w-full text-xs !p-3 !py-6 focus:!outline-none focus:!ring-0 border !border-solid !border-[#00000033] !bg-[#F5F5F5]"
              placeholder="Enter Phone number"
              autoComplete="off"
              type="text"
              id="phone"
              {...register("phoneNumber", {
                required: "Phone number is required",
              })}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 py-2 text-xs">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
          <div className="w-full flex flex-col gap-3">
            <span className="text-[12px]  text-gray-600">Language</span>
            <select
              className="text-xs text-[#000000CC] py-4 p-3 bg-[#F5F5F5] border border-solid text-gray-500 border-[#00000033] w-full text-left"
              {...register("language", {
                required: "Language selection is required",
              })}
            >
              <option value="">Select Language</option>
              {languages.map((language, index) => (
                <option key={index} value={language}>
                  {language}
                </option>
              ))}
            </select>
            {errors.language && (
              <p className="text-red-500 py-2 text-xs">
                {errors.language.message}
              </p>
            )}
          </div>
        </div>

        <div className="w-full flex flex-col gap-3">
          <span className="text-[12px] text-gray-600 pt-1">Bio</span>
          <textarea
            className="w-full text-xs pb-10 p-3 !focus:outline-none !focus:ring-0 !border border-solid !border-[#00000033] !bg-[#F5F5F5]"
            placeholder="Enter text (250 characters)"
            autoComplete="off"
            id="bio"
            {...register("bio", {
              required: "Bio is required",
            })}
          />
          {errors.bio && (
            <p className="text-red-500 py-2 text-xs">{errors.bio.message}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
