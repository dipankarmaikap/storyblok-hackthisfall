import Link from "next/link";
import { posts } from "~/lib/static-data";

export default function FeaturedPostsSection() {
  return (
    <section className="my-8">
      <p className="p-4 font-serif text-lg">Featured posts</p>
      <div className="recent-posts">
        {posts.map((post) => (
          <article key={post} className="border-b border-gray-700 p-4 lg:py-6">
            <h2>
              <Link
                className="post text-5xl lg:text-7xl font-black"
                href={`/blogs/${post?.toLowerCase().replace(/\s/g, "-")}`}
              >
                {post}
              </Link>
            </h2>
          </article>
        ))}
      </div>
    </section>
  );
}
