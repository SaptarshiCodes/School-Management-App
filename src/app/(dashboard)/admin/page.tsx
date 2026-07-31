import Announcement from '@/components/Announcement';
import AttendanceChart from '@/components/AttendanceChart';
import CountChart from '@/components/CountChart';
import EventCalander from '@/components/EventCalander';
import FinanceChart from '@/components/FinanceChart';
import UserCard from '@/components/UserCard';
import React from 'react'

const AdminPage = () => {
  return (
    <div className='p-3 flex gap-3 flex-col lg:flex-row'>
      {/* LEFT */}
      <div className='w-full lg:w-2/3 flex flex-col gap-3'>
        {/* USER CARDS */}
        <div className='flex gap-2 justify-between flex-wrap'>
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* MIDDLE CHART */}
        <div className='flex gap-3 flex-col md:flex-row'>
          {/* COUNT CHART */}
          <div className='w-full md:w-1/3 h-[450px]'>
            <CountChart />
          </div>
          {/* ATTANDANCE CHART */}
          <div className='w-full md:w-2/3 h-[450px]'>
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className='w-full h-[500px]'>
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className='w-full lg:w-1/3 flex flex-col gap-3'>
        <EventCalander />
        <Announcement />
      </div>
    </div>
  )
}

export default AdminPage;