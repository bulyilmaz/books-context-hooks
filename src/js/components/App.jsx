import React, { Component } from "react";

import BookList from "./BookList.jsx";
import BookForm from "./BookForm.jsx";
import BookContextProvider from "../contexts/BookContext.js";

class App extends Component {
    render() {
        return (
            <div className="app">
                <BookContextProvider>
                    <BookList/>
                    <BookForm/>
                </BookContextProvider>
            </div>
        );
    }
}

export default App;