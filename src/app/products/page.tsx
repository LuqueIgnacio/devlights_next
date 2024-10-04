import ProductCard from '@/components/ProductCard'
import React from 'react'
import { IProduct } from '@/types'

export default async function page() {
    const request  = await fetch(process.env.API_HOST + "/products?limit=10")
    const products: IProduct[] = await request.json()
    return (
       <div className='flex flex-col lg:m-auto lg:w-3/4 lg:grid lg:grid-cols-3 gap-2'>
            {products.map(product => {
                return(
                    <ProductCard key={product.id} product={product}/>
                )
            })}
       </div>
    )
}
