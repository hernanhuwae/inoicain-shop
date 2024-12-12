import { Product } from '@/types'
import qs from 'query-string'

const URL= `${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query{
    categoryId?:string
    sizeId?:string
    colourId?:string
    isFeatured?:boolean
}

const getProduct= async (query: Query) :Promise<Product[]>=>{

    const url= qs.stringifyUrl({
        url:URL,
        query:{
            categoryId: query.categoryId,
            sizeId: query.sizeId,
            colourId: query.colourId,
            isFeatured: query.isFeatured
        }
    })

    const response= await fetch(url)

    return response.json()
}

export default getProduct