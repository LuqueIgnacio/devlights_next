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
  {
    label: "Contact",
    route: "/contact"
  }
]


export default function Header() {
  return (
    <header>
        <h1>Tienda</h1>
        <nav>
          {navItems.map(item => <Link key={item.label} href={item.route}>{item.label}</Link>)}
        </nav>
    </header>
  )
}
