import type { CustomerStatus } from "./CustomerRow";

type ActionConfig = {
  label: string;
  className: string;
};

export const actionMap: Record<CustomerStatus, ActionConfig> = {
  Healthy: {
    label: "VIEW",
    className: "bg-green-200 text-black border-green-700",
  },
  Warning: {
    label: "REVIEW",
    className: "bg-yellow-200 text-black border-yellow-700",
  },
  "High Risk": {
    label: "INVESTIGATE",
    className: "bg-red-200 text-black border-red-700",
  },
  Critical: {
    label: "ESCALATE",
    className: "bg-red-700 text-white border-red-900 font-bold",
  },
};
