"use client"

import React, { useEffect, useState } from 'react'
import Button from './ui/button'
import { ShoppingBag } from 'lucide-react'
import useCartShop from '@/hooks/use-cart'
import { useRouter } from 'next/navigation'

const NavbarAction = () => {
    const [isMounted, setIsMounted]= useState(false)

    const cart = useCartShop()
    const route= useRouter()

    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted){
        return null
    }

  return (
    <div className='flex items-center gap-x-4 ml-auto'>
        <Button onClick={()=> route.push("/cart")} className='flex items-center rounded-full bg-black px-4 py-2'>
            <ShoppingBag size={20} color='white'/>
            <span className='text-white ml-2 font-medium'>{cart.item.length}</span>
        </Button>
    </div>
  )
}

export default NavbarAction