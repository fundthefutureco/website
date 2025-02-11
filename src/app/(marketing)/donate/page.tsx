import { DonateHero } from "@/components/donate-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DonatePage() {
  return (
    <>
      <DonateHero />
      <main className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Make a Donation</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                  Donation Amount ($)
                </label>
                <Input
                  type="number"
                  id="amount"
                  name="amount"
                  required
                  min="1"
                  step="1"
                  className="mt-1"
                  placeholder="50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Share why you're making this donation..."
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Complete Donation
              </Button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}