import PostPage from "~/components/PostPage";

export default function BlogPage({ slug }) {
  return <PostPage />;
}
export async function getStaticProps({ params: { slug } }) {
  return {
    props: {
      slug,
      key: JSON.stringify(slug),
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
