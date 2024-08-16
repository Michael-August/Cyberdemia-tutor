"use client";
import React from "react";
import { Breadcrumbs, Typography, Link } from "@mui/material";
import { usePathname } from "next/navigation";

function capitalizeWords(str: string) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function NavigationCrumbs() {
  const pathname = usePathname();

  // Split pathname into segments and filter out empty strings
  const allLinks = pathname
    .split("/")
    .filter(Boolean)
    .map((link) => link.replace(/-/g, " ")); // Replace hyphens with spaces for readability

  // Skip the first segment (e.g., "tutor")
  const links = allLinks.slice(1);

  return (
    <Breadcrumbs separator=">" aria-label="breadcrumb">
      {links.map((el, index) => {
        const href = `/${allLinks.slice(1, index + 2).join("/")}`;
        const isLast = index === links.length - 1;

        return isLast ? (
          <Typography color="textPrimary" key={href}>
            {capitalizeWords(el)}
          </Typography>
        ) : (
          <Link color="inherit" href={href} key={href}>
            {capitalizeWords(el)}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
