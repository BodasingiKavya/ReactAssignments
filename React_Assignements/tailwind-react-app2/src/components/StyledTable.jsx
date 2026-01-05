export default function StyledTable() {
  return (
    <table className="w-full border border-gray-300">
      <thead className="bg-gray-200">
        <tr>
          <th className="border p-2">Name</th>
          <th className="border p-2">Role</th>
          <th className="border p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {["Alice", "Bob", "Charlie", "David"].map((name, i) => (
          <tr
            key={i}
            className="odd:bg-white even:bg-gray-100 hover:bg-gray-200"
          >
            <td className="border p-2">{name}</td>
            <td className="border p-2">User</td>
            <td className="border p-2">Active</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
