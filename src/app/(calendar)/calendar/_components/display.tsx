import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
} from "@/components/ui/sheet";
import { cache } from "@/lib/cache";
import { db } from "@/server/db";
import { format } from "date-fns";
import { CalendarIcon, ClockIcon, MapPin } from "lucide-react";
import React from "react";

const getEvents = cache(
  async () => {
    return await db.query.events.findMany({
      columns: {
        id: true,
        name: true,
        location: true,
        date: true,
      },
      where: (events, { gte }) => gte(events.date, new Date()),
      orderBy: (meetings, { asc }) => asc(meetings.date),
      limit: 4,
    });
  },
  ["events"],
  { tags: ["events"] },
);

export const Display = async () => {
  const data = await getEvents();

  return (
    <div className="flex flex-col md:flex-row md:space-x-16">
      <div className="flex w-full flex-col gap-3">
        {!data || (data?.length === 0 && <p>No upcoming meetings</p>)}
        {data?.map((meeting) => <Item key={meeting.id} data={meeting} />)}
      </div>
    </div>
  );
};

export const Item = ({
  data,
}: {
  data: Awaited<ReturnType<typeof getEvents>>[number];
}) => {
  const { name, date, location } = data;
  const getTimeFormat = (date: Date): string => {
    // am or pm
    return format(date, "h:mm a");
  };
  const getDateFormat = (date: Date): string => {
    return format(date, "MMMM d, yyyy EEEE");
  };
  return (
    <Sheet>
      <SheetTrigger>
        <Card className={`mx-auto w-full max-w-sm items-start hover:bg-muted`}>
          <CardHeader>
            <CardTitle className="overflow-y-clip">{name}</CardTitle>
            <CardDescription>
              {getDateFormat(date)} - {getTimeFormat(date)}
            </CardDescription>
          </CardHeader>
        </Card>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex flex-row items-center justify-between align-middle text-xl font-semibold">
          {name}
        </SheetHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-row gap-4">
            <CalendarIcon />
            {getDateFormat(date)}
          </div>

          <div className="flex flex-row gap-4">
            <ClockIcon />
            {getTimeFormat(date)}
          </div>

          <div className="flex flex-row gap-4">
            <MapPin />
            {location}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
