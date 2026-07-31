"use client";

import Image from "next/image";
import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    income: 2000,
    expense: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    income: 2780,
    expense: 3908,
    amt: 2000,
  },
  {
    name: "May",
    income: 1890,
    expense: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    income: 2390,
    expense: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    income: 3490,
    expense: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    income: 2780,
    expense: 3908,
    amt: 2000,
  },
  {
    name: "Sep",
    income: 1890,
    expense: 4800,
    amt: 2181,
  },
  {
    name: "Oct",
    income: 2390,
    expense: 3800,
    amt: 2500,
  },
  {
    name: "Nov",
    income: 3490,
    expense: 4300,
    amt: 2100,
  },
  {
    name: "Dec",
    income: 3490,
    expense: 4300,
    amt: 2100,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full px-4 py-3">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Finance</h1>
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
          <LineChart
            responsive
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 5,
              bottom: 15,
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
              tickMargin={10}
            />
            <YAxis
              width="auto"
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
              tickMargin={10}
            />
            <Tooltip
              contentStyle={{ borderRadius: "20px", borderColor: "lightgrey" }}
            />
            <Legend
              align="center"
              verticalAlign="top"
              wrapperStyle={{
                paddingBottom: 40,
                paddingTop: 10,
              }}
              formatter={(value) => (
                <span style={{ marginRight: 30 }}>{value}</span>
              )}
            />
            <Line
              type="monotone"
              dataKey="expense"
              stroke="#fae27c"
              strokeWidth={3}
              dot={{
                fill: "var(--color-surface-base)",
              }}
              activeDot={{ r: 6, stroke: "var(--color-surface-base)" }}
            />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#c3ebfa"
              strokeWidth={3}
              dot={{
                fill: "var(--color-surface-base)",
              }}
              activeDot={{ r: 6,stroke: "var(--color-surface-base)" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinanceChart;
