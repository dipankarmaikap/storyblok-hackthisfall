import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

export default function DefaultPage({ blok }) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
