'use client';

import { LineChart } from '@mui/x-charts/LineChart';
import * as React from 'react';

const getDaysOfCurrentMonth = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.toLocaleString('en-US', { month: 'short' }); // e.g., "Feb"
  const daysInMonth = new Date(year, now.getMonth() + 1, 0).getDate(); // Get total days in current month

  return Array.from({ length: daysInMonth }, (_, i) => `${month} ${i + 1}`);
};

const getWeeksUpToCurrentWeek = () => {
  const now = new Date();
  const weekNumber = Math.ceil(now.getDate() / 7) + now.getMonth() * 4; // Approximate week number in year
  return Array.from({ length: weekNumber }, (_, i) => `Week ${i + 1}`);
};

const generateMonths = () => [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const mapDataToXLabels = (xLabels: string[], data: any[]) => {
  const dataMap = new Map(data.map((entry) => [entry.date, entry.count]));
  return xLabels.map((label) => dataMap.get(label) || 0);
};

export function SimpleLineChart({ analyticsData }: { analyticsData: any }) {
  const [view, setView] = React.useState('day');

  const dailyXLabels = getDaysOfCurrentMonth();
  const weeklyXLabels = getWeeksUpToCurrentWeek();
  const monthlyXLabels = generateMonths();

  const dailyData = mapDataToXLabels(
    dailyXLabels,
    analyticsData.dailyEnrollments,
  );
  const weeklyData = mapDataToXLabels(
    weeklyXLabels,
    analyticsData.weeklyEnrollments,
  );
  const monthlyData = mapDataToXLabels(
    monthlyXLabels,
    analyticsData.monthlyEnrollments,
  );

  const getData = () => {
    switch (view) {
      case 'day':
        return { data: dailyData, labels: dailyXLabels };
      case 'week':
        return { data: weeklyData, labels: weeklyXLabels };
      case 'month':
        return { data: monthlyData, labels: monthlyXLabels };
      default:
        return { data: dailyData, labels: dailyXLabels };
    }
  };

  const { data, labels } = getData();

  return (
    <div className="border border-[#151515]">
      <div className="flex flex-col md:flex-row md:justify-between w-full">
        <h2>Student Enrollments</h2>
        <div className="flex gap-4 my-4 mx-2 bg-gray-300 px-4 w-full md:w-auto md:py-0 md:px-0">
          {['day', 'week', 'month'].map((type) => (
            <button
              key={type}
              onClick={() => setView(type)}
              className={`px-4 py-2 ${view === type ? 'bg-white text-black' : 'bg-gray-400 text-gray-700'}`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <LineChart
        grid={{ vertical: true, horizontal: true }}
        sx={{ width: '100%', strokeWidth: 2 }}
        height={450}
        series={[{ data, color: '#AC1D7E' }]}
        xAxis={[{ scaleType: 'band', data: labels, disableLine: false }]}
        yAxis={[{ disableLine: false, disableTicks: false }]}
      />
    </div>
  );
}
