"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {
  search: string;
  onSearchChange: (value: string) => void;
  onSortClick?: () => void;
};

export function CustomerHealthToolbar({
  search,
  onSearchChange,
  onSortClick,
}: Props) {
  return (
    <div className="flex gap-2 bg-[#c0c0c0] p-1 border-b border-white">
      <div className="flex-1 flex items-center bg-white border border-gray-400 px-2">
        <span className="text-gray-400 mr-2 text-xs">
          🔍
        </span>

        <Input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search clients..."
          className="
            h-auto
            border-0 p-0
            bg-transparent
            outline-none
            focus-visible:ring-0
            text-sm font-mono
          "
        />
      </div>

      <Button
        type="button"
        onClick={onSortClick}
        variant="ghost"
        className="
          px-4 py-1
          h-auto
          text-xs font-mono text-black
          bg-[#c0c0c0]
          border border-gray-700
          hover:bg-[#c0c0c0]
          hover:brightness-105
            active:translate-y-[1px]
          focus-visible:ring-0
          !rounded-none
        "
      >
        Sort
      </Button>
    </div>
  );
}
