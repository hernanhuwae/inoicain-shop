import { Colour, Size } from "@/types"

const URL= `${process.env.NEXT_PUBLIC_API_URL}/colour`

const getColour= async (): Promise<Colour[]>=>{

    const response= await fetch(URL)

    return response.json()
    
}

export default getColour