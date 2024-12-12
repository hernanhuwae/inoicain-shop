import { Product } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ICart{
    item: Product[]
    addItem: (data: Product) => void
    removeItem: (id:string) => void
    removeAll: () => void
} 

const useCartShop= create(
    persist<ICart>((set,get)=>({
        item:[],
        addItem:(data: Product)=>{
            const currentItem= get().item
            const existingItem= currentItem.find((items)=> items.id === data.id)

            if(existingItem){
                return toast.error("Barang sudah ada di Keranjang")
            }

            set({item: [...get().item, data]})
            toast.success("Barang ditambahkan di keranjang!")
        },

        removeItem: (id:string)=>{
            set({item: [...get().item.filter((items)=> items.id !== id)]})
            toast.success("Barang terhapus di Keranjang!")
        },
        removeAll: () => set({item:[]})
    }),{
        name: "cart-storage",
        storage: createJSONStorage(()=>localStorage)
    })
)

export default useCartShop