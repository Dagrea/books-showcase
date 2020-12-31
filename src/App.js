import React, { useEffect, useState } from 'react';
import './App.css';
import Book from './components/Book';

const BOOK_API = "https://www.googleapis.com/books/v1/volumes?q=harry+potter";

function App() {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		fetch(BOOK_API)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setBooks(data.items);
			});
	}, [])

    return (
    	<div className="book-container">
    	{books.length > 0 && books.map((book) => 
    		<Book key={book.id} {...book}/>)}
    	</div>
  );
}

export default App;
