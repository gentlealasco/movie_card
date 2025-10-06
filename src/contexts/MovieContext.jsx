import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [ favorites, setFavorite ] = useState([]);
  console.log("MovieProvider Mounted");

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    let parsed = [];
  
    if (storedFavs) {
      try {
        parsed = JSON.parse(storedFavs);
        if (!Array.isArray(parsed)) parsed = [];
      } catch (e) {
        console.error("Corrupted localStorage data for favorites", e);
      }
    }
  
    setFavorite(parsed);
  }, []);
  
  useEffect(
    () => {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    },
    [ favorites ]
  );

  const addToFavorite = (movie) => {
    setFavorite((prev) => [...prev, movie]);
  };

  const removeFromFavorite = (movieId) => {
    setFavorite((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = {
    favorites,
    addToFavorite,
    removeFromFavorite,
    isFavorite,
  };

  return <MovieContext.Provider value={value}>
    {children}
    </MovieContext.Provider>;
};


