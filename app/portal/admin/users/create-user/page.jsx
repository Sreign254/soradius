"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { Eye, EyeOff, Wifi, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { base_url, useAuth } from "@/context/AuthContext";
const CreateUser = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    role: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {user, token} = useAuth()

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

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setLoading(true);
    setErrors([]);

    try {
      const response = await fetch(`${base_url}auth/create-user`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });


      const data = await response.json();

      if (response.ok) {
        toast.success(`Registration successful! Check your email (${formData.email})`);
        // router.push(`/otp?email=${encodeURIComponent(formData.email)}`);
        router.push('/portal/admin/users')
      } else {
        if (data.errors) {
          setErrors(data.errors);
        }
        toast.error(data.message || "An error occurred");
      }
    } catch (error) {
      toast.error("Server error, please try again later.");
      console.error("Registration Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center
      p-4">
      <Card className="w-full max-w-md shadow-xl border-0">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-2">
            <div className="bg-primary rounded-full p-2 mr-2">
              <Wifi className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">Creat user</span>
          </div>
          <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
          <CardDescription className="text-center">
           Streamline your Projects the Modern style
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
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a secure password"
                  value={formData.password}
                  onChange={handleChange}
                  required
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
              <div className="space-y-2">
              <Label htmlFor="role">Select Role</Label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-sm bg-background"
                required
              >
                <option value="">-- Select Role --</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="support">Support</option>
                <option value="dev">Dev</option>
              </select>
            </div>

            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="font-family-future">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
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

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </Button>
          </form>
        </CardContent>
        
       
      </Card>
    </div>
  );
};

export default CreateUser;
