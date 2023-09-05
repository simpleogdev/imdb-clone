import Image from "next/image";

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  return await res.json();
}

const MoviePage = async ({ params }) => {
  const movieId = params.id;
  const movie = await getMovie(movieId);
  return (
    <div className="w-full">
      <div className="flex md:flex-row max-w-[1100px] mx-auto flex-col items-center justify-center mt-5">
        <Image
          className="rounded-lg"
          // src={`https://image.tmdb.org/t/p/original${
          //   movie.backdrop_path || movie.poster_path
          // }`}
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          style={{ maxWidth: "100%", height: "100%" }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt={movie.title}
          quality={100}
          priority
        />
        <div className="px-6">
          <h3 className="font-semibold md:mt-0 mt-5 text-lg">{movie.title || movie.name}</h3>
          <p className="mt-4 leading-[1.95]">
            {" "}
            <strong>Overview:</strong> {movie.overview}
          </p>
          <p className="mt-4">
            {" "}
            <strong className="mr-1">Date Released: </strong> {movie.release_date}{" "}
          </p>
          <p className="mt-4">
            {" "}
            <strong className="mr-1">Rating: </strong> {movie.vote_count}{" "}
          </p>
        </div> 
      </div>
    </div>
  );
};

export default MoviePage;
