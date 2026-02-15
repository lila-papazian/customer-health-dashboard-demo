export function CustomerHealthToolbar() {
  return (
    <div className="flex gap-2 bg-[#c0c0c0] p-1 border-b border-white">
      <div className="flex-1 flex items-center bg-white border border-gray-400 px-2">
        <span className="text-gray-400 mr-2">🔍</span>
        <input
          placeholder="Search clients..."
          className="w-full bg-transparent outline-none text-sm font-mono"
        />
      </div>

      <button className="px-4 py-1 text-xs bg-[#c0c0c0] border border-gray-700">
        Sort
      </button>
    </div>
  );
}
