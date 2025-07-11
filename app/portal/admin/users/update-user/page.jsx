"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { base_url, useAuth } from "@/context/AuthContext";

const UpdateUser = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userId = searchParams.get('id');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    role: ''
  });
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { token } = useAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) return;
      
      try {
        const response = await fetch(`${base_url}auth/get-user/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setFormData({
            name: data.user.name,
            email: data.user.email,
            password: "",
            confirmPassword: "",
            phoneNumber: data.user.phoneNumber || "",
            role: data.user.role
          });
        } else {
          toast.error(data.message || "Failed to fetch user data");
          router.push('/portal/admin/users');
        }
      } catch (error) {
        toast.error("Server error, please try again later.");
        console.error("Fetch User Error:", error);
      } finally {
        setFetching(false);
      }
    };

    fetchUserData();
  }, [userId, token, router]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else if (field === "confirmPassword") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password && formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setLoading(true);
    setErrors([]);

    try {
      // Remove confirmPassword from the payload
      const { confirmPassword, ...payload } = formData;
      // Only include password if it's being changed
      if (!payload.password) {
        delete payload.password;
      }

      const response = await fetch(`${base_url}auth/user/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("User updated successfully!");
        router.push('/portal/admin/users');
      } else {
        if (data.errors) {
          setErrors(data.errors);
        }
        toast.error(data.message || "An error occurred");
      }
    } catch (error) {
      toast.error("Server error, please try again later.");
      console.error("Update Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl border-0">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Update User</CardTitle>
          <CardDescription className="text-center">
            Update user information
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          {errors.length > 0 && (
            <Alert variant="destructive" className="mb-6">
              <AlertDescription>
                <ul className="list-disc pl-5">
                  {errors.map((err, index) => (
                    <li key={index}>{err.msg}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-sm bg-background"
                required
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="support">Support</option>
                <option value="dev">Dev</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">New Password (leave blank to keep current)</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => togglePasswordVisibility("password")}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                  </span>
                </Button>
              </div>
            </div>

            {formData.password && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm new password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3"
                    onClick={() => togglePasswordVisibility("confirmPassword")}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    <span className="sr-only">
                      {showConfirmPassword ? "Hide password" : "Show password"}
                    </span>
                  </Button>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="+254 (555) 123-4567"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex gap-2">
              <Button
                type="submit"
                className="flex-1"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Updating...
                  </>
                ) : (
                  "Update User"
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => router.push('/portal/admin/users')}
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdateUser;