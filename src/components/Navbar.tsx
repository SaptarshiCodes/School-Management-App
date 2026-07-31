import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div
      className="sticky top-0 z-50 w-full flex items-center justify-between
                px-[1vw] py-3
                bg-zinc-200/50 backdrop-blur-3xl
                border border-white/30
                shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
    >
      {/* SEARCH BAR */}
      <div
        className="flex items-center gap-2
                rounded-full
                bg-white
                px-4 py-2
                border border-zinc-200
                shadow-sm
                focus-within:ring-2
                focus-within:ring-violet-500
                transition-all duration-300"
      >
        <Image
          src="/search.png"
          alt=""
          width={15}
          height={15}
          className="brightness-0 contrast-50"
        />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-[18vw]"
        />
      </div>
      {/* ICONS AND USER */}
      <div className="flex items-center gap-[2vw]">
        <div
          className="w-10 h-10 flex items-center justify-center
           rounded-full
           bg-white
           border border-zinc-200
           shadow-sm
           hover:bg-violet-50
           hover:scale-105
           transition-all duration-200
           cursor-pointer"
        >
          <Image
            src="/message.png"
            alt=""
            width={20}
            height={20}
            className="brightness-0"
          />
        </div>

        <div
          className="w-10 h-10 flex items-center justify-center
           rounded-full
           bg-white
           border border-zinc-200
           shadow-sm
           hover:bg-violet-50
           hover:scale-105
           transition-all duration-200
           cursor-pointer relative"
        >
          <Image
            src="/announcement.png"
            alt=""
            width={23}
            height={23}
            className="brightness-0 contrast-150"
          />
          <div
            className="absolute -top-2 -right-1
                w-5 h-5
                flex items-center justify-center
                rounded-full
                bg-violet-600
                text-white
                text-[10px]
                font-semibold
                ring-2 ring-white"
          >
            1
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium whitespace-nowrap">
            John Doe
          </span>
          <span className="text-xs leading-3 text-zinc-600 text-right">
            Admin
          </span>
        </div>
        <Image
          src="/avatar.png"
          alt=""
          width={36}
          height={36}
          className="rounded-full border-2 border-violet-200 shadow-sm"
        />
      </div>
    </div>
  );
};

export default Navbar;
