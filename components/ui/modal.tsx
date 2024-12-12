"use client"

import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react"
import { Fragment } from "react"
import IconButton from "./iconbutton"
import { X } from "lucide-react"

interface IModals{
    open:boolean
    onClose: ()=> void
    children: React.ReactNode
}

const Modals: React.FC<IModals> = ({open,onClose,children}) => {

  return (
    <Transition show={open} appear as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={onClose}>
            <div className="fixed inset-0 bg-black bg-opacity-55"/>
            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex justify-center items-center min-h-full p-4 text-center">
                    <TransitionChild as={Fragment}
                       enter="ease-out duration-300"
                       enterFrom="opacity-0 scale-95"
                       enterTo="opacity-100 scale-100"
                       leave="ease-in duration-200"
                       leaveFrom="opacity-100 scale-100"
                       leaveTo="opacity-0 scale-95"
                     >
                        <DialogPanel className="w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle">
                            <div className="relative flex w-full items-center overflow-hidden 
                            bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-5 sm:pt-8 md:p-5 lg:p-7">
                                <div className="absolute right-4 top-4">
                                    <IconButton onClick={onClose} icon={<X size={20}/> } />
                                </div>
                                {children}
                            </div>
                        </DialogPanel>

                     </TransitionChild>
                </div>
            </div>
        </Dialog>
        
    </Transition>
  )
}

export default Modals