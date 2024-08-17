'use client';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';

import ReviewCard from './ReviewCard';

const reviews = [
  {
    name: 'Emmanuel Sam',
    rating: 4,
    daysAgo: 2,
    comment:
      'Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Ut porttitor et viverra malesuada fringilla. Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Ut porttitor et viverra malesuada fringilla.',
  },
  {
    name: 'Mary Kelechi',
    rating: 3,
    daysAgo: 18,
    comment:
      'Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Ut porttitor et viverra malesuada fringilla. Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Ut porttitor et viverra malesuada fringilla.',
  },
  {
    name: 'John Doe',
    rating: 1,
    daysAgo: 50,
    comment: 'Lorem ipsum dolor sit amet consectetur. Ut port',
  },
  {
    name: 'Jane Doe',
    rating: 5,
    daysAgo: 2,
    comment:
      'Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Ut porttitor et viverra malesuada fringilla. Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Ut porttitor et viverra malesuada fringilla.',
  },
];

const Index = () => {
  const [select, setSelect] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 2,
        padding: 2,
        width: '100%',
        maxWidth: '100%',
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: '100%', sx: '50%', md: '40%', lg: '30%' },
          display: 'flex',
          gap: 2,
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <TextField
          label="Search reviews"
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            marginBottom: 2,
          }}
          inputProps={{ style: { padding: '16px' } }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton size="large" aria-label="search" color="inherit">
                  <SearchIcon
                    onClick={() => {
                      console.log('Search reviews');
                    }}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Select
          value={select}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
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
        <ReviewCard
          key={index}
          name={review.name}
          rating={review.rating}
          daysAgo={review.daysAgo}
          comment={review.comment}
        />
      ))}
    </Box>
  );
};

export default Index;
