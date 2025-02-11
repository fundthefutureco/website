import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header({ white }: { white?: boolean }) {
  // Add state for mobile menu with default false
  const [mounted, setMounted] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Only run on client-side
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render menu until client-side
  if (!mounted) {
    return (
      <header className="fixed left-0 right-0 top-0 z-50 bg-transparent text-black">
        <div className="container mx-auto flex h-20 items-center justify-between">
          <div className="flex items-center gap-4">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/chapters"
              className={`${white ? "text-white" : "text-black"}`}
            >
              Chapters
            </Link>
            <Link
              href="/calendar"
              className={`${white ? "text-white" : "text-black"}`}
            >
              Calendar
            </Link>
            <Link
              href="/stories"
              className={`${white ? "text-white" : "text-black"}`}
            >
              Impact Stories
            </Link>
            <Link
              href="/contact"
              className={`${white ? "text-white" : "text-black"}`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/apply">
              <Button
                variant="default"
                className="bg-orange-500 text-white hover:bg-orange-600"
              >
                Apply Now
              </Button>
            </Link>
            <Link href="/donate">
              <Button
                variant="outline"
                className="border-white text-black"
              >
                Donate
              </Button>
            </Link>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-transparent text-black">
      <div className="container mx-auto flex h-20 items-center justify-between">
        <div className="flex items-center gap-4">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/chapters"
            className={`${white ? "text-white" : "text-black"}`}
          >
            Chapters
          </Link>
          <Link
            href="/calendar"
            className={`${white ? "text-white" : "text-black"}`}
          >
            Calendar
          </Link>
          <Link
            href="/stories"
            className={`${white ? "text-white" : "text-black"}`}
          >
            Impact Stories
          </Link>
          <Link
            href="/contact"
            className={`${white ? "text-white" : "text-black"}`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/apply">
            <Button
              variant="default"
              className="bg-orange-500 text-white hover:bg-orange-600"
            >
              Apply Now
            </Button>
          </Link>
          <Link href="/donate">
            <Button
              variant="outline"
              className="border-white text-black"
            >
              Donate
            </Button>
          </Link>
        </div>

        {/* Add hamburger menu button for mobile */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className={`h-6 w-6 ${white ? "text-white" : "text-black"}`}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white md:hidden">
            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-end">
                <button
                  className="text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col items-center gap-8 pt-8">
                <Link
                  href="/chapters"
                  className="text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Chapters
                </Link>
                <Link
                  href="/calendar"
                  className="text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Calendar
                </Link>
                <Link
                  href="/stories"
                  className="text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Impact Stories
                </Link>
                <Link
                  href="/contact"
                  className="text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link href="/apply" onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant="default"
                    className="bg-orange-500 text-white hover:bg-orange-600"
                  >
                    Apply Now
                  </Button>
                </Link>
                <Link href="/donate" onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="border-black text-black"
                  >
                    Donate
                  </Button>
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
