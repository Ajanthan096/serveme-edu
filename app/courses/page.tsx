"use client";

import { useState, useMemo } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CourseCard } from "@/components/course-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Search, ChevronRight, FilterIcon } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "Combined Mathematics - Pure Maths Theory",
    instructor: "Mr. Kamal Perera",
    level: "A/L",
    medium: "Sinhala",
    stream: "science",
    price: 3500,
    rating: 4.9,
    reviews: 1200,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    badge: "LIVE CLASS",
    badgeColor: "bg-white/90 text-black",
  },
  {
    id: 2,
    title: "Advanced Chemistry: Organic Conversions",
    instructor: "Dr. Nimali Silva",
    level: "A/L",
    medium: "English",
    stream: "science",
    price: 12000,
    rating: 4.8,
    reviews: 850,
    image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13",
    badge: "BEST SELLER",
    badgeColor: "bg-secondary",
  },
  {
    id: 3,
    title: "ICT for O/L: Complete Revision",
    instructor: "Eng. Ruwan Dissanayake",
    level: "O/L",
    medium: "Sinhala",
    stream: "technology",
    price: 1500,
    rating: 4.7,
    reviews: 420,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    badge: "RECORDED",
    badgeColor: "bg-green-600/90",
  },
  {
    id: 4,
    title: "Sri Lankan History - Grade 11",
    instructor: "Mrs. Kanthi Gunawardena",
    level: "O/L",
    medium: "Sinhala",
    stream: "arts",
    price: 2000,
    rating: 4.5,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    badge: "NEW",
    badgeColor: "bg-purple-600/90",
  },
  {
    id: 5,
    title: "Business Studies: Strategic Management",
    instructor: "Mr. Asela Perera",
    level: "A/L",
    medium: "English",
    stream: "commerce",
    price: 3200,
    rating: 5.0,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  },
  {
    id: 6,
    title: "Biology: Genetics & Evolution",
    instructor: "Dr. Samanmalee",
    level: "A/L",
    medium: "Sinhala",
    stream: "science",
    price: 8000,
    rating: 4.9,
    reviews: 340,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
    badge: "LIVE CLASS",
    badgeColor: "bg-white/90 text-black",
  },
];

type SortOption = "popular" | "newest" | "price-low" | "price-high";

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("popular");
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedMedium, setSelectedMedium] = useState<string | null>(null);
  const [selectedStreams, setSelectedStreams] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  const toggleLevel = (level: string) => {
    setSelectedLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  const toggleStream = (stream: string) => {
    setSelectedStreams((prev) =>
      prev.includes(stream)
        ? prev.filter((s) => s !== stream)
        : [...prev, stream]
    );
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedLevels([]);
    setSelectedMedium(null);
    setSelectedStreams([]);
    setPriceRange({ min: "", max: "" });
    setSortBy("popular");
  };

  const filteredCourses = useMemo(() => {
    let result = [...courses];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (course) =>
          course.title.toLowerCase().includes(query) ||
          course.instructor.toLowerCase().includes(query)
      );
    }

    // Level filter
    if (selectedLevels.length > 0) {
      result = result.filter((course) => selectedLevels.includes(course.level));
    }

    // Medium filter
    if (selectedMedium) {
      result = result.filter((course) => course.medium === selectedMedium);
    }

    // Stream filter
    if (selectedStreams.length > 0) {
      result = result.filter((course) =>
        selectedStreams.includes(course.stream)
      );
    }

    // Price filter
    if (priceRange.min) {
      result = result.filter(
        (course) => course.price >= parseInt(priceRange.min)
      );
    }
    if (priceRange.max) {
      result = result.filter(
        (course) => course.price <= parseInt(priceRange.max)
      );
    }

    // Sorting
    switch (sortBy) {
      case "popular":
        result.sort((a, b) => b.reviews - a.reviews);
        break;
      case "newest":
        result.sort((a, b) => b.id - a.id);
        break;
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
    }

    return result;
  }, [
    searchQuery,
    selectedLevels,
    selectedMedium,
    selectedStreams,
    priceRange,
    sortBy,
  ]);

  const activeFilterCount =
    selectedLevels.length +
    (selectedMedium ? 1 : 0) +
    selectedStreams.length +
    (priceRange.min ? 1 : 0) +
    (priceRange.max ? 1 : 0);

  // Reusable filter content for both desktop and mobile
  const FilterContent = () => (
    <div className="space-y-6">
      {/* Exam Type */}
      <div className="space-y-3">
        <h4 className="text-sm font-bold uppercase tracking-wide">Exam Type</h4>
        <div className="space-y-2">
          {[
            { id: "O/L", label: "G.C.E O/L" },
            { id: "A/L", label: "G.C.E A/L" },
            { id: "Grade 5", label: "Grade 5 Scholarship" },
          ].map((level) => (
            <div key={level.id} className="flex items-center space-x-2">
              <Checkbox
                id={level.id}
                checked={selectedLevels.includes(level.id)}
                onCheckedChange={() => toggleLevel(level.id)}
              />
              <Label htmlFor={level.id} className="text-sm cursor-pointer">
                {level.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Medium */}
      <div className="space-y-3">
        <h4 className="text-sm font-bold uppercase tracking-wide">Medium</h4>
        <div className="flex flex-wrap gap-2">
          {["Sinhala", "English", "Tamil"].map((medium) => (
            <Button
              key={medium}
              variant="outline"
              size="sm"
              onClick={() =>
                setSelectedMedium(selectedMedium === medium ? null : medium)
              }
              className={
                selectedMedium === medium
                  ? "border-primary bg-primary/10 text-primary"
                  : ""
              }
            >
              {medium}
            </Button>
          ))}
        </div>
      </div>

      {/* Subject Stream */}
      <div className="space-y-3">
        <h4 className="text-sm font-bold uppercase tracking-wide">
          Subject Stream
        </h4>
        <div className="space-y-2">
          {[
            { id: "science", label: "Science (Bio/Maths)" },
            { id: "commerce", label: "Commerce" },
            { id: "arts", label: "Arts" },
            { id: "technology", label: "Technology" },
          ].map((stream) => (
            <div key={stream.id} className="flex items-center space-x-2">
              <Checkbox
                id={stream.id}
                checked={selectedStreams.includes(stream.id)}
                onCheckedChange={() => toggleStream(stream.id)}
              />
              <Label htmlFor={stream.id} className="text-sm cursor-pointer">
                {stream.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="space-y-3">
        <h4 className="text-sm font-bold uppercase tracking-wide">Price</h4>
        <div className="flex gap-2">
          <Input
            placeholder="Min"
            type="number"
            value={priceRange.min}
            onChange={(e) =>
              setPriceRange((prev) => ({ ...prev, min: e.target.value }))
            }
          />
          <Input
            placeholder="Max"
            type="number"
            value={priceRange.max}
            onChange={(e) =>
              setPriceRange((prev) => ({ ...prev, max: e.target.value }))
            }
          />
        </div>
      </div>
    </div>
  );

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
            <span className="font-medium">Course Catalog</span>
          </div>

          {/* Hero Banner */}
          <div className="min-h-[80] flex flex-col gap-6 rounded-xl bg-linear-to-br from-slate-900 to-slate-800 p-8 items-start justify-end shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173')] bg-cover bg-center opacity-20" />
            <div className="relative z-10 flex flex-col gap-2 max-w-2xl">
              <span className="w-fit rounded-full bg-secondary/90 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">
                New Syllabus 2024
              </span>
              <h1 className="text-white text-3xl md:text-5xl font-black">
                Ace Your G.C.E A/L & O/L Exams
              </h1>
              <p className="text-gray-200 text-sm md:text-lg">
                Join thousands of Sri Lankan students learning from the island's
                top instructors.
              </p>
            </div>
            <Button size="lg" className="relative z-10">
              Explore Featured Courses
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block lg:col-span-3 space-y-6">
              <div className="flex items-center justify-between pb-2 border-b">
                <h3 className="text-xl font-bold">Filters</h3>
                <Button
                  variant="link"
                  className="h-auto p-0 text-sm"
                  onClick={resetFilters}
                >
                  Reset
                </Button>
              </div>
              <FilterContent />
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-9 space-y-6">
              {/* Search and Filters */}
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    placeholder="Search for Combined Maths, History, or Instructor..."
                    className="pl-10 h-12"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-base font-medium">
                    Showing {filteredCourses.length} results
                    {searchQuery && (
                      <>
                        {" "}
                        for <span className="font-bold">"{searchQuery}"</span>
                      </>
                    )}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      Sort by:
                    </span>
                    <Select
                      value={sortBy}
                      onValueChange={(value: SortOption) => setSortBy(value)}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="popular">Most Popular</SelectItem>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="price-low">
                          Price: Low to High
                        </SelectItem>
                        <SelectItem value="price-high">
                          Price: High to Low
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    {/* Mobile Filter Sheet */}
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="lg:hidden relative"
                        >
                          <FilterIcon className="w-4 h-4" />
                          {activeFilterCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                              {activeFilterCount}
                            </span>
                          )}
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="left" className="w-[300px]">
                        <SheetHeader>
                          <SheetTitle className="flex items-center justify-between">
                            Filters
                            <Button
                              variant="link"
                              className="h-auto p-0 text-sm"
                              onClick={resetFilters}
                            >
                              Reset
                            </Button>
                          </SheetTitle>
                        </SheetHeader>
                        <div className="mt-6">
                          <FilterContent />
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>
                </div>
              </div>

              {/* Course Grid */}
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    No courses found matching your criteria.
                  </p>
                  <Button variant="link" onClick={resetFilters} className="mt-2">
                    Clear all filters
                  </Button>
                </div>
              )}

              {/* Pagination - only show if results exist */}
              {filteredCourses.length > 0 && (
                <div className="flex items-center justify-center gap-2 pt-6">
                  <Button variant="outline" size="icon">
                    <ChevronRight className="w-4 h-4 rotate-180" />
                  </Button>
                  <Button className="size-10">1</Button>
                  <Button variant="outline" size="icon">
                    2
                  </Button>
                  <Button variant="outline" size="icon">
                    3
                  </Button>
                  <span className="text-muted-foreground px-2">...</span>
                  <Button variant="outline" size="icon">
                    8
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}