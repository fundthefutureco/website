import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-transparent">
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
          <Link href="/chapters" className="text-white hover:text-blue-200">
            Chapters
          </Link>
          <Link href="/calendar" className="text-white hover:text-blue-200">
            Calendar
          </Link>
          <Link href="/stories" className="text-white hover:text-blue-200">
            Impact Stories
          </Link>
          <Link href="/contact" className="text-white hover:text-blue-200">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="default"
            className="bg-orange-500 text-white hover:bg-orange-600"
          >
            Apply Now
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-900"
          >
            Donate
          </Button>
        </div>
      </div>
    </header>
  );
}
