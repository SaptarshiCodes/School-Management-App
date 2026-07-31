"use client";

import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY

const events = [
  {
    id: 1,
    title: "Chess competition",
    date: "12/6/26",
    description: "Interested students should submit their name to Chess teacher.",
  },
  {
    id: 2,
    title: "Quiz competition",
    date: "22/6/26",
    description: "Interested students should submit their name to their respective Class teacher.",
  },
  {
    id: 3,
    title: "Model competition",
    date: "1/7/26",
    description: "Interested students should submit their name to their respective class teacher.",
  },
];

const EventCalander = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-xl">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold mt-5 mb-3">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} className="brightness-50 cursor-pointer"/>
      </div>
      <div className="flex flex-col gap-2">
        {events.map(event => (
          <div className="p-3 rounded-xl border-2 border-gray-200 border-t-4 odd:border-t-sky even:border-t-purple" key={event.id}>
            <div className="flex items-center justify-between">
              <h1 className="mb-1 text-lg font-medium text-zinc-800">{event.title}</h1>
              <span className="font-medium text-zinc-700">{event.date}</span>
            </div>
            <p className="text-sm text-zinc-600">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalander;
