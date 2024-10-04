"use client"
import React from 'react'
import { ICartProduct } from '@/types'
import Image from 'next/image'
import { useCartContext } from '@/providers/CartContextProvider'

export default function CartProduct({product}: {product: ICartProduct}) {
    const {products, addProduct, minusProduct, deleteProduct} = useCartContext()

    if(products.length > 0 ){
        return (
            <div className='flex flex-col lg:flex-row items-center border p-4 drop-shadow-xl'>
                <div className='flex w-20 h-20 lg:w-32 lg:h-32'>
                    <Image 
                    src={product.image} 
                    width={300}
                    height={300}
                    alt={product.title}
                    className='w-full h-full'
                    />
                </div>
    
                <div className='w-1/3'>
                <p className='font-semibold truncate text-center'>{product.title}</p>
                </div>
    
                <div className='w-1/12'>
                    <p className='text-center font-semibold text-lg'>${product.price}</p>
                </div>
    
                <div className='flex justify-center items-center gap-3 w-2/3 '>
                    {product.quantity > 1 ? (
                        <button onClick={() => minusProduct(product)} className='p-2 text-lg text-slate-50 bg-slate-500 hover:bg-slate-700 rounded-full'>-</button>
                    ): null}
                    <p>Cantidad: {product.quantity}</p>
                    <button onClick={() => addProduct(product)} className='p-2 text-lg text-slate-50 bg-slate-500 hover:bg-slate-700 rounded-full'>+</button>
                </div>
    
                <div className=''>
                    <button onClick={() => deleteProduct(product)} className='p-2 text-lg text-slate-50 bg-slate-500 hover:bg-slate-700 rounded-md'>Borrar</button>
                </div>
            </div>
        )
    }else{
        return (
            <div >
                <p>El carrito está vacio</p>
            </div>
        )
    }

    
    
}
