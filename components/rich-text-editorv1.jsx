"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Bold, Italic, Underline, List, ListOrdered, LinkIcon, ImageIcon, Code, Quote, Undo, Redo } from "lucide-react"

const RichTextEditor = ({ value, onChange, placeholder = "Start typing...", className = "" }) => {
  const editorRef = useRef(null)
  const [isEditorFocused, setIsEditorFocused] = useState(false)

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value
    }
  }, [value])

  const executeCommand = (command, value) => {
    document.execCommand(command, false, value)
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }

  const insertLink = () => {
    const url = prompt("Enter URL:")
    if (url) {
      executeCommand("createLink", url)
    }
  }

  const insertImage = () => {
    const url = prompt("Enter image URL:")
    if (url) {
      executeCommand("insertImage", url)
    }
  }

  const toolbarButtons = [
    { icon: Bold, command: "bold", title: "Bold" },
    { icon: Italic, command: "italic", title: "Italic" },
    { icon: Underline, command: "underline", title: "Underline" },
    { separator: true },
    { icon: List, command: "insertUnorderedList", title: "Bullet List" },
    { icon: ListOrdered, command: "insertOrderedList", title: "Numbered List" },
    { separator: true },
    { icon: LinkIcon, command: "link", title: "Insert Link", action: insertLink },
    { icon: ImageIcon, command: "image", title: "Insert Image", action: insertImage },
    { separator: true },
    { icon: Code, command: "formatBlock", value: "pre", title: "Code Block" },
    { icon: Quote, command: "formatBlock", value: "blockquote", title: "Quote" },
    { separator: true },
    { icon: Undo, command: "undo", title: "Undo" },
    { icon: Redo, command: "redo", title: "Redo" },
  ]

  return (
    <div className={`border rounded-lg ${className}`}>
      {/* Toolbar */}
      <div className="flex items-center gap-1 p-2 border-b bg-gray-50">
        {toolbarButtons.map((button, index) => {
          if (button.separator) {
            return <Separator key={index} orientation="vertical" className="h-6" />
          }

          const Icon = button.icon
          return (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              onClick={() => {
                if (button.action) {
                  button.action()
                } else {
                  executeCommand(button.command, button.value)
                }
              }}
              title={button.title}
              className="h-8 w-8 p-0"
            >
              <Icon className="h-4 w-4" />
            </Button>
          )
        })}
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onFocus={() => setIsEditorFocused(true)}
        onBlur={() => setIsEditorFocused(false)}
        className={`min-h-[200px] p-4 outline-none ${!value && !isEditorFocused ? "text-gray-400" : ""}`}
        style={{ whiteSpace: "pre-wrap" }}
        suppressContentEditableWarning={true}
      >
        {!value && !isEditorFocused && placeholder}
      </div>
    </div>
  )
}

export default RichTextEditor
