import { auth } from "@/server/auth";
import React from "react";
import { CreateMeetingModal } from "./create-meeting";
export async function CreateMeeting() {
  const session = await auth();
  if (!session) {
    return null;
  }

  //add an admin check her
  return <CreateMeetingModal />;
}
