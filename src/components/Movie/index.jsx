import React from 'react';
import './style.css';
const Movie = ({title, poster, year, rating, director, genre}) => {

	return (
<>
<div className='movie'>
    <h2>{title}</h2>
					<img src={`/assets/${poster}`} alt={title}/>
						<p className='movie_text'>{year}</p>
						<p className='movie_rating'>{rating}</p>
						<p className='movie_text'>{director}</p>
                        <p className='movie_text'>{genre}</p>
				</div>
				</>
	)
};


export default Movie;