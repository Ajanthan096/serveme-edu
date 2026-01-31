import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Star,
  GraduationCap,
  Globe,
  CheckCircle,
  Calculator,
  FunctionSquare,
  Calendar,
  Mail,
  CreditCard,
  Landmark,
  Wallet,
} from "lucide-react";

const tutor = {
  name: "Mr. Kasun Perera",
  title: "Expert Mathematics & Combined Maths Instructor",
  image:
    "/images/teachers/perera.png",
  rating: 4.9,
  reviews: 124,
  degree: "B.Sc. Engineering (Hons)",
  languages: "Sinhala, English",
  tags: ["10+ Years Exp.", "Colombo District", "A-Level Specialist"],
  hourlyRate: 2500,
  lessonDuration: "60 minutes",
  groupClasses: "Available",
  homeVisits: "Within Colombo",
  availability: [
    { days: "Mon - Wed", time: "4:00 PM - 8:00 PM" },
    { days: "Thu - Fri", time: "5:00 PM - 9:00 PM" },
    { days: "Saturday", time: "8:00 AM - 6:00 PM" },
    { days: "Sunday", time: "Off Day", isOff: true },
  ],
};

const subjects = [
  {
    icon: FunctionSquare,
    name: "Combined Maths",
    description: "Advanced Level • Sinhala & English Medium",
  },
  {
    icon: Calculator,
    name: "Mathematics",
    description: "Grade 10 - 11 (O-Level) • Local Syllabus",
  },
];

const experience = [
  {
    title: "Senior Mathematics Tutor",
    place: "Leading Private Institute, Colombo • 2018 - Present",
    description:
      "Specializing in Combined Maths for A-Level students with a 95% pass rate and multiple island rankings.",
  },
  {
    title: "Assistant Lecturer (Contract)",
    place: "Local University • 2015 - 2018",
    description:
      "Delivered lectures in Engineering Mathematics and Numerical Methods.",
  },
  {
    title: "Mathematics Teacher",
    place: "Public School • 2012 - 2015",
    description:
      "Teaching O-Level Mathematics and coordinating school Math society activities.",
  },
];

const reviews = [
  {
    initials: "AS",
    name: "Amara Siriwardena",
    role: "A-Level Student • 2 months ago",
    rating: 5,
    text: '"Mr. Kasun is amazing. I used to struggle so much with Dynamics, but his way of explaining it with real-world examples made it so easy. Highly recommend for any A-Level student!"',
  },
  {
    initials: "KP",
    name: "Kamal Perera",
    role: "Parent • 5 months ago",
    rating: 4,
    text: '"Very patient and punctual. My son\'s term marks improved from a C to an A in just one term. The past paper sessions are especially helpful."',
  },
];

export default function TutorProfilePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 lg:px-10 py-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/tutors" className="hover:text-primary">
              Tutors
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{tutor.name}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              {/* Profile Header */}
              <div className="bg-card border rounded-2xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start">
                <div className="relative w-full md:w-64 h-64 flex-shrink-0 rounded-xl overflow-hidden">
                  <Image
                    src={tutor.image}
                    alt={`Portrait of ${tutor.name}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                    TOP RATED
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h1 className="text-3xl font-black leading-tight">
                      {tutor.name}
                    </h1>
                    <div className="flex items-center gap-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold px-2 py-1 rounded-full">
                      <CheckCircle className="w-3.5 h-3.5 fill-current" />
                      Verified
                    </div>
                  </div>
                  <p className="text-primary text-lg font-semibold mb-4">
                    {tutor.title}
                  </p>
                  <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex items-center gap-1.5">
                      <Star className="w-5 h-5 text-secondary fill-secondary" />
                      <span className="font-bold text-lg">{tutor.rating}</span>
                      <span className="text-muted-foreground text-sm">
                        ({tutor.reviews} reviews)
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <GraduationCap className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm">{tutor.degree}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Globe className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm">{tutor.languages}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tutor.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-muted text-muted-foreground text-xs font-medium px-3 py-1.5 rounded-full border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* About */}
              <div className="bg-card border rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-bold mb-4">About Me</h3>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Hello! I am Kasun Perera, a dedicated Mathematics educator
                    with a passion for simplifying complex concepts for Advanced
                    Level students. With over a decade of experience in the Sri
                    Lankan education system, I have helped thousands of students
                    achieve their dreams of entering Engineering and Science
                    faculties in national universities.
                  </p>
                  <p>
                    My teaching philosophy focuses on building a strong
                    foundation in fundamentals rather than rote memorization. I
                    specialize in Combined Mathematics, specifically focusing on
                    Calculus, Statics, and Dynamics, which many students find
                    challenging.
                  </p>
                </div>
              </div>

              {/* Subjects */}
              <div className="bg-card border rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-bold mb-6">Subjects Offered</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {subjects.map((subject) => (
                    <div
                      key={subject.name}
                      className="p-4 border rounded-xl bg-muted/50"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary">
                          <subject.icon className="w-5 h-5" />
                        </div>
                        <span className="font-bold">{subject.name}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {subject.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="bg-card border rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-bold mb-6">Teaching Experience</h3>
                <div className="flex flex-col gap-6">
                  {experience.map((exp, index) => (
                    <div key={exp.title} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-primary mt-1.5" />
                        {index < experience.length - 1 && (
                          <div className="w-px flex-1 bg-border my-1" />
                        )}
                      </div>
                      <div className="flex-1 pb-2">
                        <h4 className="font-bold">{exp.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {exp.place}
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div className="bg-card border rounded-2xl p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">Student Reviews</h3>
                  <Button variant="link" className="text-primary p-0 h-auto">
                    Write a Review
                  </Button>
                </div>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div
                      key={review.name}
                      className="border-b last:border-b-0 pb-6 last:pb-0"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="size-10 rounded-full bg-muted flex items-center justify-center font-bold text-muted-foreground">
                            {review.initials}
                          </div>
                          <div>
                            <h5 className="font-bold text-sm">{review.name}</h5>
                            <p className="text-xs text-muted-foreground">
                              {review.role}
                            </p>
                          </div>
                        </div>
                        <div className="flex text-secondary">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? "fill-secondary"
                                  : "fill-none"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {review.text}
                      </p>
                    </div>
                  ))}
                  <Button variant="ghost" className="w-full">
                    View All Reviews
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 flex flex-col gap-6">
                {/* Booking Card */}
                <div className="bg-card border rounded-2xl p-6 shadow-xl shadow-slate-200/50 dark:shadow-none">
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black">
                        LKR {tutor.hourlyRate.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        / hour
                      </span>
                    </div>
                    <p className="text-green-600 text-sm font-medium mt-1">
                      Available for new students
                    </p>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between text-sm py-2 border-b">
                      <span className="text-muted-foreground">
                        Lesson Duration
                      </span>
                      <span className="font-medium">{tutor.lessonDuration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm py-2 border-b">
                      <span className="text-muted-foreground">
                        Group Classes
                      </span>
                      <span className="font-medium">{tutor.groupClasses}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm py-2">
                      <span className="text-muted-foreground">Home Visits</span>
                      <span className="font-medium">{tutor.homeVisits}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button
                      size="lg"
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold"
                    >
                      Book a Trial Lesson
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full font-bold"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                  <div className="mt-6 flex flex-col gap-3">
                    <p className="text-[11px] text-center text-muted-foreground">
                      Secure payment through EdLanka Guarantee
                    </p>
                    <div className="flex items-center justify-center gap-4 text-muted-foreground/50">
                      <Wallet className="w-6 h-6" />
                      <CreditCard className="w-6 h-6" />
                      <Landmark className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="bg-card border rounded-2xl p-6">
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Weekly Availability
                  </h4>
                  <div className="space-y-2">
                    {tutor.availability.map((slot) => (
                      <div
                        key={slot.days}
                        className="flex justify-between text-xs py-1"
                      >
                        <span className="text-muted-foreground">
                          {slot.days}
                        </span>
                        <span
                          className={
                            slot.isOff
                              ? "text-red-500 font-medium"
                              : "font-medium"
                          }
                        >
                          {slot.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}