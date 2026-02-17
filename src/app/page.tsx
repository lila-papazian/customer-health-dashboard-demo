"use client";

import { useState } from "react";
import { WindowHeader } from "@/components/customer-health/WindowHeader";
import { CustomerHealthToolbar } from "@/components/customer-health/CustomerHealthToolbar";
import { CustomerTable } from "@/components/customer-health/CustomerTable";

export default function Page() {
  const [search, setSearch] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState<string | null>(null);

  return (
    <div className="flex flex-col h-full bg-[#c0c0c0] border">
      <WindowHeader title="CLIENT_DIRECTORY.DB" />

      <CustomerHealthToolbar search={search} onSearchChange={setSearch} />

      <div className="flex-1 overflow-auto bg-white border">
        <CustomerTable
          selectedCustomer={selectedCustomer}
          onSelectCustomer={setSelectedCustomer}
        />
      </div>
    </div>
  );
}
