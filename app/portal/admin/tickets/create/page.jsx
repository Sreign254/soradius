"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useAuth, base_url } from "@/context/AuthContext"
import { toast } from "sonner"
import { ArrowLeft, Plus, X } from "lucide-react"
import { useRouter } from "next/navigation"
import RichTextEditor from "@/components/rich-text-editor-tiptap"

const CreateTicket = () => {
  const { token } = useAuth()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
    category: "general",
    tags: [],
  })

  const [newTag, setNewTag] = useState("")
  const [selectedFiles, setSelectedFiles] = useState([])

  const createTicket = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formDataToSend = new FormData()

      Object.entries(formData).forEach(([key, value]) => {
        if (typeof value === "object" && value !== null) {
          formDataToSend.append(key, JSON.stringify(value))
        } else {
          formDataToSend.append(key, value)
        }
      })

      if (selectedFiles.length > 0) {
        selectedFiles.forEach((file) => {
          formDataToSend.append("attachments", file)
        })
      }

      const res = await fetch(`${base_url}tickets/create`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      })

      const data = await res.json()
      if (res.ok) {
        toast.success("Ticket created successfully")
        router.push("/portal/customer/tickets")
      } else {
        toast.error(data.message || "Failed to create ticket")
      }
    } catch (err) {
      toast.error("Server error")
    } finally {
      setLoading(false)
    }
  }

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, newTag.trim()],
      })
      setNewTag("")
    }
  }

  const removeTag = (tag) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((t) => t !== tag),
    })
  }

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files)
    setSelectedFiles(files)
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Create Support Ticket</h1>
          <p className="text-muted-foreground">Describe your issue and we'll help you resolve it</p>
        </div>
      </div>

      <form onSubmit={createTicket} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Ticket Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Brief description of your issue"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <RichTextEditor
                value={formData.description}
                onChange={(value) => setFormData({ ...formData, description: value })}
                placeholder="Provide detailed information about your issue..."
                className="min-h-[300px]"
                minHeight="300px"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Select
                  value={formData.priority}
                  onValueChange={(value) => setFormData({ ...formData, priority: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="technical">Technical</SelectItem>
                    <SelectItem value="billing">Billing</SelectItem>
                    <SelectItem value="feature-request">Feature Request</SelectItem>
                    <SelectItem value="bug-report">Bug Report</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Tags</Label>
              <div className="flex gap-2">
                <Input
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="Add tag"
                  onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                />
                <Button type="button" onClick={addTag}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="cursor-pointer" onClick={() => removeTag(tag)}>
                    {tag} <X className="h-3 w-3 ml-1" />
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="attachments">Attachments</Label>
              <Input
                id="attachments"
                type="file"
                multiple
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.txt,.zip,.jpg,.jpeg,.png"
              />
              <p className="text-sm text-muted-foreground">
                You can attach up to 5 files. Supported formats: PDF, DOC, DOCX, TXT, ZIP, JPG, PNG (Max 10MB each)
              </p>
              {selectedFiles.length > 0 && (
                <div className="mt-2">
                  <p className="text-sm font-medium">Selected files:</p>
                  <ul className="text-sm text-muted-foreground">
                    {selectedFiles.map((file, index) => (
                      <li key={index}>
                        {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create Ticket"}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CreateTicket
