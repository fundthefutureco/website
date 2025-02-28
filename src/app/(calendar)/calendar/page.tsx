import React, { Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreateMeeting } from "./_components/create-meeting-modal";
import { Display } from "./_components/display";
import { CalendarHero } from "@/components/calendar-hero";
export default function Page() {
  return (
    <main className="container">
      <CalendarHero />

      <Tabs defaultValue="table">
        <div className="flex flex-row justify-between pb-4">
          <div className="flex">
            <TabsList>
              <TabsTrigger value="table">Table View</TabsTrigger>
              <div className="hidden md:block">
                <TabsTrigger value="calendar">Calendar View</TabsTrigger>
              </div>
            </TabsList>
          </div>
          <Suspense fallback="loading">
            <CreateMeeting />
          </Suspense>
        </div>
        <div className="rounded-2xl border border-border bg-white p-8 dark:bg-[#121212] md:p-10">
          <TabsContent value="table">
            <Suspense fallback="loading">
              <Display />
            </Suspense>
          </TabsContent>
          <TabsContent value="calendar"></TabsContent>
        </div>
      </Tabs>
    </main>
  );
}

export const experimental_ppr = true;
