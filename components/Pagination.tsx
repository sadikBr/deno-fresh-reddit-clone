type PaginationProps = {
  kind: "subreddt" | "user";
  next: string;
  previous: string;
}

export default function Pagination({ kind, next, previous }: PaginationProps) {
  const previousURL = kind === "user" ? "u/something" : "r/something";
  const nextURL = kind === "user" ? "u/other-something" : "r/other-something";

  return <div>
    {previous && <a href={previousURL}></a>}
    {next && <a href={nextURL}></a>}
  </div>
}
