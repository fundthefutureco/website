import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "@/components/header";
import { ChaptersHero } from "@/components/chapters-hero";


const chapters = [
  {
    name: "Cherry Creek High School",
    description: "Learn more about our Cherry Creek chapter and its initiatives.",
  },
  {
    name: "Cherokee Trail High School",
    description: "Discover the Cherokee Trail Fund the Future community.",
  },
  {
    name: "Grandview High School",
    description: "Explore Grandview's Fund the Future program and impact.",
  },
  {
    name: "East High School",
    description: "Find out about East High School's Fund the Future projects.",
  },
];

const Chapters: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chapters - Fund the Future</title>
        <meta name="description" content="Fund the Future chapters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <Header white />
        <ChaptersHero />
        <div className="container mx-auto px-4 py-8 flex flex-col">
          <h1 className="mb-8 text-4xl font-bold">Our Fund the Future Chapters</h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {chapters.map((chapter, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 shadow-md transition-transform hover:-translate-y-2"
              >
                <h2 className="mb-4 text-xl font-semibold text-gray-800">
                  {chapter.name}
                </h2>
                <p className="text-gray-600">{chapter.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Chapters;