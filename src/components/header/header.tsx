import React from 'react'

const navItems = ['N5', 'N4', 'N3', 'N2', 'N1']

export const Header: React.FC = () => {
  return (
    <nav className="py-6 flex justify-center">
      <div className="flex items-center gap-10 bg-neutral-900 px-10 py-3 rounded-md text-sm text-gray-300 shadow-sm">
        {navItems.map((item, _) => (
          <a
            key={item}
            href={`/${item.toLowerCase()}`}
            className={`hover:text-white font-semibold ${
              item === 'Home' ? 'text-emerald-400 font-medium' : ''
            }`}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  )
}
