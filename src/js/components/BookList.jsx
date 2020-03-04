import React, { useContext } from "react";

import BookDetail from "./BookDetail.jsx";

import { BookContext } from "../contexts/BookContext.js";

const BookList = () => {
    const { books } = useContext(BookContext);

    return (
        <div className="bookList">
            <p>{books.length} adet kitap var.</p>
            <ul>
                {books.map(book => (
                    <BookDetail book={book} key={book.id}/>
                ))}
            </ul>
        </div>
    );
};

export default BookList;