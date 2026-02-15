import type { ReactNode } from "react";

export default function CustomerHealthLayout({
  children,
  panel,
}: {
  children: ReactNode;
  panel: ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col">
      <header className="border-b bg-white px-6 py-4">
        <h1 className="text-lg font-semibold">Customer Health</h1>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>

        <aside className="w-[420px] border-l bg-white overflow-auto">
          {panel}
        </aside>
      </div>
    </div>
  );
}
