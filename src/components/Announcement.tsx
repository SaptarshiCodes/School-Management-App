import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Announcement = () => {
  return (
    <div className="bg-white p-4 rounded-xl">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium">Announcements</h1>
        <div className="flex items-center gap-1 cursor-pointer">
          <span className="text-zinc-500">View All</span>
          <FaArrowRight className="text-xs text-zinc-500 font-light"/>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <div className="bg-skyLight border-2 border-sky rounded-xl p-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-zinc-800">School closed</h2>
            <span className="text-sm font-medium text-zinc-700">25/7/26</span>
          </div>
          <p className="text-sm text-zinc-600 mt-2">
            The school will remain closed on due to heavy rainfall and
            thunderstorm.
          </p>
        </div>
        <div className="bg-purpleLight border-2 border-purple rounded-xl p-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-zinc-800">
              Independence Day Celebration
            </h2>
            <span className="text-sm font-medium text-zinc-700">15/8/26</span>
          </div>
          <p className="text-sm text-zinc-600 mt-2">
            Students should come to school before 7 am for Independence Day
            Celebration.
          </p>
        </div>
        <div className="bg-yellowLight border-2 border-yellow  rounded-xl p-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-zinc-800">Exam Notice</h2>
            <span className="text-sm font-medium text-zinc-700">25/8/26</span>
          </div>
          <p className="text-sm text-zinc-600 mt-2">
            Mid-Term Exam for class 3 to 10 will be started from 25th August.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
