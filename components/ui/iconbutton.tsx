import { cn } from "@/lib/utils"
import React, { MouseEventHandler } from "react"

interface IIconButton{
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
    icon: React.ReactElement
    className?: string
}

const IconButton: React.FC<IIconButton> = ({onClick,icon,className}) => {
  return (
    <button onClick={onClick} className={cn("flex items-center justify-center rounded-full border bg-white shadow-md p-2 hover:scale-110 transition", className)}>
        {icon}
    </button>
  )
}

export default IconButton
