"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/header";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    projectTitle: "",
    description: "",
    requestedAmount: "",
    timeline: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className="container mx-auto py-20 text-center">
      <Header />
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Grant Application</h1>
        <p className="text-[#707070]">
          Please fill out the form below to apply for a grant. We will review your
          application and get back to you as soon as possible.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-white p-8 dark:bg-[#121212] md:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization">Organization Name</Label>
            <Input
              id="organization"
              name="organization"
              required
              value={formData.organization}
              onChange={handleChange}
              placeholder="Your Organization"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="projectTitle">Project Title</Label>
            <Input
              id="projectTitle"
              name="projectTitle"
              required
              value={formData.projectTitle}
              onChange={handleChange}
              placeholder="Your Project Title"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Project Description</Label>
            <Textarea
              id="description"
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your project and its goals..."
              className="min-h-[150px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="requestedAmount">Requested Amount ($)</Label>
            <Input
              id="requestedAmount"
              name="requestedAmount"
              type="number"
              required
              value={formData.requestedAmount}
              onChange={handleChange}
              placeholder="5000"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline">Project Timeline</Label>
            <Textarea
              id="timeline"
              name="timeline"
              required
              value={formData.timeline}
              onChange={handleChange}
              placeholder="Outline your project timeline and major milestones..."
              className="min-h-[100px]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-orange-500 text-white hover:bg-orange-600"
          >
            Submit Application
          </Button>
        </form>
      </div>
    </main>
  );
}
