"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface SelectInputProps {
  title: string;
  options: string[];
  selectedOption: string;
  onOptionSelect: (option: string) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  title,
  options,
  selectedOption,
  onOptionSelect,
}) => {
  return (
    <div className="relative ">
      <select
        className="w-full border-[0.5px] border-slate-300 bg-[#F5F5F5] py-4 px-4 text-[13px] text-gray-400"
        value={selectedOption}
        onChange={(e) => onOptionSelect(e.target.value)}
      >
        <option value="">{title}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const Page: React.FC = () => {
  const Router = useRouter();
  const [category, setCategory] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");

  const categoryOptions = ["Option 1", "Option 2", "Option 3"];
  const difficultyOptions = ["Easy", "Medium", "Hard"];
  const handleNext = () => {
    Router.push("/tutor/labs/confirmation");
  };

  return (
    <div className="md:w-[65%] px-5 grid gap-y-5 md:pb-20 pb-10 pt-5 md:pt-0">
      <div className="flex flex-col gap-2">
        <h1 className="text-[16px] font-extrabold">
          Create Virtual Labs Challenge
        </h1>
        <span className="text-[12px] font-normal text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra
          malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id
          pellentesque interdum. Vestibulum convallis velit feugiat aliquam
          pellentesque etiam. In posuere purus aliquet dolor pretium eget
          dictum. Ut auctor dui neque aliquet tempor. Elementum amet duis auctor
          interdum. Dolor in aliquam blandit lectus pretium. Aliquam malesuada
          aliquam ac in. Urna sit mauris faucibus lectus elementum ipsum. Proin
          quis velit elementum dui aliquam euismod a placerat consectetur. Arcu
          proin et parturient nisl semper bibendum enim eget etiam. Neque
          penatibus iaculis non ultrices augue.
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-[14px] font-bold">Virtual Labs Request Form</h1>
        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-normal text-gray-700">
            Scenario
          </span>
          <input
            type="text"
            placeholder="Enter text"
            className="border-[0.5px] border-slate-300 bg-[#F5F5F5] pb-20 p-2 text-[12px] text-slate-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full ">
        <div className="flex gap-5 w-full">
          <div className="flex flex-col gap-2 w-full">
            <span className="text-[11px] font-normal text-gray-700">
              Category
            </span>
            <SelectInput
              title="Category"
              options={categoryOptions}
              selectedOption={category}
              onOptionSelect={setCategory}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <span className="text-[11px] font-normal text-gray-700">
              Difficulty
            </span>
            <SelectInput
              title="Difficulty"
              options={difficultyOptions}
              selectedOption={difficulty}
              onOptionSelect={setDifficulty}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-normal text-gray-700">
            What kind of challenge files will be uploaded
          </span>
          <input
            type="text"
            placeholder="Enter text"
            className="border-[0.5px] border-slate-300 bg-[#F5F5F5] pb-20 p-2 text-[12px] text-slate-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-normal text-gray-700">
            What kind of challenge files will be uploaded
          </span>
          <input
            type="text"
            placeholder="Enter number"
            className="border-[0.5px] border-slate-300 bg-[#F5F5F5] py-4 p-2 text-[12px] text-slate-300"
          />
        </div>
      </div>
      <button
        className="w-full py-2 bg-cp-secondary hover:bg-cp-primary text-white text-[14px] font-bold mt-10"
        onClick={handleNext}
      >
        Submit Request
      </button>
    </div>
  );
};

export default Page;
