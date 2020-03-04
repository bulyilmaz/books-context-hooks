import React, { createContext, useReducer, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";

import BookReducer from "../reducers/BookReducer.js";

export const BookContext = createContext();

const BookContextProvider = props => {
    const initialBooks = localStorage.getItem("books") !== null ? JSON.parse(localStorage.getItem("books")) : [
        {
            title: "Kitap 1",
            author: "Yazar 1",
            id: uuidv1()
        },
        {
            title: "Kitap 2",
            author: "Yazar 2",
            id: uuidv1()
        }
    ];
    const [books, dispatch] = useReducer(BookReducer, initialBooks);

    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books));
    }, [books]);

    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;