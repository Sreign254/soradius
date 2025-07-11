"use client"

import { ListOrdered } from "lucide-react"
import React from "react"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { useToolbar } from "./toolbar-provider"

const OrderedListToolbar = () => {
  const { editor } = useToolbar()

  const handleClick = () => {
    editor?.chain().focus().toggleOrderedList().run()
  }

  const isActive = editor?.isActive("orderedList")
  const isDisabled = !editor?.can().chain().focus().toggleOrderedList().run()

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn("h-8 w-8 p-0 sm:h-9 sm:w-9", isActive && "bg-accent")}
          onClick={handleClick}
          disabled={isDisabled}
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <span>Ordered list</span>
      </TooltipContent>
    </Tooltip>
  )
}

export { OrderedListToolbar }
