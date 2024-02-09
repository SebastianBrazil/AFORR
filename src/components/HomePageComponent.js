import React from 'react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export default function HomePageComponent() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Link to={'/'}
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </Link>
            </header>
        </div>
    )
}
