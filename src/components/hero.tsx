/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-blue-900">
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
            <img
              src="/hero-image.jpg"
              alt="HerStart participant"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="container relative mx-auto flex min-h-screen items-center justify-center">
        <div className="w-full max-w-2xl pt-20 text-center text-white">
          <h1 className="mb-6 text-6xl font-bold">
            Fund the Future
            <br />
            Our Future
          </h1>
          <p className="mb-8 text-xl text-blue-100">
            Fund the Future is a social impact investment fund that supports
            underreprivliaged highschool students with funding and excelling at
            extra-curricular activities.
          </p>
          <p className="mb-12 text-xl text-blue-100">
            Come and create a better future with us.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full bg-[#ff6347] text-white hover:bg-orange-700"
            >
              Apply for a Grant
            </Button>
            <Button size="lg" variant="outline" className="text-black">
              Donate now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
