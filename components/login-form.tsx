'use client';

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { base_url } from "@/context/AuthContext";
export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form as HTMLFormElement);

    const identifier = formData.get("identifier");
    const password = formData.get("password");

    try {
          const response = await fetch (`${base_url}auth/login`, {
   
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: identifier?.toString().trim(),
          password: password?.toString().trim(),
          deviceFingerprint: window.navigator.userAgent,
          deviceType: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(navigator.userAgent) ? 'mobile' : 'desktop',
          deviceModel: navigator.platform || 'unknown',
          platform: navigator.platform || 'unknown'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.accessToken) {
          localStorage.setItem('accessToken', data.accessToken);
          localStorage.setItem('refreshToken', data.refreshToken);
          router.push('/otp');
        } else {
          setError('Invalid response from server');
        }
      } else {
        setError(data.msg || 'Invalid credentials');
      }
    } catch (err) {
      setError(`'Network error. Please try again.'${err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <form onSubmit={handleSubmit} className={cn("flex flex-col gap-6", className)} {...props}>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email or ID number below to login to your account
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="identifier">Email or ID Number</Label>
            <Input id="identifier" name="identifier" type="text" placeholder="Enter your email or ID number" required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <button
                type="button"
                className="ml-auto text-sm underline-offset-4 hover:underline"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"} Password
              </button>
            </div>
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </div>
        <div className="text-sm text-center">
          Don&apos;t have an account?{" "}
          <Link href="/register">
          <p  className="underline underline-offset-4 text-green-700">
            Sign up
          </p>
          </Link>
        </div>
      </form>
    </div>
  );
}
