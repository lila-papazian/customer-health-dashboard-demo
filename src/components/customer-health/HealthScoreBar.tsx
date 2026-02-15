export function HealthScoreBar({ value }: { value: number }) {
  const color =
    value >= 80 ? "bg-green-600"
    : value >= 50 ? "bg-yellow-500"
    : "bg-red-600";

  return (
    <div className="flex items-center gap-2">
      <span className={`text-xs ${color.replace("bg", "text")}`}>
        {value}%
      </span>

      <div className="w-[60px] h-2 bg-gray-200 border border-gray-300">
        <div
          className={`h-full ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
