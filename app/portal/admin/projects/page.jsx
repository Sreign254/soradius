"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useAuth, base_url } from "@/context/AuthContext"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { toast } from "sonner"
import {
  Plus,
  Edit,
  Trash2,
  CalendarIcon,
  Users,
  Clock,
  Target,
  Search,
  MoreHorizontal,
  CheckCircle,
  AlertCircle,
  XCircle,
  Eye,
} from "lucide-react"
import { format } from "date-fns"
import { useRouter } from "next/navigation"

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

const Projects = () => {
  const { token } = useAuth()
  const router = useRouter()
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")
  const [activeTab, setActiveTab] = useState("all")

  const fetchProjects = async (endpoint = "all") => {
    setLoading(true)
    try {
      const url = endpoint === "my-projects" ? `${base_url}projects/my-projects` : `${base_url}projects/all`
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await res.json()
      if (res.ok) {
        setProjects(data.projects)
      } else {
        toast.error(data.message || "Failed to fetch projects")
      }
    } catch (err) {
      toast.error("Server error")
    } finally {
      setLoading(false)
    }
  }

  const deleteProject = async (id) => {
    try {
      const res = await fetch(`${base_url}projects/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await res.json()
      if (res.ok) {
        toast.success("Project deleted successfully")
        fetchProjects(activeTab)
      } else {
        toast.error(data.message || "Failed to delete project")
      }
    } catch (err) {
      toast.error("Server error")
    }
  }

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || project.status === statusFilter
    const matchesPriority = priorityFilter === "all" || project.priority === priorityFilter

    return matchesSearch && matchesStatus && matchesPriority
  })

  useEffect(() => {
    fetchProjects(activeTab)
  }, [activeTab])

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "in-progress":
        return <Clock className="h-4 w-4 text-yellow-600" />
      case "on-hold":
        return <XCircle className="h-4 w-4 text-gray-600" />
      default:
        return <AlertCircle className="h-4 w-4 text-blue-600" />
    }
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Project Management</h1>
          <p className="text-muted-foreground">Manage your software projects efficiently</p>
        </div>
        <Button onClick={() => router.push("/portal/admin/projects/create")}>
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="planning">Planning</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="testing">Testing</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="on-hold">On Hold</SelectItem>
          </SelectContent>
        </Select>
        <Select value={priorityFilter} onValueChange={setPriorityFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Priority</SelectItem>
            <SelectItem value="low">Low</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="urgent">Urgent</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project._id}
                  project={project}
                  onView={(id) => router.push(`/portal/admin/projects/view/${id}`)}
                  onEdit={(id) => router.push(`/portal/admin/projects/edit/${id}`)}
                  onDelete={(id) => deleteProject(id)}
                  getStatusIcon={getStatusIcon}
                />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Project Card Component
const ProjectCard = ({ project, onView, onEdit, onDelete, getStatusIcon }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <CardTitle className="text-lg">{project.title}</CardTitle>
            <div className="flex items-center gap-2">
              {getStatusIcon(project.status)}
              <Badge className={statusColors[project.status]}>{project.status.replace("-", " ")}</Badge>
              <Badge className={priorityColors[project.priority]}>{project.priority}</Badge>
            </div>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-40">
              <div className="space-y-2">
                <Button variant="ghost" size="sm" className="w-full justify-start" onClick={() => onView(project._id)}>
                  <Eye className="h-4 w-4 mr-2" />
                  View
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start" onClick={() => onEdit(project._id)}>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-full justify-start text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the project.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => onDelete(project._id)}>Delete</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div
          className="text-sm text-muted-foreground line-clamp-2"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{project.progress}%</span>
          </div>
          <Progress value={project.progress} className="h-2" />
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{project.assignedTo?.length + project.team?.length || 0}</span>
          </div>
          <div className="flex items-center gap-1">
            <Target className="h-4 w-4" />
            <span>
              {project.tasks?.filter((t) => t.completed).length || 0}/{project.tasks?.length || 0}
            </span>
          </div>
          {project.deadline && (
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              <span>{format(new Date(project.deadline), "MMM dd")}</span>
            </div>
          )}
        </div>

        {project.technologies?.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default Projects
