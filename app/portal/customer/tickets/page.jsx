"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useAuth, base_url } from "@/context/AuthContext"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "sonner"
import {
  Plus,
  Search,
  MessageSquare,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  User,
  Calendar,
  Tag,
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

const Tickets = () => {
  const { token, user } = useAuth()
  const router = useRouter()
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [activeTab, setActiveTab] = useState("my-tickets")
  const [stats, setStats] = useState({})

  const userRole = user?.role || "user"
  const isStaff = userRole === "admin" || userRole === "support"

  const fetchTickets = async (endpoint = "my-tickets") => {
    setLoading(true)
    try {
      let url = `${base_url}tickets/my-tickets`

      if (endpoint === "all") {
        url = `${base_url}tickets/all`
      } else if (endpoint === "assigned") {
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
    if (!isStaff) return

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
      }
    } catch (err) {
      console.error("Failed to fetch stats")
    }
  }

  useEffect(() => {
    fetchTickets(activeTab)
    if (isStaff) {
      fetchStats()
    }
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
          <h1 className="text-3xl font-bold">Support Tickets</h1>
          <p className="text-muted-foreground">Manage and track your support requests</p>
        </div>
        <Button onClick={() => router.push("/portal/customer/tickets/create")}>
          <Plus className="h-4 w-4 mr-2" />
          New Ticket
        </Button>
      </div>

      {/* Stats Cards - Only for staff */}
      {isStaff && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Tickets</p>
                  <p className="text-2xl font-bold">{stats.total || 0}</p>
                </div>
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Open</p>
                  <p className="text-2xl font-bold">{stats.open || 0}</p>
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
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Urgent</p>
                  <p className="text-2xl font-bold">{stats.urgent || 0}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>
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
          <TabsTrigger value="my-tickets">My Tickets</TabsTrigger>
          {isStaff && <TabsTrigger value="all">All Tickets</TabsTrigger>}
          {isStaff && <TabsTrigger value="assigned">Assigned to Me</TabsTrigger>}
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {tickets.map((ticket) => (
                <TicketCard
                  key={ticket._id}
                  ticket={ticket}
                  onView={(id) => router.push(`/portal/customer/tickets/view/${id}`)}
                  getStatusIcon={getStatusIcon}
                  isStaff={isStaff}
                />
              ))}
              {tickets.length === 0 && (
                <Card>
                  <CardContent className="p-8 text-center">
                    <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">No tickets found</h3>
                    <p className="text-muted-foreground mb-4">
                      {activeTab === "my-tickets"
                        ? "You haven't created any tickets yet."
                        : "No tickets match your current filters."}
                    </p>
                    {activeTab === "my-tickets" && (
                      <Button onClick={() => router.push("/portal/customer/tickets/create")}>Create Your First Ticket</Button>
                    )}
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

// Ticket Card Component
const TicketCard = ({ ticket, onView, getStatusIcon, isStaff }) => {
  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => onView(ticket._id)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {getStatusIcon(ticket.status)}
              <h3 className="text-lg font-semibold">{ticket.title}</h3>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <Badge className={statusColors[ticket.status]}>{ticket.status.replace("-", " ")}</Badge>
              <Badge className={priorityColors[ticket.priority]}>{ticket.priority}</Badge>
              <Badge className={categoryColors[ticket.category]}>{ticket.category.replace("-", " ")}</Badge>
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

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
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
          </div>
          {ticket.tags && ticket.tags.length > 0 && (
            <div className="flex items-center gap-1">
              <Tag className="h-3 w-3" />
              <span>{ticket.tags.slice(0, 2).join(", ")}</span>
              {ticket.tags.length > 2 && <span>+{ticket.tags.length - 2}</span>}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default Tickets
