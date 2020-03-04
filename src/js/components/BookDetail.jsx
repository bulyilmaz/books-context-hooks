import React, { useContext } from "react";

import { BookContext } from "../contexts/BookContext.js";

const BookDetail = ({ book }) => {
    const { dispatch } = useContext(BookContext);

    return (
        <li>{book.title}, {book.author} <button onClick={() => dispatch({type: "REMOVE_BOOK", id: book.id})}>remove book</button></li>
    );
};

export default BookDetail;