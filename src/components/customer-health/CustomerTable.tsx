import { CustomerRow } from "./CustomerRow";

const mockData = [
  { name: "Acme Corp", score: 24, status: "High Risk", users: 120 },
  { name: "Globex Inc", score: 92, status: "Healthy", users: 450 },
  { name: "Initech", score: 65, status: "Warning", users: 85 },
];

export function CustomerTable() {
  return (
    <table className="w-full border-collapse text-sm font-mono">
      <thead className="bg-[#dfdfdf] sticky top-0">
        <tr>
          {["CLIENT_NAME", "HEALTH_SCORE", "STATUS", "USERS", "ACTION"].map(
            (h) => (
              <th key={h} className="p-2 border-r text-left">
                {h}
              </th>
            )
          )}
        </tr>
      </thead>

      <tbody>
        {mockData.map((c) => (
          <CustomerRow key={c.name} {...c} />
        ))}
      </tbody>
    </table>
  );
}
