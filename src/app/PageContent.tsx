"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { WindowHeader } from "@/components/customer-health/WindowHeader";
import { CustomerHealthToolbar } from "@/components/customer-health/CustomerHealthToolbar";
import { CustomerTable } from "@/components/customer-health/CustomerTable";
import { CustomerDetailsSheet } from "@/components/customer-health/CustomerDetailSheet";

export default function PageContent() {
  const [search, setSearch] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedCustomer = searchParams.get("customer");

  function selectCustomer(name: string) {
    const params = new URLSearchParams(searchParams);
    params.set("customer", name);
    router.push(`?${params.toString()}`);
  }

  function clearSelection() {
    const params = new URLSearchParams(searchParams);
    params.delete("customer");

    const query = params.toString();
    router.push(query ? `?${query}` : ".");
  }

  return (
    <div className="flex flex-col h-full bg-[#c0c0c0] border">
      <WindowHeader title="CLIENT_DIRECTORY.DB" />

      <CustomerHealthToolbar search={search} onSearchChange={setSearch} />

      <div className="flex-1 overflow-auto bg-white border">
        <CustomerTable
          selectedCustomer={selectedCustomer}
          onSelectCustomer={selectCustomer}
        />

        <CustomerDetailsSheet
          customerName={selectedCustomer}
          onClose={clearSelection}
        />
      </div>
    </div>
  );
}
