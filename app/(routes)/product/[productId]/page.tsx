import getDetailProduct from "@/action/get-detailproduct";
import getProduct from "@/action/get-product";
import Info from "@/components/info";
import Photos from "@/components/photos";
import Productlist from "@/components/product-list";
import Container from "@/components/ui/container";
import React from "react";

interface IProductDetail {
  params: Promise<{
    productId: string;
  }>
}

const ProductDetailPage:React.FC<IProductDetail> = async ({ params }) => {
  const { productId } = await params;


  const products = await getDetailProduct(productId);
  const suggestionProduct = await getProduct({
    categoryId: products?.Category?.id,
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Photos images={products.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={products} />
            </div>
          </div>
          <hr className="my-10" />
          <Productlist title="Related items" item={suggestionProduct} />
        </div>
      </Container>
    </div>
  );
};

export default ProductDetailPage;
