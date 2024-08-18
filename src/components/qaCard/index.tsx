"use client";
import SearchIcon from "@mui/icons-material/Search";
import { Box, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";

import QaCard from "./QaCard";

const reviews = [
  {
    name: "Emmanuel Sam",
    id: 1,
    daysAgo: 2,
    comment:
      "Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Ut Confirm the Cookie is Set Before Making the RequestIf your reset password request happens too quickly after setting the cookie, the cookie might not be available yet. Make sure to confirm that the useEffect hook has run and set the cookie before making the API call.By adjusting your code to consistently use the request function for API calls, you ensure that the token is properly included in all relevant requests. porttitor et viverra malesuada fringilla. Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Ut porttitor et viverra malesuada fringilla.Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Ut Confirm the Cookie is Set Before Making the RequestIf your reset password request happens too quickly after setting the cookie, the cookie might not be available yet. Make sure to confirm that the useEffect hook has run and set the cookie before making the API call.By adjusting your code to consistently use the request function for API calls, you ensure that the token is properly included in all relevant requests. porttitor et viverra malesuada fringilla. Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Ut porttitor et viverra malesuada fringilla.",
  },
  {
    name: "Mary Kelechi",
    id: 2,
    daysAgo: 18,
    comment:
      "Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Ut porttitor et viverra malesuada fringilla. Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Ut porttitor et viverra malesuada fringilla.",
  },
  {
    name: "John Doe",
    id: 3,
    daysAgo: 50,
    comment: "Lorem ipsum dolor sit amet consectetur. Ut port",
  },
  {
    name: "Jane Doe",
    daysAgo: 2,
    id: 4,
    comment:
      "Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Ut porttitor et viverra malesuada fringilla. Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Ut porttitor et viverra malesuada fringilla.",
  },
];

const Index = () => {
  const [select, setSelect] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 2,
        paddingTop: 2,
        width: "100%",
        maxWidth: "100%",
      }}
    >
      <Box
        sx={{
          maxWidth: "50%",
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Select
          value={select}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="new">Newest</MenuItem>
          <MenuItem value="oldest">Oldest</MenuItem>
        </Select>
      </Box>
      {reviews.map((review, index) => (
        <QaCard
          key={index}
          id={review.id}
          name={review.name}
          daysAgo={review.daysAgo}
          comment={review.comment}
        />
      ))}
    </Box>
  );
};

export default Index;
