"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { useAuth, base_url } from "@/context/AuthContext"
import { toast } from "sonner"
import { ArrowLeft, Plus, X } from "lucide-react"
import { useRouter } from "next/navigation"
import RichTextEditor from "@/components/rich-text-editor-tiptap"

const CreateProjectPage = () => {
  const { token } = useAuth()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [loadingUsers, setLoadingUsers] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "planning",
    priority: "medium",
    progress: 0,
    deadline: "",
    assignedTo: [],
    team: [],
    technologies: [],
    repository: "",
    tasks: [],
    milestones: [],
    budget: { allocated: 0, spent: 0, currency: "USD" },
    tags: [],
  })

  const [newTech, setNewTech] = useState("")
  const [newTag, setNewTag] = useState("")
  const [selectedFile, setSelectedFile] = useState(null)

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${base_url}auth/all-users`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (res.ok) {
        setUsers(data.users);
      } else {
        toast.error(data.message || "Failed to fetch users");
      }
    } catch (err) {
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers()
  }, [])

  const createProject = async (e) => {
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

      if (selectedFile) {
        formDataToSend.append("attachment", selectedFile)
      }

      const res = await fetch(`${base_url}projects/create`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      })

      const data = await res.json()
      if (res.ok) {
        toast.success("Project created successfully")
        router.push("/portal/admin/projects")
      } else {
        toast.error(data.message || "Failed to create project")
      }
    } catch (err) {
      toast.error("Server error")
    } finally {
      setLoading(false)
    }
  }

  const addTechnology = () => {
    if (newTech.trim() && !formData.technologies.includes(newTech.trim())) {
      setFormData({
        ...formData,
        technologies: [...formData.technologies, newTech.trim()],
      })
      setNewTech("")
    }
  }

  const removeTechnology = (tech) => {
    setFormData({
      ...formData,
      technologies: formData.technologies.filter((t) => t !== tech),
    })
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

  const handleUserAssignment = (userId, checked) => {
    if (checked) {
      setFormData({
        ...formData,
        assignedTo: [...formData.assignedTo, userId],
      })
    } else {
      setFormData({
        ...formData,
        assignedTo: formData.assignedTo.filter((id) => id !== userId),
      })
    }
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Create New Project</h1>
          <p className="text-muted-foreground">Fill in the details to create a new software project</p>
        </div>
      </div>

      <form onSubmit={createProject} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Project Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="repository">Repository URL</Label>
                <Input
                  id="repository"
                  value={formData.repository}
                  onChange={(e) => setFormData({ ...formData, repository: e.target.value })}
                  placeholder="https://github.com/username/repo"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <RichTextEditor
                value={formData.description}
                onChange={(value) => setFormData({ ...formData, description: value })}
                placeholder="Describe your project in detail... Type '/' for commands"
                className="min-h-[400px]"
                minHeight="400px"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="planning">Planning</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="testing">Testing</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="on-hold">On Hold</SelectItem>
                  </SelectContent>
                </Select>
              </div>
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
                <Label htmlFor="progress">Progress (%)</Label>
                <Input
                  id="progress"
                  type="number"
                  min="0"
                  max="100"
                  value={formData.progress}
                  onChange={(e) => setFormData({ ...formData, progress: Number.parseInt(e.target.value) || 0 })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="deadline">Deadline</Label>
              <Input
                id="deadline"
                type="date"
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="attachment">Project Attachment</Label>
              <Input
                id="attachment"
                type="file"
                onChange={(e) => setSelectedFile(e.target.files[0])}
                accept=".pdf,.doc,.docx,.txt,.zip,.jpg,.jpeg,.png"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team Assignment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label>Assign Users to Project</Label>
              {loadingUsers ? (
                <div className="flex justify-center py-4">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-60 overflow-y-auto border rounded-lg p-4">
                  {users.map((user) => (
                    <div key={user._id} className="flex items-center space-x-2">
                      <Checkbox
                        id={user._id}
                        checked={formData.assignedTo.includes(user._id)}
                        onCheckedChange={(checked) => handleUserAssignment(user._id, checked)}
                      />
                      <Label htmlFor={user._id} className="text-sm font-normal cursor-pointer">
                        {user.username} ({user.email})
                      </Label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Technologies & Tags</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Technologies */}
            <div className="space-y-2">
              <Label>Technologies</Label>
              <div className="flex gap-2">
                <Input
                  value={newTech}
                  onChange={(e) => setNewTech(e.target.value)}
                  placeholder="Add technology"
                  onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTechnology())}
                />
                <Button type="button" onClick={addTechnology}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="cursor-pointer"
                    onClick={() => removeTechnology(tech)}
                  >
                    {tech} <X className="h-3 w-3 ml-1" />
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tags */}
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

        <Card>
          <CardHeader>
            <CardTitle>Budget Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="allocated">Budget Allocated</Label>
                <Input
                  id="allocated"
                  type="number"
                  min="0"
                  value={formData.budget.allocated}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      budget: { ...formData.budget, allocated: Number.parseFloat(e.target.value) || 0 },
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="spent">Budget Spent</Label>
                <Input
                  id="spent"
                  type="number"
                  min="0"
                  value={formData.budget.spent}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      budget: { ...formData.budget, spent: Number.parseFloat(e.target.value) || 0 },
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="currency">Currency</Label>
                <Select
                  value={formData.budget.currency}
                  onValueChange={(value) =>
                    setFormData({
                      ...formData,
                      budget: { ...formData.budget, currency: value },
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="EUR">EUR</SelectItem>
                    <SelectItem value="GBP">GBP</SelectItem>
                    <SelectItem value="JPY">JPY</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create Project"}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CreateProjectPage
