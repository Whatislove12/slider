import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import './layout.css'

export const Layout = () => {
  const menu = [
    {url: '/', name: 'Home'},
    {url: '/minesweeper', name: 'Minesweeper'},
    {url: '/carousel', name: 'Carousel 1'},
    {url: '/crousel2', name: 'Carousel 2'},
    {url: '/crousel3', name: 'Carousel 3'},
  ]

  return (
    <div className='layout'>
    <header>
      <nav>
        <ul>
          {menu.map( item => (
            <li key={item.url}><NavLink to={item.url}>{item.name}</NavLink></li>
          ) )}
        </ul>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <p>© Created with React.js by Vladislav Podymskiy</p>
    </footer>
    </div>
  )
}

