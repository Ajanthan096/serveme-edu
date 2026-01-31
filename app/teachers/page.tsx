"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  ChevronRight,
  ChevronLeft,
  Star,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const teachers = [
  {
    id: 1,
    name: "Mr. Kasun Perera",
    subjects: "Mathematics • Combined Maths",
    rating: 4.9,
    image:"/images/teachers/kasun.jpg",
    medium: "Sinhala Medium",
    level: "A-Level",
    badge: "TOP RATED",
    badgeColor: "bg-secondary",
    description:
      "Over 10 years of experience helping A-Level students excel in Combined Maths. Proven track record of district rankers.",
  },
  {
    id: 2,
    name: "Ms. Fathima Nazeer",
    subjects: "English Literature",
    rating: 4.7,
    image: "/images/teachers/fathima.jpg",
    medium: "English Medium",
    level: "O-Level",
    description:
      "Passionate about literature and creative writing. I help students find their voice and master the English language.",
  },
  {
    id: 3,
    name: "Mr. Ruwan Silva",
    subjects: "Physics • Chemistry",
    rating: 4.5,
    image: "/images/teachers/ruwan.jpg",
    medium: "Sinhala Medium",
    level: "A-Level",
    badge: "VERIFIED",
    badgeColor: "bg-green-600",
    description:
      "Making complex scientific concepts simple and engaging. Practical approach to learning Physics and Chemistry.",
  },
  {
    id: 4,
    name: "Ms. Tharushi J.",
    subjects: "History • Sinhala",
    rating: 4.8,
    image: "/images/teachers/tharushi.jpg",
    medium: "Sinhala Medium",
    level: "Grade 6-9",
    description:
      "Bringing history to life with storytelling. Dedicated to helping students appreciate our heritage and language.",
  },
  {
    id: 5,
    name: "Mr. Dinesh Kumar",
    subjects: "ICT • Computer Science",
    rating: 4.6,
    image: "/images/teachers/dinesh.jpg",
    medium: "English Medium",
    level: "O-Level",
    description:
      "Expert in programming and ICT theory. Preparing students for the digital future with practical coding lessons.",
  },
  {
    id: 6,
    name: "Mr. Ajith Perera",
    subjects: "Commerce • Economics",
    rating: 0,
    image: "/images/teachers/ajith.jpg",
    medium: "Sinhala Medium",
    level: "A-Level",
    badge: "NEW",
    badgeColor: "bg-secondary",
    description:
      "Simplifying commerce and economics. Helping students understand market dynamics and business principles.",
  },
];

const subjects = [
  { id: "all", label: "All Subjects", icon: "✓" },
  { id: "math", label: "Mathematics", icon: "∑" },
  { id: "science", label: "Science", icon: "⚗" },
  { id: "english", label: "English", icon: "A" },
  { id: "sinhala", label: "Sinhala", icon: "අ" },
];

type SortOption = "recommended" | "rating" | "price";

export default function TeachersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("recommended");
  const [selectedSubject, setSelectedSubject] = useState("all");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

     <main className="flex-1 py-5 px-4 md:px-8 lg:px-20 xl:px-40">
         <div className="w-full max-w-7xl mx-auto flex flex-col gap-6">
         {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-primary font-medium hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="font-medium">Teachers</span>
          </div>
        {/* Hero Section */}
        <div className="min-h-[80] flex flex-col gap-6 rounded-xl bg-linear-to-br from-slate-900 to-slate-800 p-8 items-start justify-end shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/teachers/teachers-hero.png')] bg-cover bg-center opacity-20" />
            <div className="relative z-10 flex flex-col gap-2 max-w-2xl">
              <span className="w-fit rounded-full bg-secondary/90 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">
                Sri Lanka's #1 Learning Platform
              </span>
              <h1 className="text-white text-3xl md:text-5xl font-black">
                Find Expert Tutors
                  <br />
                  for O-Levels & A-Levels
              </h1>
              <p className="text-gray-200 text-sm md:text-lg">
               Connect with qualified educators for Mathematics, Science,
                  English, and more. Browse profiles, read reviews, and book
                  your first lesson today.
              </p>
            </div>
            <Button size="lg" className="relative z-10">
              Explore Featured Courses
            </Button>
          </div>
        
        

        {/* Content Container */}
        <div className="w-full max-w-7xl mx-auto  py-4 lg:py-6 flex flex-col gap-8">
          {/* Section Header */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-700 pb-4">
              <div>
                <h3 className="text-slate-900 dark:text-white text-2xl font-bold">
                  Browse Teachers
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                  Over 500+ qualified instructors available
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Sort by:
                </span>
                <Select
                  value={sortBy}
                  onValueChange={(value: SortOption) => setSortBy(value)}
                >
                  <SelectTrigger className="w-[180px] border-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="rating">Rating: High to Low</SelectItem>
                    <SelectItem value="price">Price: Low to High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Filter Chips */}
            <div className="flex gap-3 flex-wrap items-center">
              {subjects.map((subject) => (
                <Button
                  key={subject.id}
                  variant={
                    selectedSubject === subject.id ? "default" : "outline"
                  }
                  className={`rounded-full ${
                    selectedSubject === subject.id
                      ? "bg-slate-900 hover:bg-slate-700"
                      : ""
                  }`}
                  onClick={() => setSelectedSubject(subject.id)}
                >
                  {selectedSubject === subject.id && (
                    <CheckCircle className="w-4 h-4" />
                  )}
                  <span>{subject.label}</span>
                </Button>
              ))}
              <div className="w-px h-6 bg-slate-300 dark:bg-slate-700 mx-2" />
              <Button variant="outline" className="rounded-full">
                <span className="text-lg mr-1">⚙</span>
                More Filters
              </Button>
            </div>
          </div>

          {/* Teachers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teachers.map((teacher) => (
              <Card
                key={teacher.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 py-0 gap-0"
              >
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  {teacher.badge && (
                    <div
                      className={`absolute top-3 left-3 z-10 ${teacher.badgeColor} text-white text-xs font-bold px-2 py-1 rounded shadow-sm`}
                    >
                      {teacher.badge}
                    </div>
                  )}
                  <Image
                    src={teacher.image}
                    alt={`Portrait of ${teacher.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <CardHeader className="p-5 pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 dark:text-white">
                        {teacher.name}
                      </h4>
                      <p className="text-primary text-sm font-medium">
                        {teacher.subjects}
                      </p>
                    </div>
                    {teacher.rating > 0 && (
                      <div className="flex items-center bg-yellow-100 dark:bg-yellow-900/30 px-1.5 py-0.5 rounded">
                        <Star className="w-3 h-3 fill-secondary text-secondary" />
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">
                          {teacher.rating}
                        </span>
                      </div>
                    )}
                    {teacher.rating === 0 && (
                      <Badge variant="outline" className="text-xs">
                        New
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="p-5 pt-3">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    <Badge variant="secondary" className="text-xs">
                      {teacher.medium}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {teacher.level}
                    </Badge>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">
                    {teacher.description}
                  </p>
                </CardContent>

                <CardFooter className="p-5 pt-0 border-t border-slate-100 dark:border-slate-700">
                  <Button
                    variant="outline"
                    className="w-full bg-primary/10 hover:bg-primary/20 text-primary border-0"
                  >
                    View Profile
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <nav className="flex items-center gap-2">
              <Button variant="outline" size="icon" disabled>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button className="size-10">1</Button>
              <Button variant="outline" size="icon">
                2
              </Button>
              <Button variant="outline" size="icon">
                3
              </Button>
              <span className="text-slate-400 px-2">...</span>
              <Button variant="outline" size="icon">
                12
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </nav>
          </div>
        </div>

        {/* Become a Teacher CTA */}
        <div className="w-full bg-slate-900 mt-12 overflow-hidden relative">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(#2a82cb 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="max-w-[1280px] mx-auto px-4 lg:px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
            <div className="flex flex-col gap-4 text-center md:text-left max-w-2xl">
              <h2 className="text-white text-3xl md:text-4xl font-bold">
                Are you an expert educator?
              </h2>
              <p className="text-slate-300 text-lg">
                Join Sri Lanka's fastest-growing teaching community. Create your
                profile, set your rates, and start inspiring students today.
              </p>
              <div className="flex flex-wrap gap-4 mt-2 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  <span>Verified Badge</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  <span>Flexible Schedule</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  <span>Secure Payments</span>
                </div>
              </div>
            </div>
            <div>
              <Button
                size="lg"
                className="bg-secondary hover:bg-yellow-600 text-white font-bold py-6 px-8 text-lg shadow-lg"
              >
                Become a Teacher
              </Button>
            </div>
          </div>
        </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}