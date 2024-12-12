"use client";

import Button from "@/components/ui/button";
import IconButton from "@/components/ui/iconbutton";
import { Colour, Size } from "@/types";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import { Filter } from "./filter";

interface IMobileFilter {
  sizes: Size[];
  colour: Colour[];
}

const MobileFliter: React.FC<IMobileFilter> = ({ sizes, colour }) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={onOpen}
        className="flex text-white items-center gap-x-2 lg:hidden"
      >
        Filter
        <Plus size={25} />
      </Button>

      <Dialog
        open={open}
        onClose={onClose}
        as="div"
        className="relative z-40 lg:hidden"
      >
        {/* Background */}

        <div className="fixed inset-0 bg-black bg-opacity-25" />

        {/* Hamburger */}
        <div className="flex fixed inset-0 z-40 ">
          <DialogPanel className="bg-white flex flex-col h-full w-full relative ml-auto max-w-[50%] overflow-y-auto py-4 pb-5 shadow-xl ">
            {/* close button */}
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} onClick={onClose} />} />
            </div>

            {/* Render Filters */}
            <div className="p-5">
              <Filter data={sizes} valueKey="sizeId" name="SIZE" />
              <Filter data={colour} valueKey="colourId" name="COLOUR" />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFliter;
