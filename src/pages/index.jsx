import {
  getStoryblokApi,
  StoryblokComponent,
  useStoryblokState,
} from "@storyblok/react";
import { Fragment } from "react";
import FeaturedPostsSection from "~/components/FeaturedPostsSection";
import FeaturedProjectsSection from "~/components/FeaturedProjectsSection";
import HeroSection from "~/components/HeroSection";

export default function HomePage({ story }) {
  // console.log(story);
  return (
    <Fragment>
      <HeroSection />
      <FeaturedPostsSection />
      <FeaturedProjectsSection />
    </Fragment>
  );
}
export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";

  // load the draft version
  let sbParams = {
    version: "draft", // or 'published'
  };
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      key: "home-page",
      // story: data ? data.story : false,
    },
    revalidate: 60,
  };
}
