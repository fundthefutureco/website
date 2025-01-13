import Head from 'next/head'
import {Header} from '@/components/header'

export default function StoriesPage() {
  const stories = [
    {
      id: 1,
      title: "Transforming Education in Rural Communities",
      summary: "How our initiative helped bring digital learning to 500+ students",
      image: "/images/stories/education.jpg",
      date: "March 2024",
      category: "Education"
    },
    {
      id: 2,
      title: "Transforming Education in Rural Communities",
      summary: "How our initiative helped bring digital learning to 500+ students",
      image: "/images/stories/education.jpg",
      date: "March 2024",
      category: "Education"
    },
    {
        id: 3,
        title: "Transforming Education in Rural Communities",
        summary: "How our initiative helped bring digital learning to 500+ students",
        image: "/images/stories/education.jpg",
        date: "March 2024",
        category: "Education"
    }
    // Add more stories as needed
  ]

  return (
    <>
      <Head>
        <title>Impact Stories - Fund the Future</title>
        <meta name="description" content="Real stories of impact and change from our community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50 text-center">
        <Header />
        <br></br>
        <main className="container mx-auto px-4 py-8">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Impact Stories
            </h1>
            <p className="text-xl text-gray-600">
              Real stories of change and transformation from our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <div 
                key={story.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-600 font-medium">
                      {story.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {story.date}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {story.title}
                  </h2>
                  <p className="text-gray-600">
                    {story.summary}
                  </p>
                  <button className="mt-4 text-blue-600 font-medium hover:text-blue-800">
                    Read more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  )
}
