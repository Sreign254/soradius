"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { useAuth, base_url } from "@/context/AuthContext"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { toast } from "sonner"
import {
  ArrowLeft,
  Edit,
  MessageSquare,
  Calendar,
  User,
  Tag,
  Paperclip,
  Send,
  CheckCircle,
  AlertTriangle,
  Clock,
  XCircle,
} from "lucide-react"
import { format } from "date-fns"
import { useRouter, useParams } from "next/navigation"

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

const ViewTicket = () => {
  const { token, user } = useAuth()
  const router = useRouter()
  const params = useParams()
  const [ticket, setTicket] = useState(null)
  const [loading, setLoading] = useState(true)
  const [replyLoading, setReplyLoading] = useState(false)
  const [updateLoading, setUpdateLoading] = useState(false)
  const [replyMessage, setReplyMessage] = useState("")
  const [replyFiles, setReplyFiles] = useState([])

  const userRole = user?.role || "user"
  const isStaff = userRole === "admin" || userRole === "support"
  const isOwner = ticket?.createdBy?._id === user?.id

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
        setTicket(data.ticket)
      } else {
        toast.error(data.message || "Failed to fetch ticket")
        router.push("/tickets")
      }
    } catch (err) {
      toast.error("Server error")
      router.push("/tickets")
    } finally {
      setLoading(false)
    }
  }

  const addReply = async (e) => {
    e.preventDefault()
    if (!replyMessage.trim()) return

    setReplyLoading(true)
    try {
      const formData = new FormData()
      formData.append("message", replyMessage)

      if (replyFiles.length > 0) {
        replyFiles.forEach((file) => {
          formData.append("attachments", file)
        })
      }

      const res = await fetch(`${base_url}tickets/${params.id}/reply`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      })

      const data = await res.json()
      if (res.ok) {
        setTicket(data.ticket)
        setReplyMessage("")
        setReplyFiles([])
        toast.success("Reply added successfully")
      } else {
        toast.error(data.message || "Failed to add reply")
      }
    } catch (err) {
      toast.error("Server error")
    } finally {
      setReplyLoading(false)
    }
  }

  const updateTicketStatus = async (status) => {
    setUpdateLoading(true)
    try {
      const res = await fetch(`${base_url}tickets/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      })

      const data = await res.json()
      if (res.ok) {
        setTicket(data.ticket)
        toast.success("Ticket updated successfully")
      } else {
        toast.error(data.message || "Failed to update ticket")
      }
    } catch (err) {
      toast.error("Server error")
    } finally {
      setUpdateLoading(false)
    }
  }

  const assignTicket = async (assignedTo) => {
    setUpdateLoading(true)
    try {
      const res = await fetch(`${base_url}tickets/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ assignedTo }),
      })

      const data = await res.json()
      if (res.ok) {
        setTicket(data.ticket)
        toast.success("Ticket assigned successfully")
      } else {
        toast.error(data.message || "Failed to assign ticket")
      }
    } catch (err) {
      toast.error("Server error")
    } finally {
      setUpdateLoading(false)
    }
  }

  useEffect(() => {
    if (params.id) {
      fetchTicket()
    }
  }, [params.id])

  const getStatusIcon = (status) => {
    switch (status) {
      case "open":
        return <AlertTriangle className="h-5 w-5 text-blue-600" />
      case "in-progress":
        return <Clock className="h-5 w-5 text-yellow-600" />
      case "resolved":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "closed":
        return <XCircle className="h-5 w-5 text-gray-600" />
      default:
        return <AlertTriangle className="h-5 w-5 text-blue-600" />
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!ticket) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Ticket not found</h1>
          <Button onClick={() => router.push("/tickets")} className="mt-4">
            Back to Tickets
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
            <h1 className="text-3xl font-bold">{ticket.title}</h1>
            <p className="text-muted-foreground">Ticket #{ticket._id.slice(-8)}</p>
          </div>
        </div>
        {(isOwner || isStaff) && (
          <Button onClick={() => router.push(`/tickets/edit/${ticket._id}`)}>
            <Edit className="h-4 w-4 mr-2" />
            Edit Ticket
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Ticket Details */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Ticket Details</CardTitle>
                <div className="flex items-center gap-2">
                  {getStatusIcon(ticket.status)}
                  <Badge className={statusColors[ticket.status]}>{ticket.status.replace("-", " ")}</Badge>
                  <Badge className={priorityColors[ticket.priority]}>{ticket.priority}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: ticket.description }} />

              {ticket.attachments && ticket.attachments.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Paperclip className="h-4 w-4" />
                    Attachments
                  </h4>
                  <div className="space-y-2">
                    {ticket.attachments.map((attachment, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <Paperclip className="h-3 w-3" />
                        <span>{attachment.filename}</span>
                        <span className="text-muted-foreground">({(attachment.size / 1024 / 1024).toFixed(2)} MB)</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Replies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Replies ({ticket.replies?.length || 0})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {ticket.replies && ticket.replies.length > 0 ? (
                ticket.replies.map((reply, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Avatar>
                        <AvatarFallback>{reply.author?.username?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-medium">{reply.author?.username}</span>
                          {reply.isStaff && (
                            <Badge variant="outline" className="text-xs">
                              Staff
                            </Badge>
                          )}
                          <span className="text-sm text-muted-foreground">
                            {format(new Date(reply.createdAt), "MMM dd, yyyy 'at' HH:mm")}
                          </span>
                        </div>
                        <div className="prose prose-sm max-w-none">
                          <p>{reply.message}</p>
                        </div>
                        {reply.attachments && reply.attachments.length > 0 && (
                          <div className="mt-2">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Paperclip className="h-3 w-3" />
                              {reply.attachments.length} attachment(s)
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground text-center py-4">No replies yet</p>
              )}
            </CardContent>
          </Card>

          {/* Reply Form */}
          {ticket.status !== "closed" && (
            <Card>
              <CardHeader>
                <CardTitle>Add Reply</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={addReply} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="reply">Your Reply</Label>
                    <Textarea
                      id="reply"
                      value={replyMessage}
                      onChange={(e) => setReplyMessage(e.target.value)}
                      placeholder="Type your reply here..."
                      rows={4}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reply-attachments">Attachments</Label>
                    <Input
                      id="reply-attachments"
                      type="file"
                      multiple
                      onChange={(e) => setReplyFiles(Array.from(e.target.files))}
                      accept=".pdf,.doc,.docx,.txt,.zip,.jpg,.jpeg,.png"
                    />
                  </div>
                  <Button type="submit" disabled={replyLoading}>
                    {replyLoading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Reply
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Ticket Info */}
          <Card>
            <CardHeader>
              <CardTitle>Ticket Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Created: {format(new Date(ticket.createdAt), "MMM dd, yyyy")}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <User className="h-4 w-4 text-muted-foreground" />
                <span>Created by: {ticket.createdBy?.username}</span>
              </div>
              {ticket.assignedTo && (
                <div className="flex items-center gap-2 text-sm">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>Assigned to: {ticket.assignedTo.username}</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-sm">
                <Tag className="h-4 w-4 text-muted-foreground" />
                <span>Category: {ticket.category.replace("-", " ")}</span>
              </div>
              {ticket.tags && ticket.tags.length > 0 && (
                <div>
                  <p className="text-sm font-medium mb-2">Tags:</p>
                  <div className="flex flex-wrap gap-1">
                    {ticket.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Staff Actions */}
          {isStaff && (
            <Card>
              <CardHeader>
                <CardTitle>Staff Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Update Status</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      size="sm"
                      variant={ticket.status === "in-progress" ? "default" : "outline"}
                      onClick={() => updateTicketStatus("in-progress")}
                      disabled={updateLoading}
                    >
                      In Progress
                    </Button>
                    <Button
                      size="sm"
                      variant={ticket.status === "resolved" ? "default" : "outline"}
                      onClick={() => updateTicketStatus("resolved")}
                      disabled={updateLoading}
                    >
                      Resolved
                    </Button>
                    <Button
                      size="sm"
                      variant={ticket.status === "open" ? "default" : "outline"}
                      onClick={() => updateTicketStatus("open")}
                      disabled={updateLoading}
                    >
                      Reopen
                    </Button>
                    <Button
                      size="sm"
                      variant={ticket.status === "closed" ? "default" : "outline"}
                      onClick={() => updateTicketStatus("closed")}
                      disabled={updateLoading}
                    >
                      Close
                    </Button>
                  </div>
                </div>

                {!ticket.assignedTo && (
                  <div className="space-y-2">
                    <Label>Assign to Me</Label>
                    <Button size="sm" onClick={() => assignTicket(user.id)} disabled={updateLoading} className="w-full">
                      Assign to Me
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

export default ViewTicket
