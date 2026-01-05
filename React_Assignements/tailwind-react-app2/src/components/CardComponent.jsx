export default function CardComponent() {
  return (
    <div className="bg-white rounded shadow-lg p-4 w-72">
      <img src="https://via.placeholder.com/300" className="rounded mb-3" />
      <h3 className="text-lg font-semibold">Card Title</h3>
      <p className="text-gray-600 text-sm my-2">
        This is a sample card description.
      </p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Read More
      </button>
    </div>
  );
}
