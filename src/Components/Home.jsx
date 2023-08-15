import React, { useEffect, useState } from "react";
import axios from "axios";

const apiKey = "715e3a7a2deae5ac0d22d9631fc28425";
const imgUrl = "https://image.tmdb.org/t/p/original/";

const url = "https://api.themoviedb.org/3";
const top_rated = "top_rated";
const popular = "popular";
const now_playing = "now_playing";

const Cart = ({ img }) => <img src={img} alt="cover" />;

const Row = ({ title, arr = [] }) => (
  <div>
    <h2>{title}</h2>
    <div className="flex overflow-x-auto">
      {arr.map((item, index) => (
        <div
          key={index}
          className=" p-[0.8rem] flex-shrink-0 w-[200px]  md:w-[300p] hover:-translate-y-5  hover:transform hover:scale-105 transition-transform duration-300  "
        >
          <Cart img={`${imgUrl}/${item.poster_path}`} />
        </div>
      ))}
    </div>
  </div>
);

const Home = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [now_playingMovies, setnow_playingMovies] = useState([]);

  useEffect(() => {
    const fetchTopRated = async () => {
      try {
        const response = await axios.get(
          `${url}/movie/${top_rated}?api_key=${apiKey}`
        );
        const data = response.data.results;
        setTopRatedMovies(data);
      } catch (error) {
        console.error("Error fetching top-rated movies:", error);
      }
    };
    fetchTopRated();

    const fetchPopular = async () => {
      try {
        const response = await axios.get(
          `${url}/movie/${popular}?api_key=${apiKey}`
        );
        const data = response.data.results;
        setPopularMovies(data);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchPopular();

    const fetchnow_playing = async () => {
      try {
        const response = await axios.get(
          `${url}/movie/${now_playing}?api_key=${apiKey}`
        );
        const data = response.data.results;
        setnow_playingMovies(data);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchnow_playing();
  }, []);

  return (
    <section>
      {popularMovies.length > 3 && popularMovies[6] && (
    <div className="bg-no-repeat  h-[600px] relative bg-black text-cyan-700">
      <img
        className="w-[100%] object-cover h-[100%] absolute opacity-50"
        src={`${imgUrl}/${popularMovies[6].poster_path}`}
        
      />
      <h1 className="text-white font-medium md:p-6 mt-[320px] text-4xl md:text-5xl absolute">
        {popularMovies[6].original_title}
      </h1>
      <h1 className="  font-light  md:h-max md:w-[50%] text-white absolute p-2 md:p-6 mt-[370px] md:mt-[405px]">
        {popularMovies[6].overview}
      </h1>

      <div className=" md:p-1 p-4" >
      <button className=" absolute md:ml-[100px] mt-[500px] bg-white text-black text-lg font-semibold py-2 px-11 rounded-full shadow-lg hover:bg-red-600 transition duration-300">
      Play 
    </button>
    <button className=" hidden md:flex absolute ml-[150px]  md:ml-[250px] mt-[500px] bg-white text-black text-lg font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gray-400 transition duration-300">
      My List +
    </button>
      </div>
    </div>
    
  )}

      <div className="bg-black text-white font-normal text-2xl">
        <Row title={"Top Rated Movie"} arr={topRatedMovies} />

        <Row title={"Popular"} arr={popularMovies} />
        <Row title={"Now PlayingMovies"} arr={now_playingMovies} />
      </div>
    </section>
  );
};

export default Home;
