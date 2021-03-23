import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';


export default function NavBar() {
    return (
        <header className="bg-gray-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/"
                        exact
                        activeClassName="text-white"
                        className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-red-800 text-4xl font-bold cursive tracking-widest">
                        Ivan
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-red-800"
                        activeClassName="text-red-100 bg-red-700">
                        Contact
                    </NavLink>
                    <NavLink
                        to="/project"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-red-800"
                        activeClassName="text-red-100 bg-red-700"
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-red-800"
                        activeClassName="text-red-100 bg-red-700"
                    >
                        About
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <socialIcon url="https:linkedin.com/in/ivan-olowo/" className="mr-4" target="_blank" fgColoro="#fff" style={{ height: 35, width: 35 }} />
                    <socialIcon url="https://github.com/ivanolowo" className="mr-4" target="_blank" fgColoro="#fff" style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>
    )
}
