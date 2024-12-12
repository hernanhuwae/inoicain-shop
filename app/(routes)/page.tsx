import getBillboard from '@/action/get-billboard'
import getProduct from '@/action/get-product';
import Billboard from '@/components/billboard'
import Productlist from '@/components/product-list';
import Container from '@/components/ui/container'
import React from 'react'

export const revalidate=0;

const HomePage = async () => {

  const Billboards= await getBillboard("c664b523-8c69-4f19-9bd2-c3979e6911fa")
  const Products= await getProduct({isFeatured:true})

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={Billboards}/>
      </div>
      <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
        <Productlist item={Products} title='Best Our Products'/>
      </div>
    </Container>
  )
}

export default HomePage