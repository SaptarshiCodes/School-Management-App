"use client";

import Image from "next/image";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 40,
    absent: 24,
  },
  {
    name: "Tue",
    present: 30,
    absent: 13,
  },
  {
    name: "Wed",
    present: 20,
    absent: 98,
  },
  {
    name: "Thu",
    present: 27,
    absent: 39,
  },
  {
    name: "Fri",
    present: 18,
    absent: 48,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full px-4 py-3">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Attandance</h1>
        <Image
          src="/moreDark.png"
          alt=""
          height={20}
          width={20}
          className="brightness-50 cursor-pointer"
        />
      </div>
      <div className="w-full h-[90%]">
        <ResponsiveContainer>
          <BarChart
            responsive
            data={data}
            margin={{
              top: 5,
              right: 15,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#ddd"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
            />
            <YAxis
              width="auto"
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{ borderRadius: "20px", borderColor: "lightgrey" }}
            />
            <Legend
              align="left"
              verticalAlign="top"
              wrapperStyle={{
                paddingBottom: 40,
                paddingTop: 10,
              }}
              formatter={(value) => (
                <span style={{ marginRight: 30 }}>{value}</span>
              )}
            />
            <Bar
              dataKey="present"
              fill="#fae27c"
              radius={[10, 10, 0, 0]}
              legendType="circle"
            />
            <Bar
              dataKey="absent"
              fill="#c3ebfa"
              radius={[10, 10, 0, 0]}
              legendType="circle"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
