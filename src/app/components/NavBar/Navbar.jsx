import React from 'react'
import { navs } from '../../data/data';
import './Navbar.css'

export default function Navbar() {
    return (
        <nav
            id="navbar"
            className={`navbar order-last order-lg-0 ${open ? 'navbar-mobile' : undefined
                }`}
        >
            <ul>
                {navList.map(nav => (
                    <li key={nav.id}>
                        <a
                            className={`nav-link scrollto ${nav.active ? 'active' : undefined
                                }`}
                            onClick={() => handleScrollTo(nav.target)}
                        >
                            {nav.name === 'Home' ? (
                                <i className="bi bi-house-door-fill"></i>
                            ) : (
                                nav.name
                            )}
                        </a>
                    </li>
                ))}
            </ul>
            <i
                className="bi bi-list mobile-nav-toggle"
                onClick={handleToggleMenu}
            ></i>
        </nav>
    )
}
