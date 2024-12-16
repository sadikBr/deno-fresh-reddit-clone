import { PageProps } from "$fresh/server.ts";
import TopSection from "../../components/TopSections.tsx";
import Posts from "../../islands/posts.tsx";


export const handler: Handlers = {
  async POST(req, context) {
    const form = await req.formData();
    const searchTerm = form.get("searchTerm")?.toString();
    const sort = {
      path: form.get("sortType")?.toString() ?? "hot",
      period: form.get("sortPeriod")?.toString()
    };

    const urlSuffix = sort.path === "hot" || sort.path === "new" ? `?path=${sort.path}` : `?path=${sort.path}&period=${sort.period}`;

    if (!searchTerm) {
      return context.render({
        message: "Please provide a search term before submitting the form.",
      });
    }

    // Redirect user to thank you page.
    const headers = new Headers();
    headers.set("location", `/subreddit/${encodeURIComponent(searchTerm)}${urlSuffix}`);

    return new Response(null, {
      status: 303, // See Other
      headers,
    });
  },
};

export default function SubredditPage(props: PageProps) {
  const { username } = props.params;

  return (
    <>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <TopSection
          user
          subreddit={username.split("%20").map((part) =>
            part.charAt(0).toUpperCase() + part.substring(1)
          ).join("")}
          sort={{ path: "hot" }}
        />
      </div>
      <Posts kind="user" subreddit={username} />
    </>
  );
}
