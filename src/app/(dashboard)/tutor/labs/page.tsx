'use client';
import LabTable from '@/components/lab-table/LabTable';
import { useGetCourses } from '@/hooks/react-query/course-creation/useCourses';
import { useMakeLab } from '@/hooks/react-query/useCommunication';
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

const Page: React.FC = () => {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState('');
  const [instruction, setInstruction] = useState('');
  const [externalLink, setExternalLink] = useState('');

  const { data: courses } = useGetCourses();

  const [openFirstModal, setOpenFirstModal] = useState(false);
  const [openSecondModal, setOpenSecondModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>('');

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

  const { mutate: createLab } = useMakeLab();

  const handleLabCreation = () => {
    createLab(
      { courseId: selectedCourse, title, instruction, externalLink },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['labs']);
          toast.success('Lab published!');
          handleCloseFirstModal();
          handleCloseSecondModal();
        },
        onError: (error) => {
          console.error('Lab failed:', error);
        },
      },
    );
  };

  return (
    <div className="md:w-[65%] px-5 grid gap-y-5 md:pb-20 pb-10 pt-5 md:pt-0">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-[16px] font-extrabold">
            Create Virtual Labs Challenge
          </h1>
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
            Create Lab
            <IoArrowForward size={20} />
          </Button>
        </div>

        <span className="text-[12px] font-normal text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra
          malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id
          pellentesque interdum. Vestibulum convallis velit feugiat aliquam
          pellentesque etiam. In posuere purus aliquet dolor pretium eget
          dictum. Ut auctor dui neque aliquet tempor. Elementum amet duis auctor
          interdum. Dolor in aliquam blandit lectus pretium. Aliquam malesuada
          aliquam ac in. Urna sit mauris faucibus lectus elementum ipsum. Proin
          quis velit elementum dui aliquam euismod a placerat consectetur. Arcu
          proin et parturient nisl semper bibendum enim eget etiam. Neque
          penatibus iaculis non ultrices augue.
        </span>
      </div>

      <LabTable />

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
              Select the course you want to create a lab for
            </Typography>
          </Box>

          <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
            My courses
          </Typography>
          {courses?.data?.courses?.length === 0 && (
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
              No courses available
            </Typography>
          )}
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
            placeholder="Enter Lab title"
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

          <Input
            fullWidth
            type="url"
            placeholder="Enter External Link"
            value={externalLink}
            onChange={(e) => setExternalLink(e.target.value)}
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
            placeholder="Enter your Lab Instructions here"
            value={instruction}
            onChange={(e) => setInstruction(e.target.value)}
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
              onClick={handleLabCreation}
            >
              Publish
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default Page;
