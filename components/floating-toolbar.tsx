"use client"

import { BubbleMenu, type Editor } from "@tiptap/react"
import { BoldToolbar } from "@/components/toolbars/bold"
import { ItalicToolbar } from "@/components/toolbars/italic"
import { UnderlineToolbar } from "@/components/toolbars/underline"
import { LinkToolbar } from "@/components/toolbars/link"
import { ColorHighlightToolbar } from "@/components/toolbars/color-and-highlight"
import { ToolbarProvider } from "@/components/toolbars/toolbar-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { useMediaQuery } from "@/hooks/use-media-querry"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { HeadingsToolbar } from "@/components/toolbars/headings"
import { BulletListToolbar } from "@/components/toolbars/bullet-list"
import { OrderedListToolbar } from "@/components/toolbars/ordered-list"
import { ImagePlaceholderToolbar } from "@/components/toolbars/image-placeholder-toolbar"
import { AlignmentTooolbar } from "@/components/toolbars/alignment"
import { BlockquoteToolbar } from "@/components/toolbars/blockquote"
import { useEffect } from "react"

export function FloatingToolbar({ editor }: { editor: Editor | null }) {
  const isMobile = useMediaQuery("(max-width: 640px)")

  // Prevent default context menu on mobile
  useEffect(() => {
    if (!editor?.options.element || !isMobile) return

    const handleContextMenu = (e: Event) => {
      e.preventDefault()
    }

    const el = editor.options.element
    el.addEventListener("contextmenu", handleContextMenu)

    return () => el.removeEventListener("contextmenu", handleContextMenu)
  }, [editor, isMobile])

  if (!editor) return null

  if (isMobile) {
    return (
      <TooltipProvider>
        <BubbleMenu
          tippyOptions={{
            duration: 100,
            placement: "bottom",
            offset: [0, 10],
          }}
          shouldShow={() => {
            // Show toolbar when editor is focused and has selection
            return editor.isEditable && editor.isFocused
          }}
          editor={editor}
          className="w-full min-w-full mx-0 shadow-sm border rounded-sm bg-background"
        >
          <ToolbarProvider editor={editor}>
            <ScrollArea className="h-fit py-0.5 w-full">
              <div className="flex items-center px-2 gap-0.5">
                <div className="flex items-center gap-0.5 p-1">
                  {/* Primary formatting */}
                  <BoldToolbar />
                  <ItalicToolbar />
                  <UnderlineToolbar />
                  <Separator orientation="vertical" className="h-6 mx-1" />

                  {/* Structure controls */}
                  <HeadingsToolbar />
                  <BulletListToolbar />
                  <OrderedListToolbar />
                  <Separator orientation="vertical" className="h-6 mx-1" />

                  {/* Rich formatting */}
                  <ColorHighlightToolbar />
                  <LinkToolbar />
                  <ImagePlaceholderToolbar />
                  <Separator orientation="vertical" className="h-6 mx-1" />

                  {/* Additional controls */}
                  <AlignmentTooolbar />
                  <BlockquoteToolbar />
                </div>
              </div>
              <ScrollBar className="h-0.5" orientation="horizontal" />
            </ScrollArea>
          </ToolbarProvider>
        </BubbleMenu>
      </TooltipProvider>
    )
  }

  return null
}
