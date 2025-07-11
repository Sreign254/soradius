'use client'

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useAuth, base_url } from "@/context/AuthContext"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Loader2 } from 'lucide-react'
import { toast } from "sonner"

const OtpVerificationPage: React.FC = () => {
  const router = useRouter()
  const { user, loading, refreshUser } = useAuth()
  const [isSendingEmail, setIsSendingEmail] = useState(false)
  const [isSendingPhone, setIsSendingPhone] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setLoadingProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 100))
      }, 200)

      return () => clearInterval(interval)
    } else if (!user) {
      refreshUser()
    }
  }, [loading, user, refreshUser])

  // useEffect(() => {
  //   if(!user) {
  //     router.push('/login')
  //   } 
  // }, [user, router])

  const handleSendCode = async (method: "email" | "phone") => {
    try {
      const identifier = method === "email" ? user?.email : user?.phoneNumber

      if (method === "email") setIsSendingEmail(true)
      if (method === "phone") setIsSendingPhone(true)

      // const response = await fetch("http://192.168.38.182:5000/api/auth/send-login-code", {
        const response = await fetch(`${base_url}auth/send-login-code`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier, method }),
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.msg || "Error sending code")
      }

      toast(  "Success",{
        description: `Code sent via ${method}`,
      })
      router.push("/otp-verification")

    // } catch (error: any) {
    } catch (error) {
      toast( "Error" , {
        // description: `Failed to send code: ${error.message}`,
        description: `Failed to send code: ${error}`,
      })
    } finally {
      if (method === "email") setIsSendingEmail(false)
      if (method === "phone") setIsSendingPhone(false)
    }
  }
  

  const maskEmail = (email: string) => {
    const [localPart, domain] = email.split("@")
    const maskedLocal = localPart[0] + "*".repeat(localPart.length - 2) + localPart[localPart.length - 1]
    return `${maskedLocal}@${domain}`
  }

  const maskPhoneNumber = (phone: string = "") => {
    if (!phone || phone.length < 7) return "Invalid phone number"
    const visibleStart = phone.slice(0, 4)
    const visibleEnd = phone.slice(-3)
    const maskedMiddle = "*".repeat(phone.length - visibleStart.length - visibleEnd.length)
    return `${visibleStart}${maskedMiddle}${visibleEnd}`
  }


  // const maskPhoneNumber = (phone: string) => {
  //   const visibleStart = phone.slice(0, 4)
  //   const visibleEnd = phone.slice(-3)
  //   const maskedMiddle = "*".repeat(phone.length - visibleStart.length - visibleEnd.length)
  //   return `${visibleStart}${maskedMiddle}${visibleEnd}`
  // }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen
       bg-gradient-to-b from-green-300 to-blue-900 px-4">
        <Card className="w-full max-w-md shadow-lg">
          {loading || !user ? (
            <CardContent className="flex flex-col items-center justify-center h-64">
              <div className="w-24 h-24 relative">
                <div className="absolute inset-0 rounded-full border-4 border-green-500 opacity-25"></div>
                <div 
                  className="absolute inset-0 rounded-full border-4 border-green-500 border-t-transparent animate-spin"
                  style={{ 
                    clipPath: `inset(0 0 0 ${100 - loadingProgress}%)`,
                    transition: 'clip-path 0.2s ease-in-out'
                  }}
                ></div>
              </div>
              <CardTitle className="text-2xl font-bold text-center mt-4">Loading User Data</CardTitle>
            </CardContent>
          ) : (
            <>
              <CardHeader>
                <div className="flex justify-center mb-6 relative">
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-50"></div>
                    <div className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-30"></div>
                    <Image
                      src="/img/favicon.png"
                      width={100}
                      height={100}
                      alt="Flag"
                      className="rounded-md border-4 border-green-500 shadow-lg"
                    />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-center">OTP Verification</CardTitle>
                <CardDescription className="text-center">
                  Select where you would like to receive a verification code
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-between h-auto py-3 px-4 hover:bg-green-50 transition-colors hover:text-green-600 hover:border-green-500"
                  onClick={() => handleSendCode("email")}
                  disabled={isSendingEmail}
                >
                  {isSendingEmail ? (
                    <Loader2 className="h-5 w-5 animate-spin text-green-600" />
                  ) : (
                    <>
                      <span className="hover:text-black">Send code to my email</span>
                      <span className="text-gray-500">{maskEmail(user.email)}</span>
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-between h-auto py-3 px-4 hover:bg-green-50 transition-colors hover:text-green-600 hover:border-green-500"

                  onClick={() => handleSendCode("phone")}
                  disabled={isSendingPhone}
                >
                  {isSendingPhone ? (
                    <Loader2 className="h-5 w-5 animate-spin text-green-600" />
                  ) : (
                    <>
                      <span>Send code to my phone</span>
                      <span className="text-gray-500">{maskPhoneNumber(user.phoneNumber)}</span>
                    </>
                  )}
                </Button>
              </CardContent>
              <Separator className="my-6" />
              <CardFooter>
                <Button
                  variant="ghost"
                  className="w-full text-sm border border-orange-400 border-dashed rounded-full hover:bg-green-50 hover:border-green-500 transition-colors"
                  onClick={() => router.back()}
                >
                  Back
                </Button>
              </CardFooter>

            </>
          )}
        </Card>
      </div>
    </>
  )
}

export default OtpVerificationPage

