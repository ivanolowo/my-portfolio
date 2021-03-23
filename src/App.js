import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Project from './Components/Project';
import NavBar from './Components/NavBar'
import "tailwindcss/tailwind.css"


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={Contact} path='/contact' />
        <Route component={Project} path='/project' />
      </switch>
    </BrowserRouter>
  )
}

export default App;
