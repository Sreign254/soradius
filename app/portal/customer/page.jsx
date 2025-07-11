"use client"
import React from 'react';
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth, base_url } from "@/context/AuthContext";
import { toast } from "sonner";
import { 
  Ticket, 
  TicketCheck, 
  TicketX, 
  TicketPlus,
  AlertCircle,
  Clock,
  CheckCircle2,
  CircleSlash
} from "lucide-react";

const TicketDashboard = () => {
  const { user, token } = useAuth();
  const [stats, setStats] = useState({
    created: 0,
    assigned: 0,
    open: 0,
    inProgress: 0,
    resolved: 0,
    closed: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTicketStats = async () => {
      try {
        setLoading(true);
        
        // Fetch created tickets count
        const createdResponse = await fetch(`${base_url}tickets/my-tickets/count`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        
        // Fetch assigned tickets count
        const assignedResponse = await fetch(`${base_url}tickets/assigned/count`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });

        // Fetch status counts
        const statusResponse = await fetch(`${base_url}tickets/stats`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (!createdResponse.ok || !assignedResponse.ok || !statusResponse.ok) {
          throw new Error('Failed to fetch ticket stats');
        }

        const createdData = await createdResponse.json();
        const assignedData = await assignedResponse.json();
        const statusData = await statusResponse.json();

        setStats({
          created: createdData.count || 0,
          assigned: assignedData.count || 0,
          ...(statusData.stats || {})
        });
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (user && token) {
      fetchTicketStats();
    }
  }, [user, token]);

  // Card component for reusability
  const StatCard = ({ title, value, icon, color }) => {
    const iconColors = {
      primary: "text-primary",
      success: "text-green-500",
      warning: "text-yellow-500",
      danger: "text-red-500",
      info: "text-blue-500"
    };

    const bgColors = {
      primary: "bg-primary/10",
      success: "bg-green-500/10",
      warning: "bg-yellow-500/10",
      danger: "bg-red-500/10",
      info: "bg-blue-500/10"
    };

    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <div className={`p-2 rounded-lg ${bgColors[color]}`}>
            {React.cloneElement(icon, { className: `w-4 h-4 ${iconColors[color]}` })}
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="animate-pulse">
              <div className="h-8 w-16 bg-gray-200 rounded"></div>
            </div>
          ) : (
            <div className="text-2xl font-bold">{value}</div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Ticket Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Created Tickets */}
        <StatCard
          title="Created Tickets"
          value={stats.created}
          icon={<TicketPlus />}
          color="primary"
        />

        {/* Assigned Tickets */}
        <StatCard
          title="Assigned Tickets"
          value={stats.assigned}
          icon={<TicketCheck />}
          color="info"
        />

        {/* Open Tickets */}
        <StatCard
          title="Open Tickets"
          value={stats.open}
          icon={<AlertCircle />}
          color="warning"
        />

        {/* In Progress Tickets */}
        <StatCard
          title="In Progress"
          value={stats.inProgress}
          icon={<Clock />}
          color="info"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Resolved Tickets */}
        <StatCard
          title="Resolved"
          value={stats.resolved}
          icon={<CheckCircle2 />}
          color="success"
        />

        {/* Closed Tickets */}
        <StatCard
          title="Closed Tickets"
          value={stats.closed}
          icon={<CircleSlash />}
          color="danger"
        />

        {/* All Assigned Tickets */}
        <StatCard
          title="Total Assigned"
          value={stats.assigned}
          icon={<Ticket />}
          color="primary"
        />
      </div>
    </div>
  );
};

export default TicketDashboard;