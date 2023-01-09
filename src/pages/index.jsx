import {
  getStoryblokApi,
  StoryblokComponent,
  useStoryblokState,
} from "@storyblok/react";

export default function HomePage({ story }) {
  story = useStoryblokState(story);
  // console.log(story);
  return <StoryblokComponent blok={story.content} />;
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
      story: data ? data.story : false,
    },
    revalidate: 60,
  };
}
