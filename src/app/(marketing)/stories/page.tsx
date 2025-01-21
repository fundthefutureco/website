import Image from "next/image";

export default function StoriesPage() {
  const stories = [
    {
      id: 1,
      title: "Transforming Education in Rural Communities",
      summary:
        "How our initiative helped bring digital learning to 500+ students",
      image: "/images/stories/education.jpg",
      date: "March 2024",
      category: "Education",
    },
    {
      id: 2,
      title: "Transforming Education in Rural Communities",
      summary:
        "How our initiative helped bring digital learning to 500+ students",
      image: "/images/stories/education.jpg",
      date: "March 2024",
      category: "Education",
    },
    {
      id: 3,
      title: "Transforming Education in Rural Communities",
      summary:
        "How our initiative helped bring digital learning to 500+ students",
      image: "/images/stories/education.jpg",
      date: "March 2024",
      category: "Education",
    },
    // Add more stories as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-center">
      <br></br>
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Impact Stories
          </h1>
          <p className="text-xl text-gray-600">
            Real stories of change and transformation from our community
          </p>
        </div>

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
      </main>
    </div>
  );
}
