"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useAuth, base_url } from "@/context/AuthContext"
import { toast } from "sonner"
import { ArrowLeft, Plus, X } from "lucide-react"
import { useRouter, useParams } from "next/navigation"
import RichTextEditor from "@/components/rich-text-editor-tiptap"

const EditTicket = () => {
  const { token, user } = useAuth()
  const router = useRouter()
  const params = useParams()
  const [loading, setLoading] = useState(false)
  const [fetchingTicket, setFetchingTicket] = useState(true)

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
    category: "general",
    status: "open",
    tags: [],
  })

  const [newTag, setNewTag] = useState("")
  const [selectedFiles, setSelectedFiles] = useState([])

  const userRole = user?.role || "admin"
  const isStaff = userRole === "admin" || userRole === "support"

  const fetchTicket = async () => {
    try {
      const res = await fetch(`${base_url}tickets/${params.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await res.json()
      if (res.ok) {
        const ticket = data.ticket
        setFormData({
          title: ticket.title,
          description: ticket.description,
          priority: ticket.priority,
          category: ticket.category,
          status: ticket.status,
          tags: ticket.tags || [],
        })
      } else {
        toast.error(data.message || "Failed to fetch ticket")
        router.push("/tickets")
      }
    } catch (err) {
      toast.error("Server error")
      router.push("/tickets")
    } finally {
      setFetchingTicket(false)
    }
  }

  useEffect(() => {
    if (params.id) {
      fetchTicket()
    }
  }, [params.id])

  const updateTicket = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const updateData = {
        title: formData.title,
        description: formData.description,
        priority: formData.priority,
        category: formData.category,
        tags: formData.tags,
      }

      // Only staff can update status
      if (isStaff) {
        updateData.status = formData.status
      }

      const res = await fetch(`${base_url}tickets/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updateData),
      })

      const data = await res.json()
      if (res.ok) {
        toast.success("Ticket updated successfully")
        router.push(`/tickets/view/${params.id}`)
      } else {
        toast.error(data.message || "Failed to update ticket")
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

  if (fetchingTicket) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Edit Ticket</h1>
          <p className="text-muted-foreground">Update ticket information</p>
        </div>
      </div>

      <form onSubmit={updateTicket} className="space-y-8">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              {isStaff && (
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) => setFormData({ ...formData, status: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="open">Open</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="resolved">Resolved</SelectItem>
                      <SelectItem value="closed">Closed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
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
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? "Updating..." : "Update Ticket"}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default EditTicket
