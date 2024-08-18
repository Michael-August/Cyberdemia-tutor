"use client";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import React from "react";

function capitalizeWords(str: string) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function NavigationCrumbs() {
  const pathname = usePathname();

  // Split the pathname and remove the empty strings
  const allLinks = pathname
    .split("/")
    .filter(Boolean)
    .map((link) => link.replace(/-/g, " "));

  // Exclude "tutor" from the display and use it to build hrefs
  const displayLinks = allLinks.filter((link, index) => index !== 0);
  const hrefLinks = allLinks.map(
    (link, index) => `/${allLinks.slice(0, index + 1).join("/")}`
  );

  return (
    <Breadcrumbs
      separator=">"
      aria-label="breadcrumb"
      sx={{
        margin: "1rem 0",
        padding: "0 1rem",
      }}
    >
      {displayLinks.map((el, index) => {
        const href = hrefLinks[index + 1] || hrefLinks[hrefLinks.length - 1];
        const isLast = index === displayLinks.length - 1;

        return isLast ? (
          <Typography color="textPrimary" key={href}>
            {capitalizeWords(el)}
          </Typography>
        ) : (
          <Link
            color="primary"
            href={href}
            key={href}
            sx={{
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            {capitalizeWords(el)}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
