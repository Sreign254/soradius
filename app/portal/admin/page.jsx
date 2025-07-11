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

const page = () => {
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

    
    
    
    </div>
  )
}

// Admin Ticket Card Component
const AdminTicketCard = ({ ticket, onView, onAssign, onStatusUpdate, getStatusIcon, currentUserId }) => {
  const isAssignedToMe = ticket.assignedTo?._id === currentUserId
  const isUnassigned = !ticket.assignedTo

  return (
    <Card className="hover:shadow-md transition-shadow">
     
    </Card>
  )
}

export default page
