import {
  Box,
  Button,
  FormControlLabel,
  IconButton,
  Input,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { IoArrowForward, IoMegaphoneOutline } from 'react-icons/io5';
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import { useGetCourses } from '@/hooks/react-query/course-creation/useCourses';
import { useMakeAnnouncements } from '@/hooks/react-query/useCommunication';

// const courses = [
//   'Cyber Security Defense Analyst',
//   'Data Science',
//   'Web Development',
//   // Add more courses here
// ];

const AnnouncementCard = () => {
  const { data: courses } = useGetCourses();

  const [openFirstModal, setOpenFirstModal] = useState(false);
  const [openSecondModal, setOpenSecondModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>('');

  const queryClient = useQueryClient();

  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const { mutate: makeAnnouncement } = useMakeAnnouncements();

  const handleOpenFirstModal = () => setOpenFirstModal(true);
  const handleCloseFirstModal = () => setOpenFirstModal(false);
  const handleOpenSecondModal = () => {
    setOpenFirstModal(false); // Close the first modal
    setOpenSecondModal(true); // Open the second modal
  };
  const handleCloseSecondModal = () => setOpenSecondModal(false);

  const handleCourseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSelectedCourse((event.target as HTMLInputElement).value);
  };

  const handleAnnouncement = () => {
    makeAnnouncement(
      { courseId: selectedCourse, title, message },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['announcements']);
          toast.success('Announcement published!');
          handleCloseFirstModal();
          handleCloseSecondModal();
        },
        onError: (error) => {
          console.error('Announcement failed:', error);
        },
      },
    );
  };

  return (
    <div className="px-5">
      <Button
        variant="contained"
        sx={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'end',
          backgroundColor: '#AC1D7E',
          '&:hover': {
            backgroundColor: '#8C145E',
          },
        }}
        onClick={handleOpenFirstModal}
      >
        Make Announcement
        <IoArrowForward size={20} />
      </Button>

      {/* First Modal */}
      <Modal open={openFirstModal} onClose={handleCloseFirstModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '8px',
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <IconButton color="primary">
              <IoMegaphoneOutline size={60} color="black" />
            </IconButton>
            <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
              Select the course you want to make an announcement for
            </Typography>
          </Box>

          <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
            My courses
          </Typography>

          <RadioGroup value={selectedCourse} onChange={handleCourseChange}>
            {courses?.data?.courses?.map((course: any) => (
              <FormControlLabel
                key={course}
                value={course.id}
                control={
                  <Radio
                    sx={{
                      color: '#AC1D7E',
                      '&.Mui-checked': { color: '#AC1D7E' },
                    }}
                  />
                }
                label={course?.title}
              />
            ))}
          </RadioGroup>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button
              variant="outlined"
              sx={{
                borderColor: '#AC1D7E',
                color: '#AC1D7E',
                '&:hover': {
                  borderColor: '#8C145E',
                  color: '#8C145E',
                },
              }}
              onClick={handleCloseFirstModal}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#AC1D7E',
                '&:hover': {
                  backgroundColor: '#8C145E',
                },
              }}
              onClick={handleOpenSecondModal}
            >
              Next
              <IoArrowForward size={20} />
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Second Modal */}
      {/* Second Modal */}
      <Modal open={openSecondModal} onClose={handleCloseSecondModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '8px',
          }}
        >
          <Typography variant="h6" sx={{ mb: 4 }}>
            My courses
          </Typography>

          {/* Selected Course Radio Button */}
          <RadioGroup value={selectedCourse}>
            <FormControlLabel
              value={selectedCourse}
              control={
                <Radio
                  sx={{
                    color: '#AC1D7E',
                    '&.Mui-checked': { color: '#AC1D7E' },
                  }}
                />
              }
              label={selectedCourse}
            />
          </RadioGroup>

          <Input
            fullWidth
            placeholder="Enter Announcement title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{
              mt: 2, // Add some margin at the top for spacing
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#AC1D7E',
                },
                '&:hover fieldset': {
                  borderColor: '#8C145E',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#AC1D7E',
                },
              },
            }}
          />

          {/* Multiline TextField */}
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder="Enter your announcement here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{
              mt: 2, // Add some margin at the top for spacing
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#AC1D7E',
                },
                '&:hover fieldset': {
                  borderColor: '#8C145E',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#AC1D7E',
                },
              },
            }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button
              variant="outlined"
              sx={{
                borderColor: '#AC1D7E',
                color: '#AC1D7E',
                '&:hover': {
                  borderColor: '#8C145E',
                  color: '#8C145E',
                },
              }}
              onClick={handleCloseSecondModal}
            >
              Back
            </Button>

            <Button
              variant="contained"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#AC1D7E',
                '&:hover': {
                  backgroundColor: '#8C145E',
                },
              }}
              onClick={handleAnnouncement} // Implement your publish action here
            >
              Publish
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AnnouncementCard;
