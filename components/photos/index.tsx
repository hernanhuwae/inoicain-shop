"use client"

import { Image as ImageType } from "@/types"
import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react"
import GalleryTab from "./gallerytab"
import Image from "next/image"


interface IPhotos{
    images: ImageType[]
}

const Photos: React.FC<IPhotos> = ({images}) => {
  return (

    // todo: npm install @headlessui/react dan ini adalah tab image-image kecil
     <TabGroup as="div" className="flex flex-col-reverse">  
        <div className="mx-auto mt-6 w-full hidden max-w-2xl sm:block lg:max-w-none">
            <TabList className="grid grid-cols-4 gap-6">
                {images.map((image)=>(
                    <GalleryTab key={image.id} image={image}/> //Todo: Gallery tab buat setting per image tab kecil
                ))}
            </TabList>
        </div>

        {/* //Todo: Image Besar */}
        <TabPanels className="w-full aspect-square ">
            {images.map((image)=>(
                <TabPanel key={image.id}>
                    <div className="aspect-square relative h-full w-full overflow-hidden sm:rounded-lg">
                        <Image fill src={image.url} alt="image" className="object-cover object-center"/>
                    </div>
                </TabPanel>
            ))}
        </TabPanels>
     </TabGroup> 
  )
}

export default Photos