import { WindowHeader } from "@/components/customer-health/WindowHeader";
import { CustomerHealthToolbar } from "@/components/customer-health/CustomerHealthToolbar";
import { CustomerTable } from "@/components/customer-health/CustomerTable";

export default function CustomerHealthPage() {
  return (
    <div className="flex flex-col h-full bg-[#c0c0c0] border">
      <WindowHeader title="CLIENT_DIRECTORY.DB" />
      <CustomerHealthToolbar />
      <div className="flex-1 overflow-auto bg-white border">
        <CustomerTable />
      </div>
    </div>
  );
}
