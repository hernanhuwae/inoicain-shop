"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./ui/iconbutton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./ui/currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCartShop from "@/hooks/use-cart";

interface IProductCard {
  data: Product;
}

const ProductCard: React.FC<IProductCard> = ({ data }) => {
  const previewModals = usePreviewModal()
  const router= useRouter()
  const cart= useCartShop()

  const onPreview : MouseEventHandler<HTMLButtonElement> = (event) =>{
    event.stopPropagation()
    previewModals.onOpen(data)
  }

  const onAddToCart : MouseEventHandler<HTMLButtonElement>= (event)=>{
    event.stopPropagation()
    cart.addItem(data)
  }

  const handleClick= ()=>{
    router.push(`/product/${data?.id}`)
  }

  return (
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      {/* Image & Actions */}
      <div className="relative aspect-square rounded-xl bg-gray-200">
        <Image
          alt="Image"
          src={data.images?.[0]?.url}  //Todo: set domain image di next.config.ts

          fill
          className="aspect-square object-cover rounded-md"
        />{" "}
        <div className="absolute w-full bottom-5 opacity-0 group-hover:opacity-100 transition">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />

            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>

      {/* Description Product */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-600 ">{data.Category?.name}</p>
        
      </div>

      {/* Price Product */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price}/>
      </div>

    </div>
  );
};

export default ProductCard;
