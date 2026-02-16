import { HealthScoreBar } from "./HealthScoreBar";
import { StatusBadge } from "./StatusBadge";

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

type Props = {
  name: string;
  score: number;
  status: string;
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
    <tr className="border-b border-gray-300 hover:bg-blue-100">
      {/* Client name */}
      <td className="p-2 border-r border-gray-300 font-bold">
        {name}
      </td>

      {/* Health score */}
      <td className="p-2 border-r border-gray-300">
        <HealthScoreBar value={score} />
      </td>

      {/* Status */}
      <td className="p-2 border-r border-gray-300">
        {/* <StatusBadge status={status} /> */}
      </td>

      {/* Users */}
      <td className="p-2 border-r border-gray-300">
        {users.toLocaleString()}
      </td>

      {/* Action */}
      <td className="p-2">
        <button
          className={`
            text-[10px] uppercase
            px-2 py-0.5
            border
            ${action.className}
            hover:brightness-105
            active:translate-y-[1px]
          `}
        >
          {action.label}
        </button>
      </td>
    </tr>
  );
}
