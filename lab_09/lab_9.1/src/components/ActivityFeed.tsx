import { memo } from "react";

export const ActivityFeed = memo(function ActivityFeed() {
  console.log("ActivityFeed render");
  return <div><p>Activity Feed (No props)</p></div>;
});
