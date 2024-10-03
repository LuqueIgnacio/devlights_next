import ProductDetail from '@/components/ProductDetail'
import React from 'react'

interface IProductDetail {
    id: number
    title: string,
    description: string,
    price: number,
    category: string,
    image: string
}

export default async function page({params}: {params: {id: string}}) {
    const request  = await fetch(process.env.API_PRODUCT + "/products/" + params.id)
    const product: IProductDetail = await request.json()

  return (
    <div>
        <ProductDetail product={product}/>
    </div>
  )
}
