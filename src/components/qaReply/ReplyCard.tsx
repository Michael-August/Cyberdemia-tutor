'use client';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import React, { useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

type ReplyCardProps = {
  name: string;
  daysAgo: number;
  comment: string;
  id: number;
  user: string;
};

const ReplyCard: React.FC<ReplyCardProps> = ({
  name,
  daysAgo,
  comment,
  user,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment);

  const subheader = daysAgo === 0 ? 'Just now' : `${daysAgo} days ago`;

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Here you would typically update the comment via a backend API call
    console.log(`Saving comment: ${editedComment}`);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedComment(comment); // Reset to original comment if canceled
  };

  return (
    <Card sx={{ maxWidth: '100%', marginBottom: 2 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: grey[800] }}>{name.charAt(0)}</Avatar>}
        title={name}
        subheader={subheader}
        action={
          user === 'instructor' && (
            <Box>
              <IconButton onClick={handleEditClick}>
                <MdEdit size={20} />
              </IconButton>
              <IconButton>
                <MdDelete size={20} color="red" />
              </IconButton>
            </Box>
          )
        }
      />
      <CardContent>
        {isEditing ? (
          <Box>
            <TextareaAutosize
              minRows={3}
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                borderColor: '#8C145E',
                fontSize: '16px',
                fontFamily: 'inherit',
                zIndex: 800,
                cursor: 'text',
              }}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: 1,
                marginTop: 1,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handleSaveClick}
                sx={{
                  backgroundColor: '#AC1D7E',
                  '&:hover': {
                    backgroundColor: '#8C145E',
                  },
                }}
              >
                Save
              </Button>
              <Button
                variant="text"
                color="secondary"
                onClick={handleCancelClick}
                sx={{
                  color: '#AC1D7E',
                  '&:hover': {
                    backgroundColor: '#F2E1E8',
                  },
                }}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        ) : (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: 'justify' }}
          >
            {editedComment}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default ReplyCard;
