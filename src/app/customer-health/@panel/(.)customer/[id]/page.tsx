export default async function CustomerPanel({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="p-6 space-y-2">
      <h2 className="text-lg font-medium">
        Customer {params.id}
      </h2>

      <p className="text-sm text-gray-500">
        Health details will load here.
      </p>
    </div>
  );
}
