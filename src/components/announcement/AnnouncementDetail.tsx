import { Avatar, Box, Typography } from '@mui/material';
import moment from 'moment';
import React from 'react';

import { NavigationCrumbs } from '../NavigationCrumbs';

// const comments = [
//   {
//     id: 1,
//     name: 'Blessing K.',
//     timeAgo: '2 days ago',
//     comment:
//       'Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam.',
//   },
//   {
//     id: 2,
//     name: 'John Doe',
//     timeAgo: '3 days ago',
//     comment:
//       'Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam.',
//   },
//   {
//     id: 3,
//     name: 'Jane Doe',
//     timeAgo: '4 days ago',
//     comment:
//       'Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam.',
//   },
//   {
//     id: 4,
//     name: 'Blessing K.',
//     timeAgo: '5 days ago',
//     comment:
//       'Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam.',
//   },
//   {
//     id: 5,
//     name: 'John Doe',
//     timeAgo: '6 days ago',
//     comment:
//       'Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam.',
//   },
// ];

const AnnouncementDetail = ({
  announcementDetails,
}: {
  announcementDetails: any;
}) => {
  const profileData = sessionStorage.getItem('userProfile');

  console.log({ announcementDetails, profileData });

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
            alt={profileData && JSON.parse(profileData).fullName}
            src="https://via.placeholder.com/150"
            sx={{ width: 60, height: 60, mr: 2 }}
          />
          <Box>
            <Typography variant="h6"></Typography>
            <Typography variant="body2" color="text.secondary">
              {profileData && JSON.parse(profileData).fullName}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {moment(announcementDetails?.createdAt).fromNow()}
            </Typography>
          </Box>
        </Box>

        {/* Announcement Title */}
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
          {announcementDetails?.title}
        </Typography>

        {/* Announcement Content */}
        <Typography variant="body2" sx={{ mb: 4, text: '12px' }}>
          {announcementDetails?.message}
        </Typography>
      </Box>
    </Box>
  );
};

export default AnnouncementDetail;
