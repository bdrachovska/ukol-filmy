import React from 'react';

const Movie = ({title, poster, year, rating, director, genre, cast}) => {

	return (
<>
<div className='movie'>
    <h2>{title}</h2>
					<img src= {`/assets/${poster}`} alt={title}/>
						<p className='movie_text'>{year}</p>
						<p className='movie_rating'>{rating}</p>
						<p className='movie_text'>{director}</p>
                        <p className='movie_text'>{genre}</p>
                        <p className='movie_cast'>{cast}</p>
				</div>
				</>
	)
};


export default Movie;