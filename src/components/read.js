import Movies from "./movies";
import { useEffect, useState } from "react";
import axios from "axios";

const Read = () => {

  const [movies, setMovies] = useState([]);

<<<<<<< HEAD
  const Reload = () => {
    console.log("Reloading movie data...");
    axios.get('http://localhost:4000/api/movies')
=======
  useEffect(() => {
    
    axios.get('http://localhost:4000/api/movies') //asynchronously requests data from server
>>>>>>> 702825cddaeedafa3e6cc50623b7d6fa07366117
      .then((response) => {
        setMovies(response.data.movies);
      })
      .catch((error) => {
        console.error("Error reloading data:", error);
      });
  };

  useEffect(() => {
      Reload();
  });

  return (
    <div>
      <h3>Movie List</h3>
      <Movies myMovies={movies} ReloadData={Reload}/>
    </div>
  );
}

export default Read;
