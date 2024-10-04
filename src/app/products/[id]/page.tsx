import ProductDetail from '@/components/ProductDetail'
import React from 'react'
import { IProductDetail } from '@/types'

export default async function page({params}: {params: {id: string}}) {
    const request  = await fetch(process.env.API_HOST + "/products/" + params.id)
    const product: IProductDetail = await request.json()
  return (
    <div className='w-3/4 m-auto'>
        <ProductDetail product={product}/>
    </div>
  )
}
