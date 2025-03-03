import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import DataTable from 'react-data-table-component';
import { GoArrowRight } from 'react-icons/go';

import { useGetCourses } from '@/hooks/react-query/course-creation/useCourses';
import { useGetAnnouncements } from '@/hooks/react-query/useCommunication';

import Loader from '../loader';

// const data = [
//   {
//     id: 1,
//     course: 'Cyber Security Defense Analyst',
//     date: '20-04-2024',
//     comments: 12,
//   },
//   {
//     id: 2,
//     course: 'Data Science',
//     date: '20-04-2024',
//     comments: 12,
//   },
//   {
//     id: 3,
//     course: 'Web Development',
//     date: '20-04-2024',
//     comments: 12,
//   },
//   {
//     id: 4,
//     course: 'Web Development',
//     date: '20-04-2024',
//     comments: 12,
//   },
//   {
//     id: 5,
//     course: 'Web Development',
//     date: '20-04-2024',
//     comments: 12,
//   },
//   {
//     id: 6,
//     course: 'Web Development',
//     date: '20-04-2024',
//     comments: 12,
//   },
//   {
//     id: 7,
//     course: 'Web Development',
//     date: '20-04-2024',
//     comments: 12,
//   },
//   {
//     id: 8,
//     course: 'Web Development',
//     date: '20-04-2024',
//     comments: 12,
//   },
//   {
//     id: 9,
//     course: 'Web Development',
//     date: '20-04-2024',
//     comments: 12,
//   },
//   {
//     id: 10,
//     course: 'Web Development',
//     date: '20-04-2024',
//     comments: 12,
//   },
//   {
//     id: 11,
//     course: 'Web Development',
//     date: '20-04-2024',
//     comments: 12,
//   },
//   {
//     id: 12,
//     course: 'Web Development',
//     date: '20-04-2024',
//     comments: 12,
//   },
//   {
//     id: 13,
//     course: 'Web Development',
//     date: '20-04-2024',
//     comments: 12,
//   },
//   {
//     id: 14,
//     course: 'Web Development',
//     date: '20-04-2024',
//     comments: 12,
//   },
//   {
//     id: 15,
//     course: 'Web Development',
//     date: '20-04-2024',
//     comments: 12,
//   },
//   {
//     id: 16,
//     course: 'Web Development',
//     date: '20-04-2024',
//     comments: 12,
//   },
// ];

const customStyles = {
  headCells: {
    style: {
      backgroundColor: '#ffff',
      fontWeight: 'bold',
      fontSize: '14px',
      textTransform: 'uppercase' as const,
    },
  },
  cells: {
    style: {
      textTransform: 'capitalize' as const,
    },
  },
};

const AnnouncementTable = () => {
  const router = useRouter();
  const { data: announcements, isLoading } = useGetAnnouncements();
  const { data: courses } = useGetCourses();
  const columns = [
    {
      name: 'Course',
      selector: (row: { courseId: string; createdAt: string; id: string }) => {
        const course = courses?.data?.courses?.find(
          (c: any) => c.id === row.courseId,
        );
        return course ? course?.title : 'Unknown Course';
      },
      sortable: true,
    },
    {
      name: 'Date',
      selector: (row: { courseId: string; createdAt: string; id: string }) =>
        new Date(row.createdAt).toLocaleDateString(),
      sortable: true,
    },
    {
      cell: (row: { courseId: string; createdAt: string; id: string }) => (
        <Button
          sx={{
            backgroundColor: '#fff',
            color: '#AC1D7E',
            width: '100px',
            paddingY: '8px',
            display: 'flex',
            border: '1px solid #AC1D7E',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            fontSize: '13px',
            gap: '8px',
            '&:hover': {
              backgroundColor: '#AC1D7E',
              color: '#fff',
            },
          }}
          onClick={() =>
            router.push(`/tutor/communication/announcement/${row.id}`)
          }
        >
          View
          <GoArrowRight size={19} />
        </Button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: '120px',
    },
  ];

  return (
    <div className="rounded-[.5rem] px-2 bg-white shadow">
      {isLoading ? (
        <Loader />
      ) : (
        <DataTable
          highlightOnHover={true}
          responsive={true}
          customStyles={customStyles}
          columns={columns}
          data={announcements}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="600px"
        />
      )}
    </div>
  );
};

export default AnnouncementTable;
