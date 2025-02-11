import { Button } from "@/components/ui/button";
import Link from "next/link";
export function JoinUs() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight text-blue-700 md:text-5xl">
            Our Mission: Give Every Student the Opportunity to Thrive
          </h1>
          <div className="space-y-4">
            <p className="text-blue-700">
              At Fund the Future, we believe that every high school student
              deserves the opportunity to explore their passions and develop
              their skills beyond the classroom.
            </p>
            <p className="font-semibold text-blue-700">
              Our mission is to bridge the gap between students and real-world experiences by providing financial support for extracurricular activities that enrich students’ educational journeys. Through our grants, we aim to expand opportunity for everyone, fostering creativity and personal growth in our youth. Through our educational mission, we also seek to expand fundraising as a viable financial solution for this financial barrier through education, building high school chapters across the state.
            </p>
          <Link href="/contact">
            <Button className="mt-4 rounded-full bg-[#ff6347] px-8 py-3 text-white hover:bg-[#ff6347]/90">
              See How We Work
            </Button>
          </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute right-[-20px] top-[-20px] h-48 w-48 rounded-full bg-[#ff6347]" />
          <div className="relative aspect-square overflow-hidden rounded-full">
            <img
              src="/placeholder.svg"
              alt="Woman presenting in a classroom"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
