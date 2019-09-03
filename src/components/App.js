import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Router } from "react-router-dom"
import Header from './Header/Header.jsx';
class App extends Component {
    render() {
        return ( <
            BrowserRouter >
            <
            div className = 'appWrapper' >
            <
            Header / >
            <
            /div> < /
            BrowserRouter >
        );
    }
}

export default App;