import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";
import { Saira } from "next/font/google";
import Navbar from "@/components/Navbar";

const saira = Saira({
  subsets: ['latin'],
});

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] sm:w-[8%] lg:w-[14%] p-3">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-3"
        >
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <span
            className={`${saira.className} hidden lg:block uppercase font-bold text-zinc-800 leading-tight scale-y-125`}
          >
            Egra Public School
          </span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[86%] sm:w-[92%] lg:w-[86%] bg-zinc-200/50 overflow-y-scroll">
      <Navbar />
      {children}
      </div>
    </div>
  );
}
