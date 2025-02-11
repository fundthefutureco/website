/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative bg-blue-900">
      <div className="container relative mx-auto flex min-h-[60vh] items-center px-4 py-20 lg:min-h-[80vh]">
        {/* Circular image - centered and smaller on mobile */}
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full opacity-20 lg:h-[800px] lg:w-[800px] lg:opacity-100">
          <Image
            src="/hero-image.jpg"
            alt="HerStart participant"
            className="h-full w-full object-cover"
            width={800}
            height={800}
          />
        </div>

        <div className="relative w-full max-w-2xl pt-20 text-center mx-auto">
          <h1 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-6xl text-white">
            Fund the Future
            <br />
            Our Future
          </h1>
          <p className="mb-8 text-base sm:text-lg lg:text-xl text-blue-100">
            Fund the Future is a nonprofit organization dedicated to helping advance student education and access to extracurricular opportunities through fundraising initiatives and education expansion.
          </p>
          <p className="mb-12 text-base sm:text-lg lg:text-xl text-blue-100">
            Come and create a better future with us.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto rounded-full bg-[#ff6347] text-white hover:bg-orange-700">
                Apply for a Grant
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white/10">
                Donate now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
