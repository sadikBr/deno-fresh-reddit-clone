export default function SearchForm({ searchTerm, sort }: { searchTerm: string, sort: { path: string; period?: string } }) {
  return (
    <form
      method="POST"
      className="bg-white p-1 rounded-lg flex items-center gap-1"
    >
      <div class="min-w-[400px] max-w-sm md:max-w-lg flex flex-col md:flex-row md:items-center gap-1">
        <input
          type="text"
          value={searchTerm}
          name="searchTerm"
          placeholder="Search Input"
          class="p-2 w-full rounded-md"
        />
        <div class="flex items-center gap-1">
          <select name="sortType" class="p-2 rounded-md" value={sort.path}>
            <option value="hot" class="p-2">HOT</option>
            <option value="new" class="p-2">NEW</option>
            <option value="top" class="p-2">TOP</option>
          </select>
          <select name="sortPeriod" class="p-2 rounded-md" value={sort?.period ?? 'all'}>
            <option value="all" class="p-2">ALL</option>
            <option value="week" class="p-2">WEEK</option>
            <option value="day" class="p-2">DAY</option>
          </select>
          <button
            type="submit"
            class="bg-yellow-400 flex-1 text-white px-6 py-2 rounded-md border border-yellow-300 font-bold hover:bg-yellow-300 transition"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}
