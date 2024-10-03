import ProductCard from '@/components/ProductCard'
import React from 'react'
interface IProduct {
    id: number
    title: string,
    price: number,
    category: string,
    image: string
}

export default async function page() {
    const request  = await fetch(process.env.API_HOST + "/products?limit=5")
    const products: IProduct[] = await request.json()
    return (
       <div>
            {products.map(product => {
                return(
                    <ProductCard key={product.id} product={product}/>
                )
            })}
       </div>
    )
}
