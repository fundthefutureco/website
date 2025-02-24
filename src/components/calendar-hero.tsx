import Image from "next/image";

export function CalendarHero() {
  return (
    <div className="relative min-h-screen w-full bg-primary">
      <div className="container relative mx-auto flex min-h-screen items-center">

        {/* Content - centered on mobile, offset on desktop */}
        <div className="ml-[300px] w-full max-w-2xl text-white lg:ml-[400px]">
          <h1 className="mb-6 text-4xl font-bold sm:text-6xl">
            Fund the Future
            <br />
            Calendar
          </h1>
          <p className="mb-12 text-lg sm:text-xl text-white/90">
            Come and create a better future with us.
          </p>
        </div>
      </div>
    </div>
  );
}
