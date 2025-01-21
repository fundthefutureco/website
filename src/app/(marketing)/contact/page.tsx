export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-20">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Contact Us</h1>
        <p className="text-xl text-gray-600">We&apos;d love to hear from you</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="max-w-2xl rounded-lg bg-white p-8 shadow-md">
          <p className="mb-6 text-gray-700">
            Have questions about Fund the Future? Want to get involved or learn
            more about our programs? We&apos;re here to help!
          </p>

          <div className="mb-6">
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
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
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              Response Time
            </h2>
            <p className="text-gray-700">
              We strive to respond to all inquiries within 1-5 business days.
              Thank you for your patience.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
