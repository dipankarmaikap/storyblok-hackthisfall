import { blogData } from "~/lib/static-data";
import Author from "./Author";

export default function PostPage() {
  return (
    <div className="max-w-[800px] mx-auto p-4">
      <article className="prose prose-lg sm:prose-xl max-w-none prose-h1:my-0 sm:prose-h1:my-0 mt-8 sm:mt-16">
        <header className="text-center flex flex-col items-center">
          <h1>Your fancy blog post title will show here</h1>
          <div className="my-2 sm:my-4">
            <p className="leading-snug">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              dolorem, alias debitis voluptatum quae quam hic! Aliquam facere
              culpa assumenda enim neque nobis eius et illum debitis, iste
              maxime fugiat?
            </p>
          </div>
          <Author published_at={new Date()} />
        </header>
        <main
          className="border-b mt-12"
          dangerouslySetInnerHTML={{ __html: blogData }}
        />
      </article>
    </div>
  );
}
