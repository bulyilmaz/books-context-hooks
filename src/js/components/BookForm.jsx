import React, { useContext, useState } from "react";

import { BookContext } from "../contexts/BookContext.js";

const BookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const handleSubmit = event => {
        event.preventDefault();

        dispatch({type: "ADD_BOOK", book: {
                title,
                author
            }});
        setTitle("");
        setAuthor("");
    };

    return (
        <div className="bookForm">
            <form onSubmit={handleSubmit}>
                <input name="title" value={title} onChange={event => setTitle(event.target.value)}/>
                <input name="author" value={author} onChange={event => setAuthor(event.target.value)}/>
                <input type="submit" value="add"/>
            </form>
        </div>
    );
};

export default BookForm;