'use client';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { GoArrowRight } from 'react-icons/go';

interface TableRow {
  id: number;
  name: string;
  enrolled: string;
  'last visited': string;
  progress: string;
  'question asked': number;
  'question answer': number;
}

const EventDatas = [
  {
    id: 1,
    name: 'Abraham Oluwaseun',
    enrolled: '2021-10-10',
    'last visited': '2021-10-10',
    progress: '50%',
    'question asked': 10,
    'question answer': 5,
  },
  {
    id: 2,
    name: 'Maria Johnson',
    enrolled: '2022-03-15',
    'last visited': '2022-04-01',
    progress: '80%',
    'question asked': 15,
    'question answer': 12,
  },
  {
    id: 3,
    name: 'John Doe',
    enrolled: '2021-12-05',
    'last visited': '2022-01-10',
    progress: '70%',
    'question asked': 8,
    'question answer': 6,
  },
  {
    id: 4,
    name: 'Olivia Williams',
    enrolled: '2023-06-20',
    'last visited': '2023-07-15',
    progress: '40%',
    'question asked': 20,
    'question answer': 14,
  },
  {
    id: 5,
    name: 'Ethan Brown',
    enrolled: '2022-08-10',
    'last visited': '2022-09-25',
    progress: '65%',
    'question asked': 25,
    'question answer': 20,
  },
];

const StudentTable: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<TableRow | null>(null);

  React.useEffect(() => {
    if (selectedEvent) {
    }
  }, [selectedEvent]);

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

  const columns: TableColumn<TableRow>[] = [
    {
      name: 'name',
      selector: (row: { name: any }) => row.name,
      sortable: true,
    },

    {
      name: 'enrolled',
      selector: (row: { enrolled: any }) => row.enrolled,
      sortable: true,
    },
    {
      name: 'Last Visited',
      selector: (row: { 'last visited': any }) => row['last visited'],
      sortable: true,
    },
    {
      name: 'Progress',
      selector: (row: { progress: any }) => row.progress,
      sortable: true,
    },
    {
      name: 'Question Asked',
      selector: (row: { 'question asked': any }) => row['question asked'],
      sortable: true,
    },
    {
      name: 'Question Answered',
      selector: (row: { 'question answer': any }) => row['question answer'],
      sortable: true,
    },

    {
      name: 'Action',
      cell: (row: React.SetStateAction<TableRow | null>) => (
        <div className="flex justify-end cursor-pointer">
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
            onClick={() => setSelectedEvent(row)}
          >
            Message
            <GoArrowRight size={19} />
          </Button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: '15rem',
    },
  ];

  return (
    <div className="rounded-[.5rem] px-2 bg-white shadow">
      <DataTable
        highlightOnHover={true}
        responsive={true}
        customStyles={customStyles}
        columns={columns}
        data={EventDatas}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="600px"
      />
    </div>
  );
};

export default StudentTable;
