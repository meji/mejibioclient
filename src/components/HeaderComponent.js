import React, { useEffect } from 'react'

export default function  Header() {
    return (
        <header id="header">
            <a id="logo" href="/" title="Go home">Meji</a>
            <nav>
                <ul className="no-style">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="cv">Curriculum</a>
                    </li>
                    <li>
                        <a href="projects">Projects</a>
                    </li>
                </ul>
            </nav>
            <span id="menu-icon">
                <div> </div>
            </span>
        </header>
    )
}

