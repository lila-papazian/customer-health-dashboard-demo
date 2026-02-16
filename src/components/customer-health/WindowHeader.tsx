import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  onMinimize?: () => void;
  onMaximize?: () => void;
  onClose?: () => void;
};

export function WindowHeader({
  title,
  onMinimize,
  onMaximize,
  onClose,
}: Props) {
  return (
    <div className="bg-[#000080] text-white px-2 py-1 flex justify-between items-center select-none">
      <span className="font-mono font-bold text-sm tracking-wider truncate">
        {title}
      </span>

      <div className="flex gap-1">
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={onMinimize}
          className="
            w-4 h-4 p-0
            bg-[#c0c0c0] text-black
            border border-gray-700
            hover:bg-[#d6d6d6]
            active:translate-y-[1px]
          "
        >
          _
        </Button>

        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={onMaximize}
          className="
            w-4 h-4 p-0
            bg-[#c0c0c0] text-black
            border border-gray-700
            hover:bg-[#d6d6d6]
            active:translate-y-[1px]
          "
        >
          □
        </Button>

        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={onClose}
          className="
            w-4 h-4 p-0
            bg-[#c0c0c0] text-black
            border border-gray-700
            hover:bg-[#d6d6d6]
            active:translate-y-[1px]
          "
        >
          ×
        </Button>
      </div>
    </div>
  );
}
