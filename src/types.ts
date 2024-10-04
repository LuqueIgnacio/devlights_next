export interface IProduct {
    id: number
    title: string,
    price: number,
    category: string,
    image: string
}
export interface IProductDetail {
    id: number
    title: string,
    description: string,
    price: number,
    category: string,
    image: string
}

export interface ICartProduct {
    id: number
    title: string,
    price: number,
    image: string,
    quantity: number
}