export function WindowHeader({ title }: { title: string }) {
  return (
    <div className="bg-[#000080] text-white px-2 py-1 flex justify-between items-center select-none">
      <span className="font-mono font-bold text-sm tracking-wider truncate">
        {title}
      </span>

      <div className="flex gap-1">
        {["_", "□", "×"].map((label) => (
          <button
            key={label}
            className="w-4 h-4 bg-[#c0c0c0] border border-gray-700 text-black text-[10px] font-bold"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
