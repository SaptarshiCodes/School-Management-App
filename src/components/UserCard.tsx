import Image from "next/image";
import React from "react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-purple even:bg-yellow p-3 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-xs bg-white px-2 py-1 rounded-full text-green-700">2024/25</span>
        <Image src="/more.png" alt="" width={17} height={17} className="cursor-pointer" />
      </div>
      <div className="mt-3 px-2">
        <h1 className="text-xl font-medium">1,234</h1>
        <h2 className="capitalize text-zinc-600 text-sm">{type}</h2>
      </div>
    </div>
  );
};

export default UserCard;
