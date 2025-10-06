import "../css/Favorite.css"
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
function Favorite(){
    const {favorites} = useMovieContext();

    if (favorites){
        return(
        <div className="favorites">
            <h2>YOUR FAVORITES</h2>
            <div className="movies_grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
        </div>
        )
    }
    return(
        <div className="favorites-empty">
            <h2>No Favorite Movies yet</h2>
            <p>start adding movies to your favorite and they will appear here.</p>
        </div>
    )
}
export default Favorite;