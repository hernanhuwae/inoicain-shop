import { Size } from "@/types"

const URL= `${process.env.NEXT_PUBLIC_API_URL}/size`

const getSize = async (): Promise<Size[]>=>{

    const response= await fetch(URL)

    return response.json()
    
}


export default getSize