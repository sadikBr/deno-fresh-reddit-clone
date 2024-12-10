import { useEffect, useState } from "preact/hooks";
import PostRenderer from "../components/PostRenderer.tsx";
import type { Post } from "../types/reddit-types.d.ts";
import filterResponse from "../utils/filterResponse.ts";

interface PostsProps {
  subreddit: string;
  limit?: number;
}

export default function Posts({ subreddit, limit = 100 }: PostsProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch(
          `https://www.reddit.com/r/${
            subreddit.replaceAll("%20", "")
          }.json?limit=${limit}`,
        );
        const json = await response.json();
        let posts = filterResponse(json.data?.children || []);

        if (posts.length === 0) {
          // Fetch another endpoint. https://www.reddit.com/search?q={something}
          const searchResponse = await fetch(
            `https://www.reddit.com/search.json?q=${
              subreddit.replaceAll("%20", " ")
            }&limit=100`,
          );
          const searchJson = await searchResponse.json();

          posts = filterResponse(searchJson.data?.children || []);
        }

        setPosts(posts);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something Went Wrong!");
      } finally {
        setLoading(false);
      }
    }
    getPosts();
  }, []);

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      {loading && <div>Loading ....</div>}
      {!loading && error.length > 0 && <div>{error}</div>}
      {(!loading && posts.length > 0) &&
        (
          <div className="columns-1 lg:columns-2">
            {posts.map((post: Post) => (
              <PostRenderer key={post.data.id} post={post.data} />
            ))}
          </div>
        )}
      {!loading && !error && posts.length === 0 && (
        <div className="w-full flex items-center justify-center">
          Subreddit Not Found
        </div>
      )}
    </div>
  );
}
