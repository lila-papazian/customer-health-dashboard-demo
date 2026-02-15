import Link from "next/link";

export default async function CustomerHealthPage() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">
        Customer table will be rendered here.
      </p>

      <ul className="space-y-2">
        <li className="rounded border bg-white p-3">
          <Link
            href="/customer-health/customer/1"
            className="text-blue-600 hover:underline"
          >
            Acme Corp
          </Link>
        </li>

        <li className="rounded border bg-white p-3">
          <Link
            href="/customer-health/customer/2"
            className="text-blue-600 hover:underline"
          >
            Beta Inc
          </Link>
        </li>
      </ul>
    </div>
  );
}
