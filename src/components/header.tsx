import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header({ white }: { white?: boolean }) {
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
