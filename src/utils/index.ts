import { IEngine } from "@/types";

export const sortByPriority = (engines: IEngine[]) => {
  // priority = failure - timeToMaintenance
  return engines.sort(
    (a, b) =>
      a.failure - a.timeToMaintenance - (b.failure - b.timeToMaintenance)
  );
};
