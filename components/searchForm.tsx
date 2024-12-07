export default function SearchForm() {
  return (
    <form
      method="POST"
      className="bg-white p-1 rounded-lg flex items-center gap-1"
    >
      <input
        type="text"
        name="searchTerm"
        placeholder="Search Input"
        class="p-2 rounded-md"
      />
      <button
        type="submit"
        class="bg-yellow-400 text-white px-6 py-2 rounded-md border border-yellow-300 font-bold hover:bg-yellow-300 transition"
      >
        Search
      </button>
    </form>
  );
}
