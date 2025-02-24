import Image from "next/image";

export function ChaptersHero() {
  return (
    <div className="relative bg-primary">
      <div className="container relative mx-auto flex min-h-[60vh] items-center px-4 py-20 lg:min-h-[80vh]">
        {/* Left circular image - hidden on mobile */}
        <div className="absolute left-0 hidden overflow-hidden rounded-full lg:block lg:h-[400px] lg:w-[400px]">
          <Image
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fgroup-little-students.html%3Fpg%3D8%26view%3Dlatest-uploads&psig=AOvVaw1geZwET4e4R9uQUlo_tO_v&ust=1736830145151000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDI8tLy8YoDFQAAAAAdAAAAABAh"
            alt="People Who Go to School"
            className="h-full w-full object-cover"
            width={400}
            height={400}
          />
        </div>

        <div className="w-full max-w-2xl text-white lg:ml-[400px]">
          <h1 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-6xl">
            Fund the Future
            <br />
            Our Chapters
          </h1>
          <p className="mb-8 text-base sm:text-lg lg:text-xl text-white/90">
            Fund the Future is a social impact investment fund that supports
            underreprivileged high school students with funding and excelling at
            extra-curricular activities.
          </p>
          <p className="mb-12 text-base sm:text-lg lg:text-xl text-white/90">
            Come and create a better future with us.
          </p>
        </div>
      </div>
    </div>
  );
}
