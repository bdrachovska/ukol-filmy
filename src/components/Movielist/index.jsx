import React from 'react';
import movies from '../../movies';
import Movie from '../Movie';



const Movielist = ({movies}) => {

	return (
<>
<div className='movielist'>
    <ul>{movies.map(movie =>
    <Movie title={movie.title} year={movie.year} rating={movie.rating} director={movie.director} genre={movie.genre} cast={movie.cast}/>
  )}</ul>
</div>
</>
	)
};


export default Movielist;