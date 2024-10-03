import React from 'react'
interface IProductDetail {
    id: number
    title: string,
    description: string,
    price: number,
    category: string,
    image: string
}
export default function ProductDetail({product}: {product: IProductDetail}) {
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
        <div>
            <p>
                {product.description}
            </p>
        </div>
    </div>
  )
}
