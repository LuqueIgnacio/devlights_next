"use client"
import { ICartProduct, IProduct } from "@/types"
import { createContext, useContext, useState, ReactNode } from "react"

const CartContext = createContext<any>(null)

export const CartContextProvider = ({children} : {children: ReactNode}) => {
    const [products, setProducts] = useState<ICartProduct[]>([])

    const addProduct = (product: IProduct) =>{
        const newProducts = products.slice()
        const index = newProducts.findIndex(p => p.id === product.id) 

        if(index == -1){
            newProducts.push(
                {
                    id: product.id,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    title: product.title
                }
            )
            setProducts(newProducts)
        }else{
            newProducts[index].quantity += 1
            setProducts(newProducts)
        }
        
    }

    const minusProduct = (product: IProduct) =>{
        const newProducts = products.slice()
        const index = newProducts.findIndex(p => p.id === product.id) 

        if(index == -1){
            return
        }else{
            newProducts[index].quantity -= 1
            setProducts(newProducts)
        }
        
    }

    const deleteProduct = (product: ICartProduct) =>{
        const newProducts = products.slice()
        const index = newProducts.findIndex(p => p.id === product.id) 

        if(index == -1){
            return
        }else{
            newProducts.splice(index, 1)
            setProducts(newProducts)
        }
        
    }

    return(
        <CartContext.Provider value={ {products, addProduct, minusProduct, deleteProduct}}>
            {children}
        </CartContext.Provider>
    )

}

export function useCartContext(){
    return useContext(CartContext)
}
