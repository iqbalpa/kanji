import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'

const navItems = ['N5', 'N4', 'N3', 'N2', 'N1']

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="bg-black">
      <nav className="py-8 sm:py-6 flex justify-center px-4">
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-6 sm:gap-6 md:gap-10 px-8 sm:px-6 md:px-10 py-4 sm:py-3 rounded-lg text-lg sm:text-sm text-gray-300 shadow-lg min-h-[60px] sm:min-h-auto transition-all duration-300 ${
            isScrolled ? 'bg-neutral-900/60 backdrop-blur-sm' : 'bg-neutral-900'
          }`}
        >
          {navItems.map((item, _) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className={`hover:text-white font-bold whitespace-nowrap transition-colors duration-200 text-center ${
                item === 'N5' ? 'text-emerald-400 font-extrabold' : ''
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
