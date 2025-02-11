import { ApplyHero } from "@/components/apply-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ApplyPage() {
  return (
    <>
      <ApplyHero />
      <main className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Grant Application Form</h2>
            <form className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="mt-1"
                    />
                  </div>
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
                  />
                </div>
                <div>
                  <label htmlFor="school" className="block text-sm font-medium text-gray-700">
                    School Name
                  </label>
                  <Input
                    type="text"
                    id="school"
                    name="school"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="grade" className="block text-sm font-medium text-gray-700">
                    Grade Level
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select Grade</option>
                    <option value="9">9th Grade</option>
                    <option value="10">10th Grade</option>
                    <option value="11">11th Grade</option>
                    <option value="12">12th Grade</option>
                  </select>
                </div>
              </div>

              {/* Grant Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Grant Details</h3>
                <div>
                  <label htmlFor="activity" className="block text-sm font-medium text-gray-700">
                    Activity or Program Name
                  </label>
                  <Input
                    type="text"
                    id="activity"
                    name="activity"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                    Requested Amount ($)
                  </label>
                  <Input
                    type="number"
                    id="amount"
                    name="amount"
                    required
                    min="1"
                    step="1"
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">
                    Purpose of Funding
                  </label>
                  <textarea
                    id="purpose"
                    name="purpose"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Please describe how you plan to use the grant..."
                  />
                </div>
                <div>
                  <label htmlFor="impact" className="block text-sm font-medium text-gray-700">
                    Expected Impact
                  </label>
                  <textarea
                    id="impact"
                    name="impact"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="How will this funding help you achieve your goals?"
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
