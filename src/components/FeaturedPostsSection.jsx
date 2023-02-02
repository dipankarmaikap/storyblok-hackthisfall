import Link from "next/link";
import { posts } from "~/lib/static-data";

export default function FeaturedPostsSection() {
  let title = "Featured posts";
  return (
    <section id="FeaturedPostsSection" className="FeaturedPostsSection my-8">
      <p className="p-4 font-serif text-lg">{title}</p>
      <div className="recent-posts">
        {posts.map((post) => (
          <article
            key={post.id}
            className="border-b border-gray-700 p-4 lg:py-6"
          >
            <h2>
              <Link href={post.full_slug}>
                <a className="post text-5xl lg:text-7xl font-black">
                  {post.name}
                </a>
              </Link>
            </h2>
          </article>
        ))}
      </div>
    </section>
  );
}
