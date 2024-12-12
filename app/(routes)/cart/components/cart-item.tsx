"use client";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/iconbutton";
import useCartShop from "@/hooks/use-cart";
import { Product } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";

interface ICartItem {
  datas: Product;
}

const CartItem: React.FC<ICartItem> = ({ datas }) => {
  
  const cart= useCartShop()

  const onRemove=()=>{
    cart.removeItem(datas.id)
  }

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={datas.images[0].url}
          alt="images"
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-col flex-1 relative ml-4 justify-between sm:ml-5">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={20} />} />
        </div>

        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-5 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{datas.name}</p>
          </div>

          <div className="flex mt-1 text-sm">
            <p className="text-gray-500 ">{datas.Colour.name}</p>
            <p className="text-red-500 ml-4  border-l border-gray-200 pl-4">
              {datas.Size.name}
            </p>
          </div>
          <Currency value={datas.price}/>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
