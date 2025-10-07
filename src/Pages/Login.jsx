import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock, Send, Loader2, ArrowLeft, Chrome } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return alert("Please enter your email");

    // Mock check — normally check via API if user exists
    const userExists = email !== "newuser@example.com";

    if (!userExists) {
      setIsNewUser(true);
      setIsVerifying(false);
      alert("You are a new user! Please verify with OTP.");
    } else {
      alert("Welcome back! Logged in successfully 🎉");
    }
  };

  const handleOtpVerify = async () => {
    if (otp === "1234") {
      alert("OTP verified successfully ✅");
      setIsNewUser(false);
    } else {
      alert("Invalid OTP ❌");
    }
  };

  const handleGoogleLogin = () => {
    alert("Redirecting to Google login...");
  };

  return (
    <div className="min-h-[80dvh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
      <Card className="w-full max-w-md shadow-lg border border-gray-200">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-800">
            {isNewUser ? "Verify Your Email" : "Welcome Back"}
          </CardTitle>
          <p className="text-sm text-gray-500">
            {isNewUser
              ? "We’ve sent an OTP to your email address"
              : "Login to your account to continue"}
          </p>
        </CardHeader>

        <CardContent>
          {!isNewUser ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Mail size={16} /> Email
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Lock size={16} /> Password
                </label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>

              <Button type="submit" className="w-full bg-orange-500 text-white hover:bg-amber-600 cursor-pointer">
                Login
              </Button>

              {/* OR Divider */}
              <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                <span className="w-1/4 border-t"></span> OR{" "}
                <span className="w-1/4 border-t"></span>
              </div>

              {/* Google Login */}
              <Button
                variant="outline"
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-2 cursor-pointer"
              >
                <Chrome size={18} /> Continue with Google
              </Button>
            </form>
          ) : (
            <div className="space-y-4">
              {/* OTP Verification */}
              <div>
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Send size={16} /> Enter OTP
                </label>
                <Input
                  type="text"
                  placeholder="Enter 4-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={4}
                  className="mt-1"
                />
              </div>

              <Button
                onClick={handleOtpVerify}
                className="w-full"
                disabled={isVerifying}
              >
                {isVerifying ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={18} />
                    Verifying...
                  </>
                ) : (
                  "Verify OTP"
                )}
              </Button>

              <Button
                variant="ghost"
                className="w-full flex items-center justify-center text-gray-500"
                onClick={() => setIsNewUser(false)}
              >
                <ArrowLeft size={16} className="mr-1" /> Back to Login
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
