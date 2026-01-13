"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { School, Eye, EyeOff, Languages } from "lucide-react";
import Image from "next/image";

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex h-screen w-full">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-white dark:bg-background-dark border-b shadow-sm">
        <Link href="/" className="flex items-center gap-4">
          <School className="w-8 h-8 text-primary" />
          <h2 className="text-xl font-bold">ServeMe</h2>
        </Link>
        <Button variant="outline" size="sm" className="hidden sm:flex">
          <Languages className="w-4 h-4 mr-2" />
          EN | SI | TA
        </Button>
      </header>

      {/* Left Side - Image */}
      <div className="hidden lg:block relative w-1/2 bg-slate-900">
        <div className="absolute inset-0">
          <Image
            src="/images/auth/hero.jpg"
            alt="Students studying together"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
        <div className="absolute bottom-0 left-0 p-12 text-white max-w-xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary ring-2 ring-background-dark"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-slate-200 ml-2">
              Trusted by 10,000+ students in Sri Lanka
            </span>
          </div>
          <blockquote className="text-2xl font-semibold leading-relaxed mb-4">
            "The structured courses helped me ace my A-Levels. Highly
            recommended for local curriculum content!"
          </blockquote>
          <p className="font-medium text-secondary">Kasun Perera</p>
          <p className="text-sm text-slate-300">Colombo, Sri Lanka</p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 mt-16 lg:mt-0 overflow-y-auto">
        <div className="w-full max-w-md space-y-6">
          {/* Tabs */}
          <div className="flex border-b">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 pb-3 text-sm font-bold border-b-2 transition-colors ${
                isLogin
                  ? "border-secondary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-secondary"
              }`}
            >
              Log In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 pb-3 text-sm font-bold border-b-2 transition-colors ${
                !isLogin
                  ? "border-secondary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-secondary"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">
              {isLogin ? "Welcome Back!" : "Create Account"}
            </h1>
            <p className="text-muted-foreground">
              {isLogin
                ? "Access over 1,000 courses tailored for the Sri Lankan curriculum."
                : "Join thousands of students mastering their exams."}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Amal Perera"
                  className="h-12"
                  required
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="student@example.com"
                className="h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                {isLogin && (
                  <Link
                    href="#"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Forgot Password?
                  </Link>
                )}
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="h-12 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full h-12 shadow-lg" size="lg">
              {isLogin ? "Log In" : "Sign Up"}
            </Button>

            <div className="relative flex items-center py-2">
              <Separator className="flex-1" />
              <span className="px-4 text-sm text-muted-foreground font-medium">
                Or continue with
              </span>
              <Separator className="flex-1" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                type="button"
                variant="outline"
                className="h-11"
                onClick={() => console.log("Google login")}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>
              <Button
                type="button"
                variant="outline"
                className="h-11"
                onClick={() => console.log("Facebook login")}
              >
                <svg
                  className="w-5 h-5 mr-2 text-[#1877F2]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </Button>
            </div>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-muted-foreground">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-bold text-secondary hover:underline"
            >
              {isLogin ? "Sign Up" : "Log In"}
            </button>
          </p>

          <div className="flex justify-center gap-2 sm:hidden">
            <button className="text-sm text-muted-foreground">EN</button>
            <span className="text-muted-foreground">|</span>
            <button className="text-sm text-muted-foreground">SI</button>
            <span className="text-muted-foreground">|</span>
            <button className="text-sm text-muted-foreground">TA</button>
          </div>
        </div>
      </div>
    </div>
  );
}