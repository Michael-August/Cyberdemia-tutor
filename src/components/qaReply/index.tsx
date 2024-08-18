'use client';
import {
  Avatar,
  Box,
  Button,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IoArrowBackCircleOutline } from 'react-icons/io5';

import ReplyCard from './ReplyCard';

const reviews = [
  {
    name: 'Patrick Bateman',
    id: 1,
    daysAgo: 8,
    comment:
      'Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla...',
    user: 'student',
  },
  {
    name: 'Jane Doe (Course Instructor)',
    id: 2,
    daysAgo: 0,
    comment:
      'Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla...',
    user: 'instructor',
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
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        paddingTop: 2,
        width: '100%',
        maxWidth: '100%',
      }}
    >
      <Button
        sx={{
          backgroundColor: '#fff',
          color: 'black',
          paddingY: '8px',
          border: '1px solid black',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '13px',
          width: 'fit-content',
          '&:hover': {
            backgroundColor: 'black',
            color: '#fff',
          },
        }}
        onClick={handleBackClick}
        startIcon={<IoArrowBackCircleOutline />}
      >
        Back to Q&A
      </Button>

      {reviews.map((review) => (
        <ReplyCard
          key={review.id}
          id={review.id}
          name={review.name}
          daysAgo={review.daysAgo}
          comment={review.comment}
          user={review.user}
        />
      ))}

      <Box
        sx={{
          backgroundColor: '#F2E1E8',
          padding: '16px',
          borderRadius: '8px',
          marginTop: '16px',
          maxWidth: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            marginBottom: '8px',
          }}
        >
          <Avatar sx={{ bgcolor: 'grey.500' }}>J</Avatar>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Write a reply?
          </Typography>
        </Box>
        <TextareaAutosize
          minRows={3}
          placeholder="Enter a comment"
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            borderColor: '#ccc',
            fontSize: '16px',
            fontFamily: 'inherit',
            zIndex: 800,
            cursor: 'text',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
          }}
        >
          <Button
            variant="contained"
            sx={{
              marginTop: '8px',
              display: 'flex',
              justifyContent: 'end',
              backgroundColor: '#AC1D7E',
              '&:hover': {
                backgroundColor: '#8C145E',
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
