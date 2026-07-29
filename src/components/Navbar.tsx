import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-3'>
      {/* SEARCH BAR */}
      <div className='flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-zinc-500 bg-zinc-100 p-1.5'>
        <Image src="/search.png" alt='' width={15} height={15} className='brightness-0 contrast-50'/>
        <input type='text' placeholder='Search' className='bg-transparent outline-none w-[15vw]'/>
      </div>
      {/* ICONS AND USER */}
      <div className='flex items-center gap-[1.5vw]'>
        <div className='bg-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer'>
          <Image src="/message.png" alt='' width={20} height={20} className='brightness-0'/>
        </div>

        <div className='bg-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer relative'>
          <Image src="/announcement.png" alt='' width={23} height={23} className='brightness-0 contrast-150'/>
          <div className='absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-purple-600 text-white rounded-full text-xs'>1</div>
        </div>

        <div className='flex flex-col'>
          <span className='text-xs leading-3 font-medium whitespace-nowrap'>John Doe</span>
          <span className='text-xs leading-3 text-zinc-600 text-right'>Admin</span>
        </div>
        <Image src="/avatar.png" alt='' width={30} height={30} className='rounded-full' />
      </div>
    </div>
  )
}

export default Navbar