import SearchForm from "./searchForm.tsx";

interface TopSectionProps {
  message: string | undefined;
  subreddit?: string;
  user?: boolean;
  sort?: {
    path: string;
    period?: string
  }
}

export default function TopSection({ user, message, subreddit, sort }: TopSectionProps) {
  return (
    <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
      <a href="/">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
      </a>
      <h1 class="text-4xl font-bold flex items-center justify-center text-center">
        Reddit Clone - {subreddit ? `${user ? 'u' : 'r'}/${subreddit}` : "Fresh Version"}
      </h1>
      {message && (
        <small class="text-pink-700 font-semibold mt-6">{message}</small>
      )}
      <p class="my-4">
        <SearchForm searchTerm={subreddit} sort={sort} />
      </p>
    </div>
  );
}
