import getCategoryId from "@/action/get-categoryId";
import getColour from "@/action/get-colour";
import getProduct from "@/action/get-product";
import getSize from "@/action/get-sizes";
import Billboard from "@/components/billboard";
import { Filter } from "@/app/(routes)/category/[categoryId]/components/filter";
import ProductCard from "@/components/product-card";
import Container from "@/components/ui/container";
import NoResult from "@/components/ui/noresult";
import MobileFilter from "./components/mobile-filter";
import React from "react";

export const revalidate = 0;

interface ICategoryPage {
  params: Promise<{
    categoryId: string;
  }>;
  searchParams: Promise<{
    colorId?: string;
    sizeId?: string;
  }>;
}


const CategoryPage: React.FC<ICategoryPage> = async ({ params, searchParams }) => {

  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const products = await getProduct({
    categoryId: resolvedParams.categoryId,
    colourId: resolvedSearchParams.colorId,
    sizeId: resolvedSearchParams.sizeId,
  });

  const Sizes = await getSize();
  const colour = await getColour();
  const category = await getCategoryId(resolvedParams.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-7">
            <MobileFilter sizes={Sizes} colour={colour} />
            <div className="hidden lg:block">
              <Filter data={Sizes} valueKey="sizeId" name="SIZE" />
              <Filter data={colour} valueKey="colourId" name="COLOUR" />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResult />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((items) => (
                  <ProductCard key={items.id} data={items} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
