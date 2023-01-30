import Layout from "~/components/fixed/Layout";
import "~/styles/globals.css";
import FeaturedPostsSection from "~/components/FeaturedPostsSection";
import DefaultPage from "~/components/DefaultPage";
import HeroSection from "~/components/HeroSection";
import FeaturedProjectsSection from "~/components/FeaturedProjectsSection";
import { storyblokInit, apiPlugin } from "@storyblok/react";
let components = {
  FeaturedPostsSection,
  page: DefaultPage,
  HeroSection,
  FeaturedProjectsSection,
};
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACESS_TOKEN,
  use: [apiPlugin],
  components,
});
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
