import { Avatar, Box, Divider, Paper,Typography } from '@mui/material';
import React from 'react';

import { NavigationCrumbs } from '../NavigationCrumbs';

const comments = [
  {
    id: 1,
    name: 'Blessing K.',
    timeAgo: '2 days ago',
    comment:
      'Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam.',
  },
  {
    id: 2,
    name: 'John Doe',
    timeAgo: '3 days ago',
    comment:
      'Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam.',
  },
  {
    id: 3,
    name: 'Jane Doe',
    timeAgo: '4 days ago',
    comment:
      'Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam.',
  },
  {
    id: 4,
    name: 'Blessing K.',
    timeAgo: '5 days ago',
    comment:
      'Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam.',
  },
  {
    id: 5,
    name: 'John Doe',
    timeAgo: '6 days ago',
    comment:
      'Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam.',
  },
];

const AnnouncementDetail = () => {
  return (
    <Box>
      <Box
        sx={{
          ml: 5,
        }}
      >
        <NavigationCrumbs />
      </Box>
      <Box sx={{ p: 5 }}>
        {/* Announcement Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Avatar
            alt="Jane Doe"
            src="https://via.placeholder.com/150"
            sx={{ width: 60, height: 60, mr: 2 }}
          />
          <Box>
            <Typography variant="h6">Jane Doe</Typography>
            <Typography variant="body2" color="text.secondary">
              Cyber Security Expert
            </Typography>
            <Typography variant="caption" color="text.secondary">
              1 day ago
            </Typography>
          </Box>
        </Box>

        {/* Announcement Title */}
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
          Title of the announcement will be entered here!
        </Typography>

        {/* Announcement Content */}
        <Typography variant="body2" sx={{ mb: 4, text: '12px' }}>
          Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra
          malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id
          pellentesque interdum. Vestibulum convallis velit feugiat aliquam
          pellentesque etiam. Ut auctor dui neque aliquet tempor. Elementum amet
          dui auctor interdum. Dolor in aliquam blandit lectus pretium. Aliquam
          malesuada aliquam ac in. Urna sit mauris faucibus lectus elementum
          ipsum. Proin quis velit elementum dui aliquam euismod a placerat
          consectetur. Arcu proin et parturient nisl semper bibendum enim eget
          etiam. Neque penatibus iaculis non ultrices augue. Platea tellus ut
          sit lectus. Ligula aliquam tristique egestas semper facilisis erat. Ut
          auctor dui neque aliquet tempor. Elementum amet dui auctor interdum.
          Dolor in aliquam blandit lectus pretium. Aliquam malesuada aliquam ac
          in. Urna sit mauris faucibus lectus elementum ipsum. Proin quis velit
          elementum dui aliquam euismod a placerat consectetur. Arcu proin et
          parturient nisl semper bibendum enim eget etiam. Neque penatibus
          iaculis non ultrices augue. Platea tellus ut sit lectus. Ligula
          aliquam tristique egestas semper facilisis erat. Platea tellus ut sit
          lectus. Ligula aliquam tristique egestas semper facilisis erat.
        </Typography>

        <Divider />

        {/* Comments Section */}
        <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
          Comments
        </Typography>

        {comments.map((comment) => (
          <Paper
            key={comment.id}
            elevation={0}
            sx={{
              p: 2,
              mb: 2,
              display: 'flex',
              borderBottom: '2px solid #f0f0f0',
            }}
          >
            <Avatar sx={{ mr: 2 }}>B</Avatar>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {comment.name}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ mb: 1 }}
              >
                {comment.timeAgo}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textAlign: 'justify',
                }}
              >
                {comment.comment}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default AnnouncementDetail;
