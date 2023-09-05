import axios from "axios";

export const revalidate = 3600 // revalidate at most every hour

const FetchPopular = async () => {
  const API_KEY = process.env.API_KEY
  const BASE_URL = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`
  const req = await axios.get(BASE_URL);
  const data = req.data;
  return data.results
};

export default FetchPopular;
