import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Router } from "react-router-dom"
import Header from './Header/Header.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
class App extends Component {
    render() {
        return ( <
            BrowserRouter >
            <
            div className = 'appWrapper' >
            <
            Header / >
            <
            Sidebar / >
            <
            /div>  <
            /
            BrowserRouter >
        );
    }
}

export default App;