import { Product } from "@/types";
import React from "react";
import NoResult from "./ui/noresult";
import ProductCard from "./product-card";

interface IProductlist {
  item: Product[];
  title: string;
}

const Productlist: React.FC<IProductlist> = ({ item, title }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-3xl font-bold">{title}</h3>
      {item.length===0 && <NoResult/>}
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {item.map((items)=>(
          <ProductCard data={items} key={items.id}/>
        ))}
      </div>
    </div>
  );
};

export default Productlist;
