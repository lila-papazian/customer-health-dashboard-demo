import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
} from "@/components/ui/table";

import { CustomerRow } from "./CustomerRow";
import { mockData } from "@/lib/mocks";

type Props = {
  selectedCustomer: string | null;
  onSelectCustomer: (name: string) => void;
};

export function CustomerTable({ selectedCustomer, onSelectCustomer }: Props) {
  return (
    <Table className="text-sm font-mono">
      <TableHeader className="bg-[#dfdfdf] sticky top-0">
        <TableRow>
          {["CLIENT_NAME", "HEALTH_SCORE", "STATUS", "USERS", "ACTION"].map(
            (h) => (
              <TableHead
                key={h}
                className="p-2 border-r border-gray-300 text-left"
              >
                {h}
              </TableHead>
            ),
          )}
        </TableRow>
      </TableHeader>

      <TableBody>
        {mockData.map((c) => (
          <CustomerRow
            key={c.name}
            {...c}
            isSelected={selectedCustomer === c.name}
            onSelect={() => onSelectCustomer(c.name)}
          />
        ))}
      </TableBody>
    </Table>
  );
}
