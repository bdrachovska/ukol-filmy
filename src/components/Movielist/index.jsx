import React from 'react';
import movies from '../../movies'
import Movie from '../Movie';



const Movielist = ({movies}) => {

	return (
<>
{movies.map (movie =>
    <Movie key={movie.id} title={movie.title} year={movie.year} rating={movie.rating} director={movie.director} genre={movie.genre} cast={movie.cast}/>
      )}
</>
	)
};


export default Movielist;