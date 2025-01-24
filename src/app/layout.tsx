import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { TRPCReactProvider } from "@/trpc/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fund the Future",
  description:
    "Fund the Future is a social impact investment fund that supports underreprivliaged highschool students with funding and excelling at extra-curricular activities",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.futurecofund.com/",
    title: "Fund the Future",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TRPCReactProvider>
          <div className="flex flex-col">{children}</div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
