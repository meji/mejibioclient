import React from 'react'

export default function  Header() {
    const toggleMenu = (e) =>{
        e.preventDefault();
        const target = e.currentTarget;
        target.parentNode.querySelector('nav').classList.toggle('active');
    }
    return (
        <header id="header">
            <a id="logo" href="/" title="Go home">Meji</a>
            <nav>
                <ul className="no-style">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <del>Curriculum</del>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                </ul>
            </nav>
            <span id="menu-icon" onClick={e => toggleMenu(e)}>
                <div> </div>
            </span>
        </header>
    )
}

