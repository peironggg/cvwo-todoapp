import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header className = "bg-black py-3 px-10 font-mono text-white text-center"> 
        <h1>Your Todo List!</h1>
        <Link className = "font-sans" to = "/">Home</Link> |
        <Link className = "px-2 font-sans" to = "/about">About</Link>
        </header>
    )
}

export default Header