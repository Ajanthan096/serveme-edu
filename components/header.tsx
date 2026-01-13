"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, School, Languages } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark shadow-sm">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
                <div className="flex items-center justify-between py-3">
                    <Link href="/" className="flex items-center gap-4">

                        <div className="flex items-center gap-1">
                            <span className="text-xl font-bold text-primary">ServeMe</span>
                            <div className="bg-secondary/20 text-secondary rounded-md px-3 py-2 font-bold text-xs">EDU</div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex flex-1 justify-end gap-8">
                        <div className="flex items-center gap-6 lg:gap-9">
                            <Link
                                href="/"
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="/courses"
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                Courses
                            </Link>
                            <Link
                                href="#teachers"
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                Teachers
                            </Link>
                            <Link
                                href="#about"
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                About Us
                            </Link>
                            <Link
                                href="#contact"
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                Contact
                            </Link>
                        </div>
                        <div className="flex gap-2">
                            <Button asChild>
                                <Link href="/auth">Sign Up</Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="/auth">Login</Link>
                            </Button>
                            <Button variant="outline" size="icon">
                                <Languages className="h-5 w-5" />
                            </Button>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <Menu className="h-6 w-6" />
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t">
                        <nav className="flex flex-col gap-4">
                            <Link href="/courses" className="text-sm font-medium">
                                Courses
                            </Link>
                            <Link href="#teachers" className="text-sm font-medium">
                                Teachers
                            </Link>
                            <Link href="#about" className="text-sm font-medium">
                                About Us
                            </Link>
                            <Link href="#contact" className="text-sm font-medium">
                                Contact
                            </Link>
                            <div className="flex gap-2 pt-2">
                                <Button asChild className="flex-1">
                                    <Link href="/auth">Sign Up</Link>
                                </Button>
                                <Button variant="outline" asChild className="flex-1">
                                    <Link href="/auth">Login</Link>
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}