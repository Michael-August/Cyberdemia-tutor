"use client";

import { Button, CardHeader } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import * as React from "react";

// Example data for each view
const dailyData = [0, 1, 3, 2, 0, 1, 4, 5, 3, 4, 5, 2, 3, 2, 3, 9];
const weeklyData = [10, 15, 10, 25, 2];
const monthlyData = [100, 200, 300, 400, 500];

// Labels corresponding to each view
const xLabelsDaily = [
  "Feb 9",
  "Feb 10",
  "Feb 11",
  "Feb 12",
  "Feb 13",
  "Feb 14",
  "Feb 15",
  "Feb 19",
  "Feb 20",
  "Feb 21",
  "Feb 22",
  "Feb 23",
  "Feb 24",
  "Feb 25",
  "Feb 26",
  "Feb 27",
];
const xLabelsWeekly = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"];
const xLabelsMonthly = ["Jan", "Feb", "Mar", "Apr", "May"];

export function SimpleLineChart() {
  const [view, setView] = React.useState("day"); // Default view is "day"

  // Function to get the data and labels based on the selected view
  const getData = () => {
    switch (view) {
      case "day":
        return { data: dailyData, labels: xLabelsDaily };
      case "week":
        return { data: weeklyData, labels: xLabelsWeekly };
      case "month":
        return { data: monthlyData, labels: xLabelsMonthly };
      default:
        return { data: dailyData, labels: xLabelsDaily };
    }
  };

  const { data, labels } = getData();

  const buttonStyles = {
    btnActive: {
      backgroundColor: "#FFFFFF",
      colors: "#151515",
    },
  };

  return (
    <div className="border border-[#151515]">
      <div className="flex flex-col md:flex-row md:justify-between w-[100%]">
        <CardHeader title="Student Enrollments" />

        <div className="flex gap-4 my-4  mx-2  bg-gray-300 px-4 w-full md:w-auto md:py-0 md:px-0">
          <Button
            type="button"
            variant="text"
            onClick={() => setView("day")}
            sx={{
              backgroundColor: "#D7D7D7B2",
              color: "#545454B2",
              border: "none",
              ...(view === "day" && buttonStyles.btnActive),
            }}
          >
            Day
          </Button>
          <Button
            type="button"
            variant="text"
            onClick={() => setView("week")}
            sx={{
              backgroundColor: "#D7D7D7B2",
              color: "#545454B2",
              ...(view === "week" && buttonStyles.btnActive),
            }}
          >
            Week
          </Button>
          <Button
            type="button"
            variant="text"
            onClick={() => setView("month")}
            sx={{
              backgroundColor: "#D7D7D7B2",
              color: "#545454B2",
              ...(view === "month" && buttonStyles.btnActive),
            }}
          >
            Month
          </Button>
        </div>
      </div>
      <LineChart
        grid={{ vertical: true, horizontal: true }}
        sx={{ width: "100%", strokeWidth: 2 }}
        height={450}
        series={[{ data, color: "#AC1D7E" }]}
        xAxis={[{ scaleType: "band", data: labels, disableLine: false }]}
        yAxis={[{ disableLine: false, disableTicks: false }]}
      />
    </div>
  );
}
