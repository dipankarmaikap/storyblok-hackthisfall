import Link from "next/link";
export default function PostItem({ title, href }) {
  return (
    <article className="border-b border-gray-700 p-4 lg:py-6">
      <h2>
        <Link
          className="post text-5xl lg:text-7xl font-black"
          href={href ?? "/"}
        >
          {title}
        </Link>
      </h2>
    </article>
  );
}
