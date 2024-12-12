"use client"

import { useEffect, useState } from "react"

const formatted =new Intl.NumberFormat("id-ID", {
    style:'currency',
    currency:'IDR'
  })

interface ICurrency{
    value?: string | number
}

const Currency: React.FC<ICurrency> = ({value}) => {

    const[isMounted, setIsMounted]= useState(false)

    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted){
        return null
    }

  return (
    <div className='font-semibold'>{formatted.format(Number(value))}</div>
  )
}

export default Currency