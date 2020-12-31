import React from 'react';

const Book = ({volumeInfo}) => (
	<div className="book">
		<img src={volumeInfo.imageLinks.thumbnail} alt={volumeInfo.title}/>
		<div className="book-info">
			<h3>{volumeInfo.title}</h3>
			<span>{volumeInfo.averageRating}</span>
		</div>
		<div className="book-over">
		<h2>Overview:</h2>
		<p>{volumeInfo.description}</p>
		</div>
	</div>
	)

export default Book;