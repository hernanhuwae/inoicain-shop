import { Billboard as Billboardtype } from '@/types'
import React from 'react'

interface IBillboard{
    data:Billboardtype
}

const Billboard: React.FC<IBillboard> = ({data}) => {
  return (
    <div className='p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden'>
        <div
        className='relative bg-cover overflow-hidden rounded-xl w-full h-[500px] aspect-square md:aspect[2.4/1]'
         style={{backgroundImage:`url(${data?.imageUrl})`}}>
            <div className='h-full w-full flex flex-col justify-center items-center text-center gap-y-8'>
                <div className='font-bold text-3xl sm:text-5xl lg:text-6xl max-w-xs sm:max-w-xl'>
                  {data.label}
                </div>
            </div>
         </div>
    </div>
  )
}

export default Billboard