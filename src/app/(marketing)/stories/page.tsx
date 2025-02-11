import Image from "next/image";
import { ImpactHero } from "@/components/impact-hero";
export default function StoriesPage() {
  const stories = [
    {
      id: 1,
      title: "Chapter Success",
      summary:
        "Our chapter program has been a great success so far. One of our founding chapters, Cherry Creek High School, has grown to over 40 members, and has held multiple successful member meetings, as well as running fundraising and education campaigns with other clubs at their school. One of their board members, Niels Novotny, says …  . He explained that they're currently working to expand the chapters at other schools, as well as expanding their fundraising efforts with larger companies. ",
      image: "/images/stories/education.jpg",
      date: "December 2024",
      category: "Education",
    },
    {
      id: 2,
      title: "Corporation Status and Sucess",
      summary:
        "Our chapter program has been a great success so far. One of our founding chapters, Cherry Creek High School, has grown to over 40 members, and has held multiple successful member meetings, as well as running fundraising and education campaigns with other clubs at their school. One of their board members, Niels Novotny, says …  . He explained that they're currently working to expand the chapters at other schools, as well as expanding their fundraising efforts with larger companies. ",
      image: "/images/stories/education.jpg",
    }
    // Add more stories as needed
  ];

  return (
    <>
      <ImpactHero />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <div
              key={story.id}
              className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-600">
                    {story.category}
                  </span>
                  <span className="text-sm text-gray-500">{story.date}</span>
                </div>
                <h2 className="mb-2 text-xl font-semibold text-gray-900">
                  {story.title}
                </h2>
                <p className="text-gray-600">{story.summary}</p>
                <button className="mt-4 font-medium text-blue-600 hover:text-blue-800">
                  Read more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
