import Image from "next/image";
import Link from "next/link";
import { AiOutlineLike } from "react-icons/ai";
import axios from "axios";

const FetchPopular = async () => {
  const BASE_URL = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${process.env.API_KEY}`;
  const req = await axios.get(BASE_URL);
  const data = req.data;
  return data.results;
};

const Trending = async () => {
  const data = await FetchPopular();
  return (
    <div className="sm:grid flex max-w-[1100px] mx-auto mt-5 mb-10 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2  flex-col sm:items-center sm:justify-center gap-5 grid-rows-4 overflow-hidden">
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
              quality={100}
              priority
            />
            <p className="line-clamp-2  mx-3 mt-2  font-medium ">
              {item.overview}
            </p>
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

export default Trending;
