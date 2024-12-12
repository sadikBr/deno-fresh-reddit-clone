import type { PostData } from "../types/reddit-types.d.ts";
import { extractPostData } from "../utils/extractPostData.ts";
import { ComponentChild } from "preact/src/index.js";

import { formatNumber } from '../utils/formaters.ts'

interface PostRendererProps {
  post: PostData;
}

interface PostLayoutProps {
  children: ComponentChild;
  rest: {
    title: string;
    author: string;
    subreddit: string;
    url: string;
    likes: number;
  };
}

function PostLayout({ children, rest }: PostLayoutProps) {
  return (
    <div class="relative group bg-green-400 p-2 rounded-lg shadow-md mb-4 overflow-hidden">
      <div class="absolute z-10 -top-full group-hover:-top-full md:group-hover:top-0 right-0 bg-green-400 p-4 text-white w-full transition">
        <h1 class="line-clamp-1 text-lg font-semibold">{rest.title}</h1>
        <div class="text-sm">
          Created by <span class="font-bold">{rest.author}</span> on{" "}
          <a
            class="text-yellow-400 font-bold"
            href={`./${rest.subreddit}`}
          >
            r/{rest.subreddit}
          </a>
        </div>
      </div>
      {children}
      <div class="mt-4 block md:hidden text-white">
        <div class="flex items-center justify-between">
          <h1 class="mb-1 line-clamp-1 text-lg font-semibold">{rest.title}</h1>
          <span class="font-extrabold text-xl">{formatNumber(rest.likes)}</span>
        </div>
        <div class="text-sm">
          Created by <span class="font-bold">{rest.author}</span> on{" "}
          <a
            class="text-yellow-400 font-bold"
            href={`./${rest.subreddit}`}
          >
            r/{rest.subreddit}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PostRenderer({ post }: PostRendererProps) {
  const { kind, ...rest } = extractPostData(post);

  switch (kind) {
    case "image":
      return (
        <PostLayout rest={rest}>
          <img
            src={rest.url}
            alt={rest.title}
            loading="lazy"
            className="rounded-md w-full max-h-[800px] bg-black"
          />
        </PostLayout>
      );
    case "video":
      return (
        <PostLayout rest={rest}>
          <video
            src={rest.url}
            controls
            loading="lazy"
            className="rounded-md w-full max-h-[800px] bg-black"
          />
        </PostLayout>
      );
    default:
      return null;
  }
}
