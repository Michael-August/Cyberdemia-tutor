'use client';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Rating,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import React, { useState } from 'react';

type ReviewCardProps = {
  name: string;
  rating: number;
  daysAgo: number;
  comment: string;
};

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  rating,
  daysAgo,
  comment,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const shortComment = comment.slice(0, 220);
  return (
    <Card sx={{ maxWidth: '100%', marginBottom: 2 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: grey[800] }}>{name.charAt(0)}</Avatar>}
        title={name}
        subheader={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Rating value={rating} precision={0.5} readOnly />
            {daysAgo} days ago
          </Box>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {expanded ? comment : `${shortComment}...`}
        </Typography>
        <Button onClick={handleExpandClick} size="small" sx={{ marginTop: 1 }}>
          {expanded ? 'See less' : 'See more'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
