import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
} from "@/components/ui/table";

import { CustomerRow } from "./CustomerRow";
import type { CustomerStatus } from "./CustomerRow";

type Customer = {
  name: string;
  score: number;
  status: CustomerStatus;
  users: number;
};

const mockData: Customer[] = [
  { name: "Acme Corp", score: 24, status: "High Risk", users: 120 },
  { name: "Globex Inc", score: 92, status: "Healthy", users: 450 },
  { name: "Initech", score: 65, status: "Warning", users: 85 },
];


export function CustomerTable() {
  return (
    <Table className="text-sm font-mono">
      <TableHeader className="bg-[#dfdfdf] sticky top-0">
        <TableRow>
          {[
            "CLIENT_NAME",
            "HEALTH_SCORE",
            "STATUS",
            "USERS",
            "ACTION",
          ].map((h) => (
            <TableHead
              key={h}
              className="p-2 border-r border-gray-300 text-left"
            >
              {h}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {mockData.map((c) => (
          <CustomerRow key={c.name} {...c} />
        ))}
      </TableBody>
    </Table>
  );
}
