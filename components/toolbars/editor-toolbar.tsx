import { Separator } from "@/components/ui/separator"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ToolbarProvider } from "@/components/toolbar-provider"
import type { Editor } from "@tiptap/core"
import { UndoToolbar } from "@/components/undo"
import { RedoToolbar } from "@/components/redo"
import { HeadingsToolbar } from "@/components/headings"
import { BlockquoteToolbar } from "@/components/blockquote"
import { CodeToolbar } from "@/components/code"
import { BoldToolbar } from "@/components/bold"
import { ItalicToolbar } from "@/components/italic"
import { UnderlineToolbar } from "@/components/underline"
import { StrikeThroughToolbar } from "@/components/strikethrough"
import { LinkToolbar } from "@/components/link"
import { BulletListToolbar } from "@/components/bullet-list"
import { OrderedListToolbar } from "@/components/ordered-list"
import { HorizontalRuleToolbar } from "@/components/horizontal-rule"
import { AlignmentTooolbar } from "@/components/alignment"
import { ImagePlaceholderToolbar } from "@/components/image-placeholder-toolbar"
import { ColorHighlightToolbar } from "@/components/color-and-highlight"
import { SearchAndReplaceToolbar } from "@/components/search-and-replace-toolbar"
import { CodeBlockToolbar } from "@/components/code-block"

export const EditorToolbar = ({ editor }: { editor: Editor }) => {
  return (
    <div className="sticky top-0 z-20 w-full border-b bg-background hidden sm:block">
      <ToolbarProvider editor={editor}>
        <TooltipProvider>
          <ScrollArea className="h-fit py-0.5">
            <div>
              <div className="flex items-center gap-1 px-2">
                {/* History Group */}
                <UndoToolbar />
                <RedoToolbar />
                <Separator orientation="vertical" className="mx-1 h-7" />

                {/* Text Structure Group */}
                <HeadingsToolbar />
                <BlockquoteToolbar />
                <CodeToolbar />
                <CodeBlockToolbar />
                <Separator orientation="vertical" className="mx-1 h-7" />

                {/* Basic Formatting Group */}
                <BoldToolbar />
                <ItalicToolbar />
                <UnderlineToolbar />
                <StrikeThroughToolbar />
                <LinkToolbar />
                <Separator orientation="vertical" className="mx-1 h-7" />

                {/* Lists & Structure Group */}
                <BulletListToolbar />
                <OrderedListToolbar />
                <HorizontalRuleToolbar />
                <Separator orientation="vertical" className="mx-1 h-7" />

                {/* Alignment Group */}
                <AlignmentTooolbar />
                <Separator orientation="vertical" className="mx-1 h-7" />

                {/* Media & Styling Group */}
                <ImagePlaceholderToolbar />
                <ColorHighlightToolbar />
                <Separator orientation="vertical" className="mx-1 h-7" />

                <div className="flex-1" />

                {/* Utility Group */}
                <SearchAndReplaceToolbar />
              </div>
            </div>
            <ScrollBar className="hidden" orientation="horizontal" />
          </ScrollArea>
        </TooltipProvider>
      </ToolbarProvider>
    </div>
  )
}
