import { posts } from "~/lib/static-data";
import PostItem from "./PostItem";

export default function FeaturedPostsSection() {
  return (
    <section className="my-8">
      <p className="p-4 font-serif text-lg">Featured posts</p>
      <div className="recent-posts">
        {posts.map((post) => (
          <PostItem
            title={post}
            href={`/blogs/${post?.toLowerCase().replace(/\s/g, "-")}`}
            key={post}
          />
        ))}
      </div>
    </section>
  );
}
