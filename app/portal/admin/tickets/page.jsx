"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useAuth, base_url } from "@/context/AuthContext"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "sonner"
import {
  MessageSquare,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  User,
  Calendar,
  Tag,
  Search,
  Settings,
  BarChart3,
  TrendingUp,
} from "lucide-react"
import { format } from "date-fns"
import { useRouter } from "next/navigation"

const statusColors = {
  open: "bg-blue-100 text-blue-800",
  "in-progress": "bg-yellow-100 text-yellow-800",
  resolved: "bg-green-100 text-green-800",
  closed: "bg-gray-100 text-gray-800",
}

const priorityColors = {
  low: "bg-green-100 text-green-800",
  medium: "bg-yellow-100 text-yellow-800",
  high: "bg-orange-100 text-orange-800",
  urgent: "bg-red-100 text-red-800",
}

const categoryColors = {
  technical: "bg-purple-100 text-purple-800",
  billing: "bg-indigo-100 text-indigo-800",
  general: "bg-gray-100 text-gray-800",
  "feature-request": "bg-cyan-100 text-cyan-800",
  "bug-report": "bg-red-100 text-red-800",
}

const AdminTicketsPage = () => {
  const { token, user } = useAuth()
  const router = useRouter()
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [activeTab, setActiveTab] = useState("all")
  const [stats, setStats] = useState({})
  const [categoryStats, setCategoryStats] = useState([])

  const fetchTickets = async (endpoint = "all") => {
    setLoading(true)
    try {
      let url = `${base_url}tickets/all`

      if (endpoint === "assigned") {
        url = `${base_url}tickets/assigned`
      }

      const params = new URLSearchParams()
      if (statusFilter !== "all") params.append("status", statusFilter)
      if (priorityFilter !== "all") params.append("priority", priorityFilter)
      if (categoryFilter !== "all") params.append("category", categoryFilter)
      if (searchTerm) params.append("search", searchTerm)

      const res = await fetch(`${url}?${params}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await res.json()
      if (res.ok) {
        setTickets(data.tickets)
      } else {
        toast.error(data.message || "Failed to fetch tickets")
      }
    } catch (err) {
      toast.error("Server error")
    } finally {
      setLoading(false)
    }
  }

  const fetchStats = async () => {
    try {
      const res = await fetch(`${base_url}tickets/stats`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await res.json()
      if (res.ok) {
        setStats(data.stats)
        setCategoryStats(data.categoryStats)
      }
    } catch (err) {
      console.error("Failed to fetch stats")
    }
  }

  const assignTicketToMe = async (ticketId) => {
    try {
      const res = await fetch(`${base_url}tickets/${ticketId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ assignedTo: user._id }),
      })

      const data = await res.json()
      if (res.ok) {
        toast.success("Ticket assigned to you")
        fetchTickets(activeTab)
      } else {
        toast.error(data.message || "Failed to assign ticket")
      }
    } catch (err) {
      toast.error("Server error")
    }
  }

  const updateTicketStatus = async (ticketId, status) => {
    try {
      const res = await fetch(`${base_url}tickets/${ticketId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      })

      const data = await res.json()
      if (res.ok) {
        toast.success("Ticket status updated")
        fetchTickets(activeTab)
      } else {
        toast.error(data.message || "Failed to update ticket")
      }
    } catch (err) {
      toast.error("Server error")
    }
  }

  useEffect(() => {
    fetchTickets(activeTab)
    fetchStats()
  }, [activeTab, statusFilter, priorityFilter, categoryFilter, searchTerm])

  const getStatusIcon = (status) => {
    switch (status) {
      case "open":
        return <AlertTriangle className="h-4 w-4 text-blue-600" />
      case "in-progress":
        return <Clock className="h-4 w-4 text-yellow-600" />
      case "resolved":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "closed":
        return <XCircle className="h-4 w-4 text-gray-600" />
      default:
        return <AlertTriangle className="h-4 w-4 text-blue-600" />
    }
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Admin - Support Tickets</h1>
          <p className="text-muted-foreground">Manage all support tickets and customer requests</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => router.push("/admin/tickets/chatbot")}>
            <MessageSquare className="h-4 w-4 mr-2" />
            Chatbot View
          </Button>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Enhanced Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Tickets</p>
                <p className="text-2xl font-bold">{stats.total || 0}</p>
                <p className="text-xs text-muted-foreground">All time</p>
              </div>
              <MessageSquare className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Open Tickets</p>
                <p className="text-2xl font-bold">{stats.open || 0}</p>
                <p className="text-xs text-green-600">
                  <TrendingUp className="h-3 w-3 inline mr-1" />
                  Needs attention
                </p>
              </div>
              <AlertTriangle className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">In Progress</p>
                <p className="text-2xl font-bold">{stats.inProgress || 0}</p>
                <p className="text-xs text-yellow-600">Being handled</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Urgent Priority</p>
                <p className="text-2xl font-bold">{stats.urgent || 0}</p>
                <p className="text-xs text-red-600">High priority</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Stats */}
      {categoryStats.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Tickets by Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categoryStats.map((cat, index) => (
                <div key={index} className="text-center">
                  <Badge className={categoryColors[cat._id] || "bg-gray-100 text-gray-800"}>
                    {cat._id.replace("-", " ")}
                  </Badge>
                  <p className="text-2xl font-bold mt-2">{cat.count}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search tickets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="resolved">Resolved</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>
        <Select value={priorityFilter} onValueChange={setPriorityFilter}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Priority</SelectItem>
            <SelectItem value="low">Low</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="urgent">Urgent</SelectItem>
          </SelectContent>
        </Select>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="technical">Technical</SelectItem>
            <SelectItem value="billing">Billing</SelectItem>
            <SelectItem value="general">General</SelectItem>
            <SelectItem value="feature-request">Feature Request</SelectItem>
            <SelectItem value="bug-report">Bug Report</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All Tickets</TabsTrigger>
          <TabsTrigger value="assigned">Assigned to Me</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {tickets.map((ticket) => (
                <AdminTicketCard
                  key={ticket._id}
                  ticket={ticket}
                  onView={(id) => router.push(`/portal/admin/tickets/view/${id}`)}
                  onAssign={(id) => assignTicketToMe(id)}
                  onStatusUpdate={(id, status) => updateTicketStatus(id, status)}
                  getStatusIcon={getStatusIcon}
                  currentUserId={user?._id}
                />
              ))}
              {tickets.length === 0 && (
                <Card>
                  <CardContent className="p-8 text-center">
                    <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">No tickets found</h3>
                    <p className="text-muted-foreground">No tickets match your current filters.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Admin Ticket Card Component
const AdminTicketCard = ({ ticket, onView, onAssign, onStatusUpdate, getStatusIcon, currentUserId }) => {
  const isAssignedToMe = ticket.assignedTo?._id === currentUserId
  const isUnassigned = !ticket.assignedTo

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {getStatusIcon(ticket.status)}
              <h3
                className="text-lg font-semibold cursor-pointer hover:text-blue-600"
                onClick={() => onView(ticket._id)}
              >
                {ticket.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <Badge className={statusColors[ticket.status]}>{ticket.status.replace("-", " ")}</Badge>
              <Badge className={priorityColors[ticket.priority]}>{ticket.priority}</Badge>
              <Badge className={categoryColors[ticket.category]}>{ticket.category.replace("-", " ")}</Badge>
              {isAssignedToMe && (
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  Assigned to me
                </Badge>
              )}
              {isUnassigned && (
                <Badge variant="outline" className="bg-orange-50 text-orange-700">
                  Unassigned
                </Badge>
              )}
            </div>
          </div>
          <div className="text-right text-sm text-muted-foreground">
            <div className="flex items-center gap-1 mb-1">
              <Calendar className="h-3 w-3" />
              {format(new Date(ticket.createdAt), "MMM dd, yyyy")}
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare className="h-3 w-3" />
              {ticket.replies?.length || 0} replies
            </div>
          </div>
        </div>

        <div
          className="text-sm text-muted-foreground mb-4 line-clamp-2"
          dangerouslySetInnerHTML={{ __html: ticket.description }}
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>Created by: {ticket.createdBy?.email}</span>
            </div>
            {ticket.assignedTo && (
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                <span>Assigned to: {ticket.assignedTo.email}</span>
              </div>
            )}
            {ticket.tags && ticket.tags.length > 0 && (
              <div className="flex items-center gap-1">
                <Tag className="h-3 w-3" />
                <span>{ticket.tags.slice(0, 2).join(", ")}</span>
                {ticket.tags.length > 2 && <span>+{ticket.tags.length - 2}</span>}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            {isUnassigned && (
              <Button size="sm" variant="outline" onClick={() => onAssign(ticket._id)}>
                Assign to Me
              </Button>
            )}
            {ticket.status === "open" && (
              <Button size="sm" variant="outline" onClick={() => onStatusUpdate(ticket._id, "in-progress")}>
                Start Working
              </Button>
            )}
            {ticket.status === "in-progress" && (
              <Button size="sm" variant="outline" onClick={() => onStatusUpdate(ticket._id, "resolved")}>
                Mark Resolved
              </Button>
            )}
            <Button size="sm" onClick={() => onView(ticket._id)}>
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default AdminTicketsPage
