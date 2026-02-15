type Props = {
  status: "Healthy" | "Warning" | "High Risk" | "Critical";
};

const statusStyles: Record<Props["status"], string> = {
  Healthy: "bg-green-200 text-black",
  Warning: "bg-yellow-200 text-black",
  "High Risk": "bg-red-200 text-black",
  Critical: "bg-red-700 text-white font-bold",
};

export function StatusBadge({ status }: Props) {
  return (
    <span
      className={`
        inline-block
        px-1.5 py-0.5
        text-[10px] uppercase font-bold
        ${statusStyles[status]}
      `}
    >
      {status}
    </span>
  );
}
