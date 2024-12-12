import { Category } from "@/types"

const URL= `${process.env.NEXT_PUBLIC_API_URL}/category`

const getCategoryId= async (id:string) : Promise<Category>=>{

    const response= await fetch(`${URL}/${id}`)

    return response.json()
}

export default getCategoryId