"use client"

import usePreviewModal from "@/hooks/use-preview-modal"
import Modals from "./ui/modal"
import Photos from "./photos"
import Info from "./info"

const PreviewModal = () => {

    const thisPreviewModal= usePreviewModal()
    const product= usePreviewModal((state)=> state.data)

    if(!product){
        return null
    }

  return (
    <Modals
        open={thisPreviewModal.isOpen}
        onClose={thisPreviewModal.onClose}
    >
        <div className="grid w-full  grid-cols-1 items-start gap-x-5 gap-y-7 sm:grid-cols-12 lg:gap-x-8">
            <div className="sm:col-span-4 lg:col-span-5">
                <Photos images={product.images}/>
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
                <Info data={product}/>
            </div>
        </div>
    </Modals>
  )
}

export default PreviewModal