import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  Eye,
  Users,
  Lightbulb,
  ShieldCheck,
  Star,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Inclusivity",
    description:
      "Education for everyone, everywhere, spanning all backgrounds.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Continuously evolving our tools and methods for better learning.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Commitment to the highest standards of ethics and quality.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "Striving for the best outcomes for our students and partners.",
  },
];

const milestones = [
  {
    year: "2021",
    description: "The Idea & Launch in Colombo with 10 pilot courses.",
    position: "left",
  },
  {
    year: "2022",
    description:
      "Expanded to Kandy and Jaffna, reaching 10,000 active learners.",
    position: "right",
  },
  {
    year: "2023",
    description: "Partnered with 50+ local schools to digitize curricula.",
    position: "left",
  },
  {
    year: "2024",
    description: "Over 50,000 students empowered nationwide.",
    position: "right",
  },
];

const team = [
  {
    name: "Dilhan Perera",
    role: "Founder & CEO",
    image:
      "/images/about/team/team1.png",
  },
  {
    name: "Amara Silva",
    role: "Head of Academics",
    image:
    "/images/about/team/team2.png",
  },
  {
    name: "Kasun Jaywardene",
    role: "CTO",
    image:
    "/images/about/team/team3.png",},
  {
    name: "Nimmi Fernando",
    role: "Head of Community",
    image:
    "/images/about/team/team4.png",},
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-6 md:px-20 lg:px-40 py-10">
          <div
            className="relative overflow-hidden rounded-xl min-h-[520px] flex flex-col items-center justify-center p-8 text-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBd0xj60XVrsqe0kPwQwJI1VZQGdwudhqbe0vpEWsEBuUQ70vW2lsBS-H7SXIX6SuqpueC8caE2Z9JnsLSqDDHbpNFbxMMOHjCwAwronQdiphJyf39rjLq4bnINid3W9A2BEw3aSCHxR-fvOj5zAEWR2cA_6MseIzLBwoM3maY3iBxVPHaJBweM6bJm98dY99h_9rIvpmKSEJSsUEEeH9QWtHIs0T_w5HiDxzY3hLViHIL1LY7twk-ngS3Ub0zakWSRe-N30jfLlTpW")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="max-w-3xl space-y-6">
              <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-tight">
                Revolutionizing Learning in Sri Lanka
              </h1>
              <p className="text-white/90 text-lg md:text-xl font-light">
                Empowering the next generation of local students through digital
                transformation and accessible, high-quality education for every
                province.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button size="lg" className="text-lg px-8">
                  Explore Our Story
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 bg-white/20 backdrop-blur-md text-white border-white/30 hover:bg-white/30 hover:text-white"
                >
                  View Our Impact
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="px-6 md:px-20 lg:px-40 py-12">
          <div className="text-center mb-12">
            <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4">
              Our Purpose
            </h2>
            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                <Rocket className="w-7 h-7" />
              </div>
              <h3 className="text-primary text-2xl font-bold mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To bridge the gap between traditional classrooms and digital
                accessibility across every province in Sri Lanka, making
                world-class learning accessible to every child, regardless of
                their location.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-primary text-2xl font-bold mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be the leading catalyst for educational excellence and
                innovation in the island nation, fostering a future-ready
                generation of innovators and leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-muted px-6 md:px-20 lg:px-40 py-20">
          <div className="text-center mb-16">
            <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground">
              The principles that guide our journey toward excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card p-6 rounded-xl text-center space-y-4"
              >
                <value.icon className="w-10 h-10 text-secondary mx-auto" />
                <h4 className="font-bold text-xl text-primary">{value.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="px-6 md:px-20 lg:px-40 py-20">
          <div className="text-center mb-16">
            <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground">
              Key milestones that defined our growth.
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-secondary/30" />

            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="flex flex-col md:flex-row items-center gap-8"
                >
                  {milestone.position === "left" ? (
                    <>
                      <div className="flex-1 md:text-right">
                        <h4 className="text-2xl font-bold text-primary">
                          {milestone.year}
                        </h4>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </div>
                      <div className="z-10 w-6 h-6 rounded-full bg-secondary border-4 border-background shadow-lg" />
                      <div className="flex-1" />
                    </>
                  ) : (
                    <>
                      <div className="flex-1" />
                      <div className="z-10 w-6 h-6 rounded-full bg-secondary border-4 border-background shadow-lg" />
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-primary">
                          {milestone.year}
                        </h4>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="bg-card px-6 md:px-20 lg:px-40 py-20">
          <div className="text-center mb-16">
            <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4">
              Meet the Team
            </h2>
            <p className="text-muted-foreground">
              The passionate minds behind the platform.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-square">
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-primary text-xl font-bold">{member.name}</h4>
                <p className="text-secondary font-medium text-sm">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-6 md:px-20 lg:px-40 py-20">
          <div className="bg-primary rounded-2xl p-12 text-center text-primary-foreground relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -ml-32 -mb-32" />
            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <h2 className="text-4xl font-black">
                Be a part of our journey.
              </h2>
              <p className="text-xl text-primary-foreground/80">
                Start learning today and join thousands of students shaping the
                future of Sri Lanka.
              </p>
              <div className="pt-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-10 py-6 font-bold shadow-xl"
                >
                  Join the Platform Now
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}