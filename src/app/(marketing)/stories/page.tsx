import Image from "next/image";
import { ImpactHero } from "@/components/impact-hero";
export default function StoriesPage() {
  const stories = [
    {
      id: 1,
      title: "Chapter Success",
      summary:
        "Our chapter program has been a great success so far. One of our founding chapters, Cherry Creek High School, has grown to over 40 members, and has held multiple successful member meetings, as well as running fundraising and education campaigns with other clubs at their school. The Creek chapter president, Krit Krishna, gives us great news on their progress. 'The Creek chapter is doing great! We're in the process of contacting multiple small businesses, planning socials and scheduling fundraisers for multiple clubs at Creek.' He hopes that they'll continue to grow and expand their impact. Our chapters have done great work so far, and we'll continue to do more! If you're interested in starting a chapter at your own school, please don't hesitate to reach out to us through our contact page.",
      image: "/images/stories/education.jpg",
    },
    {
      id: 2,
      title: "Corporation Status and Sucess",
      summary:
        "After months of preparation and dedication, our executive board of directors is proud to announce that Fund the Future is officially in good standing as a nonprofit corporation in the state of Colorado! We’re so excited that our work has taken us this far, and we know that there’s so much more to do. We hope to continue making our vision of educational opportunities without financial barriers a reality. Thank you all so much for your support, and let’s keep expanding opportunities together!",
      image: "/images/stories/education.jpg",
    }
    // Add more stories as needed
  ];

  return (
    <>
      <ImpactHero />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
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
