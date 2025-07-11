"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAuth, base_url } from "@/context/AuthContext"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import {
  ArrowLeft,
  Edit,
  CalendarIcon,
  Target,
  Github,
  CheckCircle,
  AlertCircle,
  XCircle,
  Clock,
  Download,
} from "lucide-react"
import { format } from "date-fns"
import { useRouter, useParams } from "next/navigation"
import RichTextEditor from "@/components/rich-text-editor-tiptap"

const statusColors = {
  planning: "bg-blue-100 text-blue-800",
  "in-progress": "bg-yellow-100 text-yellow-800",
  testing: "bg-purple-100 text-purple-800",
  completed: "bg-green-100 text-green-800",
  "on-hold": "bg-gray-100 text-gray-800",
}

const priorityColors = {
  low: "bg-green-100 text-green-800",
  medium: "bg-yellow-100 text-yellow-800",
  high: "bg-orange-100 text-orange-800",
  urgent: "bg-red-100 text-red-800",
}

const ViewProjectPage = () => {
  const { token } = useAuth()
  const router = useRouter()
  const params = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchProject = async () => {
    try {
      const res = await fetch(`${base_url}projects/${params.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await res.json()
      if (res.ok) {
        setProject(data.project)
      } else {
        toast.error(data.message || "Failed to fetch project")
        router.push("/projects")
      }
    } catch (err) {
      toast.error("Server error")
      router.push("/projects")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (params.id) {
      fetchProject()
    }
  }, [params.id])

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "in-progress":
        return <Clock className="h-5 w-5 text-yellow-600" />
      case "on-hold":
        return <XCircle className="h-5 w-5 text-gray-600" />
      default:
        return <AlertCircle className="h-5 w-5 text-blue-600" />
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <Button onClick={() => router.push("/projects")} className="mt-4">
            Back to Projects
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <p className="text-muted-foreground">Project Details</p>
          </div>
        </div>
        <Button onClick={() => router.push(`/portal/admin/projects/edit/${project._id}`)}>
          <Edit className="h-4 w-4 mr-2" />
          Edit Project
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Project Overview */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Project Overview</CardTitle>
                <div className="flex items-center gap-2">
                  {getStatusIcon(project.status)}
                  <Badge className={statusColors[project.status]}>{project.status.replace("-", " ")}</Badge>
                  <Badge className={priorityColors[project.priority]}>{project.priority}</Badge>
                </div>
              </div>
            </CardHeader>
            {/* <CardContent> */}
              {/* <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: project.description }} /> */}
               <RichTextEditor
                  value={project.description}
                  readOnly
                  placeholder="No description provided."
                  className="min-h-[400px] pointer-events-none opacity-80"
                  minHeight="400px"
                />

            {/* </CardContent> */}
          </Card>

          {/* Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Overall Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-3" />

                {project.tasks && project.tasks.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Tasks</h4>
                    <div className="space-y-2">
                      {project.tasks.map((task, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className={`h-4 w-4 ${task.completed ? "text-green-600" : "text-gray-400"}`} />
                          <span className={task.completed ? "line-through text-muted-foreground" : ""}>
                            {task.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Project Info */}
          <Card>
            <CardHeader>
              <CardTitle>Project Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                <span>Created: {format(new Date(project.createdAt), "MMM dd, yyyy")}</span>
              </div>

              {project.deadline && (
                <div className="flex items-center gap-2 text-sm">
                  <Target className="h-4 w-4 text-muted-foreground" />
                  <span>Deadline: {format(new Date(project.deadline), "MMM dd, yyyy")}</span>
                </div>
              )}

              {project.repository && (
                <div className="flex items-center gap-2 text-sm">
                  <Github className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Repository
                  </a>
                </div>
              )}

          {project.attachment && (
  <div className="space-y-2 text-sm">
    <div className="flex items-center gap-2">
      <Download className="h-4 w-4 text-muted-foreground" />
      <span>Attachment: {project.attachment.filename}</span>
    </div>

    {/* Preview supported formats (PDF, images) */}
    {(project.attachment.mimetype?.includes("pdf") ||
      project.attachment.mimetype?.includes("image")) && (
      <div className="border rounded-md overflow-hidden">
        {project.attachment.mimetype.includes("pdf") ? (
          <iframe
            src={project.attachment.url}
            className="w-full h-96"
            title="PDF Preview"
          />
        ) : (
          <img
            src={project.attachment.url}
            alt="Attachment Preview"
            className="max-w-full h-auto"
          />
        )}
      </div>
    )}

    {/* Fallback download button */}
    {!project.attachment.mimetype?.includes("pdf") &&
      !project.attachment.mimetype?.includes("image") && (
        <a
          href={project.attachment.url}
          download={project.attachment.filename}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Download File
        </a>
      )}
  </div>
)}


            </CardContent>
          </Card>

          {/* Team */}
          <Card>
            <CardHeader>
              <CardTitle>Team</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Created By</h4>
                <div className="text-sm">
                  {project.createdBy.username} ({project.createdBy.email})
                </div>
              </div>

              {project.assignedTo && project.assignedTo.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2">Assigned To</h4>
                  <div className="space-y-1">
                    {project.assignedTo.map((user, index) => (
                      <div key={index} className="text-sm">
                        {user.username} ({user.email})
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.team && project.team.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2">Team Members</h4>
                  <div className="space-y-1">
                    {project.team.map((member, index) => (
                      <div key={index} className="text-sm flex justify-between">
                        <span>{member.user.username}</span>
                        <Badge variant="outline" className="text-xs">
                          {member.role}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Budget */}
          {project.budget && (project.budget.allocated > 0 || project.budget.spent > 0) && (
            <Card>
              <CardHeader>
                <CardTitle>Budget</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Allocated:</span>
                  <span>
                    {project.budget.currency} {project.budget.allocated}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Spent:</span>
                  <span>
                    {project.budget.currency} {project.budget.spent}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between text-sm font-medium">
                  <span>Remaining:</span>
                  <span>
                    {project.budget.currency} {project.budget.allocated - project.budget.spent}
                  </span>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

export default ViewProjectPage
