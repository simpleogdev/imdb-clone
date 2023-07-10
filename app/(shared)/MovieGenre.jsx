import Link from "next/link";
const MovieGenre = () => {
  return (
    <div className="flex font-bold rounded-lg min-w-full dark:bg-gray-600 bg-amber-100 gap-10 text-lg py- items-center justify-center">
      <Link
        href={"/trending"}
        className={`hover:text-amber-500 
       p-2 transition cursor-pointer m-4 rounded-m`}
      >
        Trending
      </Link>
      <Link href={"/top-rated"} className="hover:text-amber-500 transition cursor-pointer">
        Top Rated
      </Link>
    </div>
  );
};

export default MovieGenre;
//  bg-[#485563]
// bg-[#485563]