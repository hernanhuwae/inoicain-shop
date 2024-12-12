"use client"

import Container from "@/components/ui/container"
import useCartShop from "@/hooks/use-cart"
import { useEffect, useState } from "react"
import CartItem from "./components/cart-item"
import Transaction from "./components/transaction"

 
const CartPage = () => {
    const cart= useCartShop()
    const [isMounted, setIsMounted]= useState(false)

    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted){
        return null
    }

  return (
    <div className="bg-white">
        <Container>
            <div className="px-4 py-16 sm:px-6 py-px-8">
                <h1 className="text-3xl font-bold text-black">Shopping Cart Items</h1>
                <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                    <div className="lg:col-span-7">
                        {cart.item.length === 0 && <p className="text-neutral-500">No items added to cart</p>}

                        <ul>
                            {cart.item.map((items)=>(
                                <CartItem key={items.id} datas={items}/>
                            ))}
                        </ul>
                    </div>
                    <Transaction/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default CartPage