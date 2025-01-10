import React from "react";
import { CreateMeetingModal } from "./create-meeting";
import { auth } from "@/server/auth";

export async function CreateMeeting() {
  const session = await auth();

  if (session?.user.role !== "ADMIN") {
    return null;
  }
  return <CreateMeetingModal />;
}
