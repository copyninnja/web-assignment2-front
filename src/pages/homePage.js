import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import {AuthContext} from '../contexts/authContext';
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const context1 = useContext(AuthContext);

  const movies = context.movies.filter((m) => {  // New
    return !("favorite" in m);
  });
// console.log(context1.username);
// console.log(context1.isAuthenticated);

  return (
    context1.isAuthenticated!=false ?
    <PageTemplate
      title="No. Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
    />
    :<p>
      you are not login
    </p>
  );
};

export default MovieListPage;