import Link from "next/link";
import Image from "next/image";
import FetchPopular from "../api/FetchPopular";
import { AiOutlineLike } from "react-icons/ai";
import { revalidatePath } from "next/cache";

const Main = async () => {
  const data = await FetchPopular();
  revalidatePath(data)
  return (
    <div className="sm:grid my-5 flex max-w-[1100px] mx-auto mt-5 mb-10 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2  flex-col sm:items-center sm:justify-center gap-5 grid-rows-4 overflow-hidden">
      {data.map((item) => {
        return (
          <Link
            href={`/movie/${item.id}`}
            key={item.id}
            className=" pb-5 cursor-pointer hover:shadow-slate-400 hover:shadow-md transition dark:border-gray-500 border-gray-200 rounded-lg border-2 flex flex-col  justify-center"
          >
            <Image
              width={1920}
              height={1080}
              className="object-cover mx-auto min-w-[92%] max-w-[92%] min-h-[50%] max-h-[50%] mt-2 rounded-lg"
              src={`https://image.tmdb.org/t/p/original${
                item.backdrop_path || item.poster_path
              }`}
              placeholder="blur"
              blurDataURL="/spinner.svg"
              alt={item.title}
              priority
              quality={100}
            />
            <p className="line-clamp-2  mx-3 mt-2  font-medium">{item.overview}</p>
            <p className="line-clamp-1 mx-3 mt-1 text-lg font-bold">{item.title}</p>
            <div className="flex mt-1 mx-3 items-center">
              <p className="mr-3">{item.release_date}</p>
              <AiOutlineLike className="mr-1" />
              <p>{item.vote_count}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Main;
