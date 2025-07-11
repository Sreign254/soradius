"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useAuth, base_url } from "@/context/AuthContext"
import { toast } from "sonner"
import {
  Send,
  ArrowLeft,
  MessageSquare,
  Bot,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Settings,
  Power,
  PowerOff,
} from "lucide-react"
import { format } from "date-fns"
import { useRouter } from "next/navigation"

const statusColors = {
  open: "bg-blue-100 text-blue-800",
  "in-progress": "bg-yellow-100 text-yellow-800",
  resolved: "bg-green-100 text-green-800",
  closed: "bg-gray-100 text-gray-800",
}

const AdminChatbotPage = () => {
  const { token, user } = useAuth()
  const router = useRouter()
  const [tickets, setTickets] = useState([])
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [replyMessage, setReplyMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [chatbotEnabled, setChatbotEnabled] = useState(true)
  const messagesEndRef = useRef(null)

  const fetchTickets = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${base_url}tickets/all?status=open&status=in-progress`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await res.json()
      if (res.ok) {
        setTickets(data.tickets)
        if (!selectedTicket && data.tickets.length > 0) {
          setSelectedTicket(data.tickets[0])
        }
      } else {
        toast.error(data.message || "Failed to fetch tickets")
      }
    } catch (err) {
      toast.error("Server error")
    } finally {
      setLoading(false)
    }
  }

  const fetchTicketDetails = async (ticketId) => {
    try {
      const res = await fetch(`${base_url}tickets/${ticketId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await res.json()
      if (res.ok) {
        setSelectedTicket(data.ticket)
      }
    } catch (err) {
      console.error("Failed to fetch ticket details")
    }
  }

  const sendReply = async (e) => {
    e.preventDefault()
    if (!replyMessage.trim() || !selectedTicket) return

    try {
      const formData = new FormData()
      formData.append("message", replyMessage)

      const res = await fetch(`${base_url}tickets/${selectedTicket._id}/reply`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      })

      const data = await res.json()
      if (res.ok) {
        setSelectedTicket(data.ticket)
        setReplyMessage("")
        toast.success("Reply sent successfully")
        // Update the ticket in the list
        setTickets((prev) => prev.map((t) => (t._id === data.ticket._id ? data.ticket : t)))
      } else {
        toast.error(data.message || "Failed to send reply")
      }
    } catch (err) {
      toast.error("Server error")
    }
  }

  const updateTicketStatus = async (status) => {
    if (!selectedTicket) return

    try {
      const res = await fetch(`${base_url}tickets/${selectedTicket._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      })

      const data = await res.json()
      if (res.ok) {
        setSelectedTicket(data.ticket)
        toast.success("Ticket status updated")
        fetchTickets() // Refresh the list
      } else {
        toast.error(data.message || "Failed to update ticket")
      }
    } catch (err) {
      toast.error("Server error")
    }
  }

  useEffect(() => {
    fetchTickets()
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [selectedTicket?.replies])

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
    <div className="h-screen flex flex-col ">
      {/* Header */}
      <div className="bg-backround border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Admin Chatbot Interface</h1>
              <p className="text-muted-foreground">Manage tickets in real-time chat format</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant={chatbotEnabled ? "default" : "outline"} onClick={() => setChatbotEnabled(!chatbotEnabled)}>
              {chatbotEnabled ? <Power className="h-4 w-4 mr-2" /> : <PowerOff className="h-4 w-4 mr-2" />}
              {chatbotEnabled ? "Chatbot ON" : "Chatbot OFF"}
            </Button>
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Tickets Sidebar */}
        <div className="w-80 bg-background border-r flex flex-col">
          <div className="p-4 border-b">
            <h2 className="font-semibold">Active Tickets</h2>
            <p className="text-sm text-muted-foreground">{tickets.length} open tickets</p>
          </div>
          <div className="flex-1 overflow-y-auto">
            {tickets.map((ticket) => (
              <div
                key={ticket._id}
                className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                  selectedTicket?._id === ticket._id ? "bg-blue-50 border-blue-200" : ""
                }`}
                onClick={() => setSelectedTicket(ticket)}
              >
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{ticket.createdBy?.email?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {getStatusIcon(ticket.status)}
                      <Badge className={statusColors[ticket.status]} >
                        {ticket.status}
                      </Badge>
                    </div>
                    <h3 className="font-medium text-sm truncate">{ticket.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {ticket.createdBy?.email} • {format(new Date(ticket.createdAt), "MMM dd")}
                    </p>
                    <p className="text-xs text-muted-foreground">{ticket.replies?.length || 0} replies</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Interface */}
        <div className="flex-1 flex flex-col">
          {selectedTicket ? (
            <>
              {/* Chat Header */}
              <div className="bg-background border-b px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{selectedTicket.createdBy?.email?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h2 className="font-semibold">{selectedTicket.title}</h2>
                      <p className="text-sm text-muted-foreground">
                        {selectedTicket.createdBy?.email} • Ticket #{selectedTicket._id.slice(-8)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {selectedTicket.status === "open" && (
                      <Button size="sm" onClick={() => updateTicketStatus("in-progress")}>
                        Start Working
                      </Button>
                    )}
                    {selectedTicket.status === "in-progress" && (
                      <Button size="sm" onClick={() => updateTicketStatus("resolved")}>
                        Mark Resolved
                      </Button>
                    )}
                    <Badge className={statusColors[selectedTicket.status]}>
                      {selectedTicket.status.replace("-", " ")}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {/* Initial Ticket Message */}
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarFallback>{selectedTicket.createdBy?.email?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="bg-background rounded-lg p-4 shadow-sm border">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">{selectedTicket.createdBy?.email}</span>
                        <span className="text-sm text-muted-foreground">
                          {format(new Date(selectedTicket.createdAt), "MMM dd, yyyy 'at' HH:mm")}
                        </span>
                      </div>
                      <div
                        className="prose prose-sm max-w-none"
                        dangerouslySetInnerHTML={{ __html: selectedTicket.description }}
                      />
                    </div>
                  </div>
                </div>

                {/* Replies */}
                {selectedTicket.replies?.map((reply, index) => (
                  <div key={index} className={`flex gap-3 ${reply.isStaff ? "justify-end" : ""}`}>
                    {!reply.isStaff && (
                      <Avatar>
                        <AvatarFallback>{reply.author?.email?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
                      </Avatar>
                    )}
                    <div className={`flex-1 max-w-[70%] ${reply.isStaff ? "text-right" : ""}`}>
                      <div
                        className={`rounded-lg p-4 shadow-sm ${
                          reply.isStaff ? "bg-blue-500 text-white ml-auto" : "bg-background border"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          {reply.isStaff && <Bot className="h-4 w-4" />}
                          <span className="font-medium text-sm">
                            {reply.isStaff ? "Support Agent" : reply.author?.email}
                          </span>
                          <span className={`text-xs ${reply.isStaff ? "text-blue-100" : "text-muted-foreground"}`}>
                            {format(new Date(reply.createdAt), "MMM dd, yyyy 'at' HH:mm")}
                          </span>
                        </div>
                        <p className="text-sm">{reply.message}</p>
                      </div>
                    </div>
                    {reply.isStaff && (
                      <Avatar>
                        <AvatarFallback>
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Reply Form */}
              {selectedTicket.status !== "closed" && chatbotEnabled && (
                <div className="bg-background border-t p-4">
                  <form onSubmit={sendReply} className="flex gap-2">
                    <Input
                      value={replyMessage}
                      onChange={(e) => setReplyMessage(e.target.value)}
                      placeholder="Type your reply..."
                      className="flex-1"
                    />
                    <Button type="submit" disabled={!replyMessage.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              )}

              {!chatbotEnabled && (
                <div className="bg-gray-100 border-t p-4 text-center">
                  <p className="text-muted-foreground">Chatbot is currently disabled</p>
                </div>
              )}
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Select a ticket to start chatting</h3>
                <p className="text-muted-foreground">Choose a ticket from the sidebar to view the conversation</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminChatbotPage
