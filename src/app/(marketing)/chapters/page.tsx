import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "@/components/header";
import { ChaptersHero } from "@/components/chapters-hero";

const chapters = [
  {
    name: "Cherry Creek High School",
    description:
      "Learn more about our Cherry Creek chapter and its initiatives.",
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
      <ChaptersHero />
      <div className="container mx-auto px-4 py-12">
        <h1 className="mb-12 text-4xl font-bold text-center">
          Our Fund the Future Chapters
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {chapters.map((chapter, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-8 shadow-lg transition-all hover:shadow-xl"
            >
              <h2 className="mb-4 text-2xl font-bold text-gray-800">
                {chapter.name}
              </h2>
              <p className="mb-6 text-gray-600">{chapter.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Chapters;

