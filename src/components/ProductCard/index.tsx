import React from 'react'
interface IProduct {
    id: number
    title: string,
    price: number,
    category: string,
    image: string
}
export default function ProductCard({product}: {product: IProduct}) {
  return (
    <div>
        <div>
            <img src={product.image}></img>
        </div>
        <p>{product.title}</p>
        <div>
            <p>{product.price}</p>
            <p>{product.category}</p>
        </div>
    </div>
  )
}
