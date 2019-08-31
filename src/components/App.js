import React, { Component } from 'react';
import '../styles/App.scss';
import { Route } from "react-router-dom";
import { BrowserRouter, Router } from "react-router-dom"
import Header from './Header/Header.jsx';
class App extends Component {
    render() {
        return ( <
            BrowserRouter >
            <
            div >
            <
            Header / >
            <
            /div> <
            /BrowserRouter>
        );
    }
}

export default App;