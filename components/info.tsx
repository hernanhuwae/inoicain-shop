import { Product } from "@/types";
import Currency from "./ui/currency";
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";

interface IInfo {
  data: Product;
}

const Info: React.FC<IInfo> = ({ data }) => {

  console.log(data?.Size?.name);
  

  return (
    <div>
      <h1 className="font-bold text-3xl text-black">{data.name}</h1>
      <div className="flex mt-3 items-end justify-between">
        <span className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </span>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-5">
        <div className="flex items-center gap-x-4">
          <h3 className="font-bold text-black ">Size:</h3>
          <div className="font-semibold text-red-700 ">{data?.Size?.name}</div>
        </div>

        <div className="flex items-center gap-x-4">
          <h3 className="font-bold text-black ">Colour:</h3>
          <div
            className="h-5 w-5 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.Colour?.value }}
          ></div>
        </div>
      </div>

      <div className="mt-10 flex items-center gap-x-3">
        <Button className="text-white flex items-center gap-x-2">
            Add To Cart
            <ShoppingCart/>
        </Button>
      </div>
    </div>
  );
};

export default Info;
