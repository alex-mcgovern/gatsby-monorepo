import React from "react";
import { AuthenticatedRoute } from "@alexmcgovern/gatsby-shared";
import { Kanban } from "../components/Kanban";

export default function KanbanDemoPage() {
  return <AuthenticatedRoute returnTo="/demo" component={Kanban} />;
}
