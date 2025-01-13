"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/header";

export default function DonatePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    amount: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement donation processing
    console.log("Form submitted:", formData);
  };

  return (
    <main className="container mx-auto py-20">
      <Header />
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Fund the Future</h1>
          <p className="text-lg text-[#707070]">
            Your donation helps us support innovative student projects and create lasting impact in our community.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 rounded-lg border border-border bg-white p-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john.doe@example.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Donation Amount ($)</Label>
            <Input
              id="amount"
              name="amount"
              type="number"
              required
              min="1"
              value={formData.amount}
              onChange={handleChange}
              placeholder="100"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Share why you're supporting our cause..."
              className="min-h-[100px]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-orange-500 text-white hover:bg-orange-600"
          >
            Complete Donation
          </Button>
        </form>
      </div>
    </main>
  );
}
