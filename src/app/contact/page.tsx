import Head from "next/head";
import { Header } from "@/components/header";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - Fund the Future</title>
        <meta name="description" content="Get in touch with Fund the Future" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50 text-center">
        <Header />
        <main className="container mx-auto px-4 py-20">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
              We'd love to hear from you
            </p>
          </div>
        <div className="flex flex-col items-center">
          <div className="max-w-2xl bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-6">
              Have questions about Fund the Future? Want to get involved or learn more about our programs? 
              We're here to help!
            </p>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Email Us
              </h2>
              <p className="text-gray-700">
                You can reach us at:{" "}
                <a 
                  href="mailto:fundthefutureco@gmail.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  fundthefutureco@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Response Time
              </h2>
              <p className="text-gray-700">
                We strive to respond to all inquiries within 1-5 business days. Thank you for your patience.
              </p>
            </div>
          </div>
          </div>
        </main>
      </div>
    </>
  );
}
