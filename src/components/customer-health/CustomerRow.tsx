import {
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HealthScoreBar } from "./HealthScoreBar";

const actionMap: Record<
  string,
  { label: string; className: string }
> = {
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

export type CustomerStatus =
  | "Healthy"
  | "Warning"
  | "High Risk"
  | "Critical";

type Props = {
  name: string;
  score: number;
  status: CustomerStatus;
  users: number;
};

export function CustomerRow({
  name,
  score,
  status,
  users,
}: Props) {
  const action = actionMap[status];

  return (
    <TableRow className="hover:bg-blue-100">
      {/* Client name */}
      <TableCell className="p-2 border-r border-gray-300 font-bold">
        {name}
      </TableCell>

      {/* Health score */}
      <TableCell className="p-2 border-r border-gray-300">
        <HealthScoreBar value={score} />
      </TableCell>

      {/* Status */}
      <TableCell className="p-2 border-r border-gray-300">
        <Badge
          variant="outline"
          className={`
            text-[10px] uppercase font-bold
            border
            ${action.className}
            !rounded-none
          `}
        >
          {status}
        </Badge>
      </TableCell>

      {/* Users */}
      <TableCell className="p-2 border-r border-gray-300">
        {users.toLocaleString()}
      </TableCell>

      {/* Action */}
      <TableCell className="p-2">
        <Button
          variant="ghost"
          className={`
            text-[10px] uppercase
            px-2 py-0.5 h-auto
            border
            ${action.className}
            hover:brightness-105
            active:translate-y-[1px]
            focus-visible:ring-0
            !rounded-none
          `}
        >
          {action.label}
        </Button>
      </TableCell>
    </TableRow>
  );
}
