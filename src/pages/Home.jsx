import React, { useState } from "react";
import MovieList from "../components/MovieList";
import data from "../data/movies.json";
import SearchBar from "../components/SearchBar";

const Home = () => {
  let [search, setSearch] = useState("");
  let [year, setyear] = useState("");
  let searchedMovies = data.movies
    .filter((i) => {
      return i.title.toLowerCase().includes(search.toLowerCase());
    })
    .filter((i) => {
      if (year) {
        return i.releaseYear == year;
      } else {
        return true;
      }
    });
  return (
    <div>
      <h1>Movie Explorer</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <select
        value={year}
        onChange={(e) => setyear(e.target.value)}
        className="releaseyears"
      >
        <option value="">All</option>
        <option value="2000">2000</option>
        <option value="2001">2001</option>
        <option value="2002">2002</option>
        <option value="2003">2003</option>
        <option value="2004">2004</option>
        <option value="2005">2005</option>
        <option value="2006">2006</option>
        <option value="2007">2007</option>
        <option value="2008">2008</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
        <option value="2011">2011</option>
        <option value="2012">2012</option>
        <option value="2013">2013</option>
        <option value="2014">2014</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
      </select>
      <MovieList movies={searchedMovies} />
    </div>
  );
};

export default Home;
