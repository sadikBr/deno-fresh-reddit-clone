// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $index from "./routes/index.tsx";
import * as $subreddit_searchTerm_ from "./routes/subreddit/[searchTerm].tsx";
import * as $posts from "./islands/posts.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/joke.ts": $api_joke,
    "./routes/index.tsx": $index,
    "./routes/subreddit/[searchTerm].tsx": $subreddit_searchTerm_,
  },
  islands: {
    "./islands/posts.tsx": $posts,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
