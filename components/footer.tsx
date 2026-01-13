import Link from "next/link";
import { School, Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-background-dark border-t border-slate-100 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <School className="w-6 h-6 text-primary" />
              <h2 className="text-lg font-bold">ServeMe</h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Sri Lanka's #1 digital learning platform. Making quality education
              accessible to every child, everywhere.
            </p>
          </div>

          {/* Learn */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold mb-1">Learn</h3>
            <Link
              href="/courses?level=ol"
              className="text-slate-500 hover:text-primary text-sm"
            >
              O-Level Courses
            </Link>
            <Link
              href="/courses?level=al"
              className="text-slate-500 hover:text-primary text-sm"
            >
              A-Level Courses
            </Link>
            <Link
              href="/past-papers"
              className="text-slate-500 hover:text-primary text-sm"
            >
              Past Papers
            </Link>
            <Link
              href="/seminars"
              className="text-slate-500 hover:text-primary text-sm"
            >
              Revision Seminars
            </Link>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold mb-1">Company</h3>
            <Link
              href="/about"
              className="text-slate-500 hover:text-primary text-sm"
            >
              About Us
            </Link>
            <Link
              href="/teachers"
              className="text-slate-500 hover:text-primary text-sm"
            >
              Our Teachers
            </Link>
            <Link
              href="/careers"
              className="text-slate-500 hover:text-primary text-sm"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="text-slate-500 hover:text-primary text-sm"
            >
              Contact
            </Link>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold mb-1">Connect</h3>
            <div className="flex gap-4">
              <Link
                href="#"
                className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook className="size-4" />
              </Link>
              <Link
                href="#"
                className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Twitter className="size-4" />
              </Link>
              <Link
                href="#"
                className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            © 2024 EduLanka. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-slate-400 hover:text-slate-600"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-slate-400 hover:text-slate-600"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}