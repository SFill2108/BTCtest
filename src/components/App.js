import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Router } from "react-router-dom"
import Header from './Header/Header.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import Catalog from './Catalog/Catalog.jsx';

class App extends Component {
    render() {
        return ( < BrowserRouter >
            <
            div className = 'appWrapper' >
            <
            Header / >
            <
            Sidebar / >
            <
            Catalog / >
            <
            /div>  < /
            BrowserRouter >
        );
    }
}

export default App;