"use client";
import { Box, Button } from "@mui/material";
import React from "react";
import ReplyCard from "./ReplyCard";
import { useRouter } from "next/navigation";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const reviews = [
  {
    name: "Emmanuel Sam",
    id: 1,
    daysAgo: 2,
    comment:
      "Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Ut Confirm the Cookie is Set Before Making the RequestIf your reset password request happens too quickly after setting the cookie, the cookie might not be available yet. Make sure to confirm that the useEffect hook has run and set the cookie before making the API call.By adjusting your code to consistently use the request function for API calls, you ensure that the token is properly included in all relevant requests. porttitor et viverra malesuada fringilla. Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Ut porttitor et viverra malesuada fringilla.Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Ut Confirm the Cookie is Set Before Making the RequestIf your reset password request happens too quickly after setting the cookie, the cookie might not be available yet. Make sure to confirm that the useEffect hook has run and set the cookie before making the API call.By adjusting your code to consistently use the request function for API calls, you ensure that the token is properly included in all relevant requests. porttitor et viverra malesuada fringilla. Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Ut porttitor et viverra malesuada fringilla.",
  },
];

const Index = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
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
        <Button
          sx={{
            backgroundColor: "#fff",
            color: "black",
            width: "fit-content",
            paddingY: "8px",
            display: "flex",
            border: "1px solid black",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: "13px",
            gap: "8px",
            "&:hover": {
              backgroundColor: "black",
              color: "#fff",
            },
          }}
          onClick={handleBackClick}
          startIcon={<IoArrowBackCircleOutline />}
        >
          Back to Q&A
        </Button>
      </Box>
      {reviews.map((review, index) => (
        <ReplyCard
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
