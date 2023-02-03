/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { heroData } from "~/lib/static-data";

export default function HeroSection() {
  let { headline, sub_headline, description } = heroData;
  return (
    <section
      id="HeroSection"
      className="HeroSection border-b border-gray-700 py-8 lg:py-16 px-6"
    >
      <div className="max-w-screen-lg mx-auto text-center">
        <p className="font-serif text-lg font-semibold">{sub_headline}</p>
        <h1 className="text-7xl lg:text-9xl font-black my-8">{headline}</h1>
        <p className="text-xl lg:text-3xl font-serif leading-relaxed my-8">
          {description}
        </p>
        <Link href="/blogs">
          <a className="uppercase font-bold text-lg lg:text-xl underline">
            My Blogs
          </a>
        </Link>
      </div>
    </section>
  );
}
