import React from 'react';
import DataTable from 'react-data-table-component';
import { useGetCourses } from '@/hooks/react-query/course-creation/useCourses';
import { useGetLabs } from '@/hooks/react-query/useCommunication';

import Loader from '../loader';

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

const LabTable = () => {
  const { data: labs, isLoading } = useGetLabs();
  const { data: courses } = useGetCourses();
  const columns = [
    {
      name: 'Course',
      selector: (row: {
        courseId: string;
        createdAt: string;
        id: string;
        title: string;
        externalLink: string;
      }) => {
        const course = courses?.data?.courses?.find(
          (c: any) => c.id === row.courseId,
        );
        return course ? course?.title : 'Unknown Course';
      },
      sortable: true,
    },
    {
      name: 'Title',
      selector: (row: {
        courseId: string;
        createdAt: string;
        id: string;
        title: string;
        externalLink: string;
      }) => row.title,
      sortable: true,
    },
    {
      name: 'Link',
      selector: (row: {
        courseId: string;
        createdAt: string;
        id: string;
        title: string;
        externalLink: string;
      }) => row.externalLink,
      sortable: true,
    },
    {
      name: 'Date',
      selector: (row: {
        courseId: string;
        createdAt: string;
        id: string;
        title: string;
        externalLink: string;
      }) => new Date(row.createdAt).toLocaleDateString(),
      sortable: true,
    },
    // {
    //   cell: (row: { courseId: string; createdAt: string; id: string }) => (
    //     <Button
    //       sx={{
    //         backgroundColor: '#fff',
    //         color: '#AC1D7E',
    //         width: '100px',
    //         paddingY: '8px',
    //         display: 'flex',
    //         border: '1px solid #AC1D7E',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         textAlign: 'center',
    //         fontSize: '13px',
    //         gap: '8px',
    //         '&:hover': {
    //           backgroundColor: '#AC1D7E',
    //           color: '#fff',
    //         },
    //       }}
    //       onClick={() =>
    //         router.push(`/tutor/communication/announcement/${row.id}`)
    //       }
    //     >
    //       View
    //       <GoArrowRight size={19} />
    //     </Button>
    //   ),
    //   ignoreRowClick: true,
    //   allowOverflow: true,
    //   button: true,
    //   width: '120px',
    // },
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
          data={labs?.data}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="600px"
        />
      )}
    </div>
  );
};

export default LabTable;
