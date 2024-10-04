"use client"
import React from 'react'
import { IProductDetail } from '@/types'
import Image from 'next/image'
import { useCartContext } from '@/providers/CartContextProvider'

export default function ProductDetail({product}: {product: IProductDetail}) {
    const {products, setProducts} = useCartContext()

    const handleClick = () =>{
        //const newProducts
        setProducts([...products, product])
    }
  return (
    <div className='flex flex-col justify-center items-center gap-1 border py-3 bg-slate-50 drop-shadow-xl'>
        <div className='p-4'>
            <Image
                src={product.image}
                width={300}
                height={300}
                alt={product.title}
            /> 
                
        </div>

        <div className='w-3/4'>
          <p className='font-semibold truncate text-lg text-center'>{product.title}</p>
        </div>
        <div className='w-3/4'>
            <p className='text-center font-semibold text-base'>{product.category.toUpperCase()}</p>
        </div>
        <div className='w-3/4'>
            <p className='text-center font-semibold text-lg'>${product.price}</p>
        </div>

        <div className='w-3/4'>
            <p>
                {product.description}
            </p>
        </div>

        <button className='w-3/4 p-1 border border-slate-500 rounded-lg text-base text-slate-100 font-semibold bg-slate-500 hover:bg-slate-700'
          onClick={handleClick}>Agregar al carrito
        </button>
        
    </div>
  )
}
