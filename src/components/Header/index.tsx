import React from 'react'
import Link from 'next/link'

const navItems = [
  {
    label: "Home",
    route: "/"
  },
  {
    label: "Products",
    route: "/products"
  },
  {
    label: "Cart",
    route: "/cart"
  },
]


export default function Header() {
  return (
    <header className='flex flex-col p-3 bg-stone-100'>
        <h1 className="font-bold text-xl ">9 de Oro Store</h1>
        <nav className='flex justify-center gap-4'>
          {navItems.map(item => <Link className='font-semibold text-lg' key={item.label} href={item.route}>{item.label}</Link>)}
        </nav>
    </header>
  )
}
