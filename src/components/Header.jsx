import Link from "next/link";
export default function Header() {
  return (
    <header className="border-b border-gray-700 px-4 py-6">
      <div className="flex flex-wrap justify-between items-center">
        <Link className="text-2xl block font-bold py-2" href="/">
          Getting started with headless
        </Link>
        <nav className="flex space-x-4 text-lg font-serif">
          <Link href="/">Home</Link>
          <Link href="/blogs">Blogs</Link>
        </nav>
      </div>
    </header>
  );
}
