import { Fragment } from "react";
import FeaturedPostsSection from "~/components/FeaturedPostsSection";
import FeaturedProjectsSection from "~/components/FeaturedProjectsSection";
import HeroSection from "~/components/HeroSection";

export default function HomePage() {
  return (
    <Fragment>
      <HeroSection />
      <FeaturedPostsSection />
      <FeaturedProjectsSection />
    </Fragment>
  );
}
export async function getStaticProps() {
  return {
    props: {
      key: "home-page",
      story: null,
    },
    revalidate: 60,
  };
}
