"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth, base_url } from "@/context/AuthContext";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, LoaderCircle } from "lucide-react";

const OtpVerification = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); 

  // Timer for OTP expiration
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      toast.error("Verification Failed", {
        description: "Please enter the OTP code",
      });
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch(`${base_url}auth/login-verification`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user?._id,
          otp,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || "Error verifying OTP");
      }

      toast.success("Verification Successful", {
        description: "Your identity has been verified",
      });

      switch (user?.role) {
        case "user":
          router.push("/portal/customer");
          break;
        case "support":
          router.push("/portal/support");
          break;
        case "admin":
          router.push("/portal/admin");
          break;
        case "dev":
          router.push("/portal/dev");
          break;
        default:
          router.push("/dashboard");
      }

    } catch (error) {
      toast.error("Verification Failed", {
        description: error.message || "Invalid or expired OTP code",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    try {
      setIsLoading(true);

      const identifier = user?.email || user?.phoneNumber;
      const method = user?.email ? "email" : "phone";

      const response = await fetch(`${base_url}auth/send-login-code`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier, method }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.msg || "Failed to resend code");

      toast.success("OTP Resent", {
        description: `A new code was sent via ${method}`,
      });

      setTimeLeft(600); 
    } catch (error) {
      toast.error("Failed to resend OTP", {
        description: error.message || "Please try again later",
      });
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1 text-center pb-4 pt-6">
          <div className="flex justify-center mb-2">
            <Shield className="h-12 w-12 text-green-600" />
          </div>
          <CardTitle className="text-2xl font-semibold">Verify Your Identity</CardTitle>
          <p className="text-sm ">
            Please enter the verification code sent to your {user?.email ? 'email' : 'phone'}
          </p>
        </CardHeader>
        
        <CardContent className="space-y-4 pt-2">
          <div className="text-center mb-2">
            <div className="text-sm font-medium text-gray-500">Code expires in</div>
            <div className={`text-lg font-semibold ${timeLeft < 60 ? 'text-red-500' : 'text-gray-700'}`}>
              {formatTime(timeLeft)}
            </div>
          </div>
          
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Enter verification code"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
              className=" text-lg py-6 font-medium tracking-widest"
              maxLength={6}
              autoFocus
            />
          </div>
          
          <Button 
            onClick={handleVerifyOtp}
            disabled={isLoading || !otp}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-6"
          >
            {isLoading ? (
              <>
                <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                Verifying...
              </>
            ) : (
              "Verify & Continue"
            )}
          </Button>
        </CardContent>
        
        <Separator className="my-2" />
        
        <CardFooter className="flex flex-col space-y-4 pt-4 pb-6">
          <div className="text-center w-full">
            <button
              onClick={handleResendOtp}
              disabled={isLoading || timeLeft > 0}
              className="text-sm text-green-600 hover:text-green-700 font-medium"
            >
              {timeLeft > 0 ? `Resend code in ${formatTime(timeLeft)}` : "Resend verification code"}
            </button>
          </div>
          
          <Button
            variant="outline"
            onClick={() => router.back()}
            className="w-full flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default OtpVerification;