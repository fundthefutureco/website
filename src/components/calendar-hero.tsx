import Image from "next/image";

export function CalendarHero() {
  return (
    <div className="relative bg-blue-900">
      <div className="container relative mx-auto flex min-h-[80vh] items-center">
        {/* Left circular image */}
        <div className="absolute left-0 h-[400px] w-[400px] overflow-hidden rounded-full">
          <Image
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fgroup-little-students.html%3Fpg%3D8%26view%3Dlatest-uploads&psig=AOvVaw1geZwET4e4R9uQUlo_tO_v&ust=1736830145151000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDI8tLy8YoDFQAAAAAdAAAAABAh"
            alt="People Who Go to School"
            className="h-full w-full object-cover"
            width={400}
            height={400}
          />
        </div>

        {/* Content with margin to wrap around the circle */}
        <div className="ml-[300px] w-full max-w-2xl text-white lg:ml-[400px]">
          <h1 className="mb-6 text-4xl font-bold sm:text-6xl">
            Fund the Future
            <br />
            Calendar
          </h1>
          <p className="mb-8 text-lg sm:text-xl text-blue-100">
            Here are the upcoming meetings for the club. Please make sure to
            attend them.
          </p>
          <p className="mb-12 text-lg sm:text-xl text-blue-100">
            Come and create a better future with us.
          </p>
        </div>
      </div>
    </div>
  );
}
