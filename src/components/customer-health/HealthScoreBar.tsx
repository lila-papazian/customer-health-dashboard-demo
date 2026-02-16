import { Progress } from "@/components/ui/progress";

type Props = {
  value: number;
};

function getScoreClasses(value: number) {
  if (value >= 80) {
    return {
      bar: "bg-green-600",
      text: "text-green-700",
    };
  }

  if (value >= 50) {
    return {
      bar: "bg-yellow-500",
      text: "text-yellow-700",
    };
  }

  return {
    bar: "bg-red-600",
    text: "text-red-700",
  };
}

export function HealthScoreBar({ value }: Props) {
  const { bar, text } = getScoreClasses(value);

  return (
    <div className="flex items-center gap-2">
      {/* Percentage */}
      <span className={`text-xs font-mono ${text}`}>
        {value}%
      </span>

      {/* Progress bar */}
      <Progress
        value={value}
        className={`
          w-[60px] h-2
          bg-gray-200
          border border-gray-300
          !rounded-none
          [&>div]:${bar}
          [&>div]:!rounded-none
        `}
      />
    </div>
  );
}
