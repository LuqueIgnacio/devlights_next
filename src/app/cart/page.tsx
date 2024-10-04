"use client"
import React from 'react'
import { useCartContext } from '@/providers/CartContextProvider'
import CartProduct from '@/components/CartProduct'

export default function page() {
  const {products} = useCartContext()

  if(products.length < 1){
    return (
      <div className='flex flex-col lg:m-auto lg:flex-row items-center border p-4 drop-shadow-xl'>
          <p>El carrito está vacio</p>
      </div>
  )
  }
  return (
    <div className='flex flex-col lg:m-auto lg:w-3/4 gap-4'>
      {products.map(product => {
        return (
          <CartProduct key={product.id} product={product}/>
        )
      })}
    </div>
  )
}
