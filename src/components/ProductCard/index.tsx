"use client"
import React from 'react'
import { IProduct } from '@/types'
import { useCartContext } from '@/providers/CartContextProvider'
import Link from 'next/link'
import Image from 'next/image'

export default function ProductCard({product}: {product: IProduct}) {
  const {products, addProduct} = useCartContext()

  const handleClick = () =>{
    //const newProducts
    addProduct(product)
  }
  return (
    <div className='flex flex-col justify-center items-center gap-1 border py-3 bg-slate-50 drop-shadow-xl'>
        <div className='flex w-20 h-20 lg:w-32 lg:h-32'>
            <Image 
              src={product.image} 
              width={300}
              height={300}
              alt={product.title}
              className='w-full h-full'
            />
        </div>

        <div className='w-3/4'>
          <p className='font-semibold truncate text-center'>{product.title}</p>
        </div>
        <div className='w-3/4'>
            <p className='text-center font-semibold text-lg'>${product.price}</p>
        </div>
        
        <button className='w-3/4 lg:w-3/4 p-1 border border-slate-500 rounded-lg text-base text-slate-100 font-semibold bg-slate-500 hover:bg-slate-700'
          onClick={handleClick}>Agregar al carrito
        </button>
        <Link href={"/products/" + product.id} className='
          w-3/4 p-1 border border-stone-300 rounded-lg text-base text-center font-semibold text-slate-100 bg-slate-500 hover:bg-slate-700' 
          onClick={handleClick}>Ver producto
        </Link >
    </div>
  )
}
