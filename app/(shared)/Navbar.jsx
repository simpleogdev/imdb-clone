import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { HiInformationCircle } from "react-icons/hi";
import Theme from "./Theme";
const Navbar = () => {
  return (
    <nav className="flex py-8 max-w-[1100px] mx-auto justify-between items-center">
      <div className="md:space-x-10 space-x-5 text-[14px] uppercase cursor-pointer">
        <Link
          className="hover:text-amber-600 md:inline-flex hidden transition"
          href={"/"}
        >
          Home
        </Link>
        <Link
          className="hover:text-amber-600 md:inline-flex hidden transition"
          href={"/about"}
        >
          About
        </Link>
        <Link
          className="hover:text-amber-600 md:hidden inline-flex transition"
          href={"/"}
        >
          {" "}
          <AiFillHome size={30} />{" "}
        </Link>
        <Link
          className="hover:text-amber-600 md:hidden inline-flex transition"
          href={"/about"}
        >
          {" "}
          <HiInformationCircle size={30} />{" "}
        </Link>
      </div>
      <div className="flex items-center justify-center gap-3">
      <Theme />
        <h3 className="bg-amber-500 cursor-pointer font-bold text-2xl px-5 py-1 rounded-md">
          IMDb
        </h3>
        <span className="md:block hidden">Clone</span>
      </div>
    </nav>
  );
};

export default Navbar;
