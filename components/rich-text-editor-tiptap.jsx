"use client"

import "./tiptap.css"
import { cn } from "@/lib/utils"
import { ImageExtension } from "@/components/image"
import { ImagePlaceholder } from "@/components/image-placeholder"
import SearchAndReplace from "@/components/extensions/search-and-replace"
import { Color } from "@tiptap/extension-color"
import Highlight from "@tiptap/extension-highlight"
import Link from "@tiptap/extension-link"
import Subscript from "@tiptap/extension-subscript"
import Superscript from "@tiptap/extension-superscript"
import TextAlign from "@tiptap/extension-text-align"
import TextStyle from "@tiptap/extension-text-style"
import Typography from "@tiptap/extension-typography"
import Underline from "@tiptap/extension-underline"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { TipTapFloatingMenu } from "@/components/floating-menu"
import { FloatingToolbar } from "@/components/floating-toolbar"
import { EditorToolbar } from "./toolbars/editor-toolbar"
import Placeholder from "@tiptap/extension-placeholder"
import { useEffect } from "react"

const extensions = [
  StarterKit.configure({
    orderedList: {
      HTMLAttributes: {
        class: "list-decimal",
      },
    },
    bulletList: {
      HTMLAttributes: {
        class: "list-disc",
      },
    },
    heading: {
      levels: [1, 2, 3, 4],
    },
  }),
  Placeholder.configure({
    emptyNodeClass: "is-editor-empty",
    placeholder: ({ node }) => {
      switch (node.type.name) {
        case "heading":
          return `Heading ${node.attrs.level}`
        case "detailsSummary":
          return "Section title"
        case "codeBlock":
          return ""
        default:
          return "Write, type '/' for commands"
      }
    },
    includeChildren: false,
  }),
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  TextStyle,
  Subscript,
  Superscript,
  Underline,
  Link,
  Color,
  Highlight.configure({
    multicolor: true,
  }),
  ImageExtension,
  ImagePlaceholder,
  SearchAndReplace,
  Typography,
]

export function RichTextEditor({
  value = "",
  onChange,
  placeholder = "Write, type '/' for commands",
  className,
  minHeight = "300px",
}) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: extensions,
    content: value,
    editorProps: {
      attributes: {
        class:
          "max-w-full focus:outline-none prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      if (onChange) {
        onChange(html)
      }
    },
  })

  // Update editor content when value prop changes
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value, false)
    }
  }, [editor, value])

  // ✅ Fixed placeholder update
  useEffect(() => {
    if (editor && placeholder) {
      const placeholderExtension = editor.extensionManager.extensions.find(
        (extension) => extension.name === "placeholder"
      )

      if (placeholderExtension && placeholderExtension.options) {
        placeholderExtension.options.placeholder = placeholder
      }
    }
  }, [editor, placeholder])

  if (!editor) return null

  return (
    <div className={cn("relative w-full overflow-hidden border bg-card rounded-lg", className)}>
      <EditorToolbar editor={editor} />
      <FloatingToolbar editor={editor} />
      <TipTapFloatingMenu editor={editor} />
      <EditorContent editor={editor} className="w-full cursor-text p-4" style={{ minHeight }} />
    </div>
  )
}

export default RichTextEditor
