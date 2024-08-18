import { Button, IconButton } from "@mui/material";
import React from "react";
import DataTable from "react-data-table-component";
import { GoArrowRight } from "react-icons/go";
import { IoPencilOutline, IoTrashOutline } from "react-icons/io5";

const data = [
  {
    id: 1,
    course: "Cyber Security Defense Analyst",
    date: "20-04-2024",
    comments: 12,
  },
  {
    id: 2,
    course: "Data Science",
    date: "20-04-2024",
    comments: 12,
  },
  {
    id: 3,
    course: "Web Development",
    date: "20-04-2024",
    comments: 12,
  },
  {
    id: 4,
    course: "Web Development",
    date: "20-04-2024",
    comments: 12,
  },
  {
    id: 5,
    course: "Web Development",
    date: "20-04-2024",
    comments: 12,
  },
  {
    id: 6,
    course: "Web Development",
    date: "20-04-2024",
    comments: 12,
  },
  {
    id: 7,
    course: "Web Development",
    date: "20-04-2024",
    comments: 12,
  },
  {
    id: 8,
    course: "Web Development",
    date: "20-04-2024",
    comments: 12,
  },
  {
    id: 9,
    course: "Web Development",
    date: "20-04-2024",
    comments: 12,
  },
  {
    id: 10,
    course: "Web Development",
    date: "20-04-2024",
    comments: 12,
  },
  {
    id: 11,
    course: "Web Development",
    date: "20-04-2024",
    comments: 12,
  },
  {
    id: 12,
    course: "Web Development",
    date: "20-04-2024",
    comments: 12,
  },
  {
    id: 13,
    course: "Web Development",
    date: "20-04-2024",
    comments: 12,
  },
  {
    id: 14,
    course: "Web Development",
    date: "20-04-2024",
    comments: 12,
  },
  {
    id: 15,
    course: "Web Development",
    date: "20-04-2024",
    comments: 12,
  },
  {
    id: 16,
    course: "Web Development",
    date: "20-04-2024",
    comments: 12,
  },
];

const columns = [
  {
    name: "Course",
    selector: (row: { course: any }) => row.course,
    sortable: true,
  },
  {
    name: "Date",
    selector: (row: { date: any }) => row.date,
    sortable: true,
  },
  {
    name: "Comments",
    selector: (row: { comments: any }) => row.comments,
  },
  {
    name: "Actions",
    cell: () => (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <IconButton>
          <IoPencilOutline />
        </IconButton>
        <IconButton color="error">
          <IoTrashOutline />
        </IconButton>
      </div>
    ),
    width: "150px",
  },
  {
    cell: () => (
      <Button
        sx={{
          backgroundColor: "#fff",
          color: "#AC1D7E",
          width: "100px",
          paddingY: "8px",
          display: "flex",
          border: "1px solid #AC1D7E",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontSize: "13px",
          gap: "8px",
          "&:hover": {
            backgroundColor: "#AC1D7E",
            color: "#fff",
          },
        }}
      >
        View
        <GoArrowRight size={19} />
      </Button>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
    width: "120px",
  },
];

const customStyles = {
  headCells: {
    style: {
      backgroundColor: "#ffff",
      fontWeight: "bold",
      fontSize: "14px",
      textTransform: "uppercase" as const,
    },
  },
  cells: {
    style: {
      textTransform: "capitalize" as const,
    },
  },
};

const AnnouncementTable = () => {
  return (
    <div className="rounded-[.5rem] px-2 bg-white shadow">
      <DataTable
        highlightOnHover={true}
        responsive={true}
        customStyles={customStyles}
        columns={columns}
        data={data}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="600px"
      />
    </div>
  );
};

export default AnnouncementTable;
