import { PageProps } from "$fresh/server.ts";
import { Handlers } from "$fresh/server.ts";
import TopSection from "../../components/TopSections.tsx";
import Posts from "../../islands/posts.tsx";

export const handler: Handlers = {
  async POST(req, context) {
    const form = await req.formData();
    const searchTerm = form.get("searchTerm")?.toString();

    if (!searchTerm) {
      return context.render({
        message: "Please provide a search term before submitting the form.",
      });
    }

    // Redirect user to thank you page.
    const headers = new Headers();
    headers.set("location", `/subreddit/${searchTerm}`);

    return new Response(null, {
      status: 303, // See Other
      headers,
    });
  },
};

export default function SubredditPage(props: PageProps) {
  const { searchTerm } = props.params;
  const { data } = props;

  const message = data?.message;

  return (
    <>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <TopSection
          message={message}
          subreddit={searchTerm.split("%20").map((part) =>
            part.charAt(0).toUpperCase() + part.substring(1)
          ).join("")}
        />
      </div>
      <Posts subreddit={searchTerm} />
    </>
  );
}
