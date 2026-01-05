export default function ContactForm() {
  return (
    <form className="bg-white p-6 rounded shadow-lg max-w-md space-y-4">
      <input
        type="text"
        placeholder="Name"
        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
      />
      <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}
