"use client";
import React from "react";
import AnnouncementCard from "./AnnouncementCard";
import { Button } from "@mui/material";
import { IoArrowForward } from "react-icons/io5";
import { NavigationCrumbs } from "../NavigationCrumbs";

const Index = () => {
  return (
    <div className="flex flex-col gap-8 h-[100%] px-5 py-5">
      <NavigationCrumbs />
      
      <AnnouncementCard />
    </div>
  );
};

export default Index;
