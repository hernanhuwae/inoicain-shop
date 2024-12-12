"use client"

import { Colour, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation"
import qs from 'query-string'
import Button from "../../../../../components/ui/button";
import { cn } from "@/lib/utils";

interface IFilter{
    data: (Size | Colour)[]
    valueKey:string;
    name:string;
}

export const Filter: React.FC<IFilter> = ({data,valueKey,name}) => {

    const route= useRouter()
    const searchParams= useSearchParams()
    const selectedValue= searchParams.get(valueKey)

    const onClick=(id:string)=>{
        const current= qs.parse(searchParams.toString())

        const query= {
            ...current,
            [valueKey]: id
            
        }

        if(current[valueKey]===id){
            query[valueKey]=null
        }

        const url= qs.stringifyUrl({
            url:window.location.href,
            query
        }, {skipNull:true})
    
        route.push(url)
    }

    
  return (
    <div className="mb-7">
        <h3 className="font-bold text-lg">{name}</h3>
        <hr className="my-4"/>
        <div className="flex flex-wrap gap-3">
            {data.map((filters)=>(
                <div key={filters.id} className="flex items-center">
                    <Button
                        className={cn("rounded-md text-gray-800 px-4 py-2 bg-white border border-gray-500",
                            selectedValue === filters.id && "bg-black text-white"
                        )}     
                        onClick={()=> onClick(filters.id)}
                    >
                        {filters.name}
                    </Button>
                </div>
            ))}
        </div>
    </div>
  
  )
}
