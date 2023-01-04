import PostItem from "~/components/PostItem";
import { posts } from "~/lib/static-data";

export default function BlogsPage({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <PostItem
          title={post}
          href={`/blogs/${post?.toLowerCase().replace(/\s/g, "-")}`}
          key={post}
        />
      ))}
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts,
      key: "blogs-page",
    },
  };
}
