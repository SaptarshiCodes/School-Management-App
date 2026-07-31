import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";
import { Saira } from "next/font/google";
import Navbar from "@/components/Navbar";

const saira = Saira({
  subsets: ["latin"],
});

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[14%] h-screen flex flex-col bg-white border-r border-zinc-200">
        <div className="lg:px-3 py-4">
          <Link
            href="/"
            className="flex items-center justify-center lg:justify-start gap-3 flex-shrink-0 mb-2"
          >
            <Image src="/logo.png" alt="logo" width={50} height={50} />
            <span
              className={`${saira.className} hidden lg:block uppercase font-bold text-zinc-800 leading-tight scale-y-125`}
            >
              Egra Public School
            </span>
          </Link>
        </div>
        <div className="flex-1 overflow-y-auto overflow-x-hidden sidebar-scroll">
          <Menu />
        </div>
      </div>
      {/* RIGHT */}
      <div className="relative w-[86%] md:w-[92%] lg:w-[86%] bg-zinc-200/50 overflow-y-scroll overflow-x-hidden">
        <Navbar />
        <div>{children}</div>
      </div>
    </div>
  );
}
