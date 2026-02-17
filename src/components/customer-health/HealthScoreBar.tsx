import { Progress } from "@/components/ui/progress";

type Props = { value: number };

export function HealthScoreBar({ value }: Props) {
  const indicatorColor =
    value >= 80
      ? "[&>div]:bg-green-600"
      : value >= 50
        ? "[&>div]:bg-yellow-500"
        : "[&>div]:bg-red-600";

  const textColor =
    value >= 80
      ? "text-green-700"
      : value >= 50
        ? "text-yellow-700"
        : "text-red-700";

  return (
    <div className="flex items-center gap-2">
      <span className={`text-xs font-mono ${textColor}`}>
        {value}%
      </span>

      <Progress
        value={value}
        className={[
          "h-2 bg-gray-200 border border-gray-300 overflow-hidden !rounded-none",
          "[&>div]:h-full [&>div]:!rounded-none",
          indicatorColor,
        ].join(" ")}
      />
    </div>
  );
}
