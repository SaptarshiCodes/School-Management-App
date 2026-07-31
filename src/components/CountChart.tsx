"use client";

import {
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import React from "react";
import Image from "next/image";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "white",
  },
  {
    name: "Girls",
    count: 45,
    fill: "#fae27c",
  },
  {
    name: "Boys",
    count: 55,
    fill: "#c3ebfa",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full px-4 py-3">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Students</h1>
        <Image
          src="/moreDark.png"
          alt=""
          width={20}
          height={20}
          className="brightness-50 cursor-pointer"
        />
      </div>
      {/* CHART */}
      <div className="relative h-[70%] w-full">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={20}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image src="/maleFemale.png" alt="" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16 text-center mt-1">
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 bg-sky rounded-full"></div>
          <h1 className="text-lg font-medium">1,234</h1>
          <h2 className="text-sm text-zinc-600">Boys (55%)</h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 bg-yellow rounded-full"></div>
          <h1 className="text-lg font-medium">1,234</h1>
          <h2 className="text-sm text-zinc-600">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
