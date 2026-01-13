import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Languages,
  WifiOff,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  Star,
  RocketIcon,
} from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="w-full">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-5 lg:py-10">
          <div className="relative min-h-[480px] lg:min-h-[560px] flex flex-col gap-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg items-start justify-end px-4 pb-10 sm:px-10 shadow-xl overflow-hidden">
            <Image
              src="/images/home/hero.jpg"
              alt="Students studying"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="relative z-10 flex flex-col gap-2 text-left max-w-2xl">
              <span className="text-secondary font-bold tracking-wider text-sm uppercase mb-2">
                Future-Ready Sri Lanka
              </span>
              <h1 className="text-white text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Empowering Sri Lanka's Next Generation
              </h1>
              <h2 className="text-slate-100 text-sm sm:text-base lg:text-lg max-w-xl mt-2">
                Master your O-Level and A-Level syllabus from anywhere in the
                island. Available in Sinhala, Tamil, and English.
              </h2>
            </div>
            <div className="relative z-10 flex flex-wrap gap-3 mt-4">
              <Button size="lg" className="hover:scale-105 transition-transform">
                Start Learning Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-md border-white/30 hover:bg-white/20 text-white"
              >
                Browse Courses
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="w-full border-b bg-white dark:bg-slate-900 py-8">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-medium text-slate-500 whitespace-nowrap">
            Trusted by leading institutions
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-8 opacity-60">
            <div className="h-8 flex items-center gap-2">
              <span className="font-bold text-lg">UOC</span>
            </div>
            <div className="h-8 flex items-center gap-2">
              <span className="font-bold text-lg">MOE</span>
            </div>
            <div className="h-8 flex items-center gap-2">
              <span className="font-bold text-lg">OUSL</span>
            </div>
            <div className="h-8 flex items-center gap-2">
              <span className="font-bold text-lg">NIE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-background-light dark:bg-background-dark py-12 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold">
                Tailored for the Local Syllabus
              </h2>
              <p className="text-muted-foreground text-base max-w-[720px]">
                We provide resources specifically designed for the Sri Lankan
                National Curriculum, ensuring you are exam-ready with materials
                that matter.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="text-primary bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Languages className="w-7 h-7" />
                  </div>
                  <CardTitle>Trilingual Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Learn in your preferred language. We offer full course
                    modules in Sinhala, Tamil, and English mediums tailored to
                    national standards.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="text-primary bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <WifiOff className="w-7 h-7" />
                  </div>
                  <CardTitle>Island-Wide Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Optimized for low bandwidth to ensure accessibility from
                    Jaffna to Matara. Download lessons to watch offline anytime.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="text-primary bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="w-7 h-7" />
                  </div>
                  <CardTitle>Exam Focused</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Comprehensive past paper archives (2010-2023) and model
                    papers for O/Ls and A/Ls with marking schemes.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full bg-white dark:bg-slate-900 py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl" />
              <div className="relative rounded-2xl shadow-xl overflow-hidden h-[400px]">
                <Image
                  src="/images/home/mission_img.jpg"
                  alt="Teacher helping student"
                  fill
                  className="object-cover opacity-90"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 w-fit">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-secondary text-xs font-bold uppercase tracking-wide">
                  Our Mission
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Democratizing Education Across the Nation
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Education is a right, not a privilege. EduLanka bridges the gap
                between rural and urban education by connecting students with
                the island's best educators.
              </p>
              <ul className="flex flex-col gap-3 mt-2">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span>Free access to core subject materials</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span>Direct Q&A with top lecturers</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span>Scholarships for high-performing students</span>
                </li>
              </ul>
              <Button
                variant="link"
                className="w-fit gap-2 p-0 text-primary font-bold"
              >
                Read Our Story <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-primary/5 dark:bg-slate-800/50 py-20 border-t border-b border-primary/10">
        <div className="max-w-[800px] mx-auto px-4 text-center flex flex-col items-center gap-6">
          <RocketIcon className="w-16 h-16 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Ace Your Exams?
          </h2>
          <p className="text-muted-foreground text-lg">
            Join over 50,000 students transforming their future with EduLanka.
            Sign up today and get your first course for free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
            <Button size="lg" className="shadow-lg shadow-primary/30">
              Join for Free
            </Button>
            <Button size="lg" variant="outline">
              For Parents
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}