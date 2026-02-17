"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

type Props = {
  customerName: string | null;
  onClose: () => void;
};

export function CustomerDetailsSheet({ customerName, onClose }: Props) {
  return (
    <Sheet
      open={!!customerName}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <SheetContent
        side="right"
        className="
          w-[380px]
          bg-[#c0c0c0]
          border-l border-gray-400
          !rounded-none
        "
      >
        <SheetHeader>
          <SheetTitle className="font-mono text-sm">{customerName}</SheetTitle>
          <SheetDescription className="sr-only">
            Customer details panel with health, usage, and notes
          </SheetDescription>
        </SheetHeader>

        <div className="mt-4 space-y-4 text-sm font-mono">
          <div className="bg-white border border-gray-300 p-2">
            <strong>Status</strong>
            <p>Mock customer status</p>
          </div>

          <div className="bg-white border border-gray-300 p-2">
            <strong>Usage</strong>
            <p>Mock usage data</p>
          </div>

          <div className="bg-white border border-gray-300 p-2">
            <strong>Notes</strong>
            <p>No notes yet</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
