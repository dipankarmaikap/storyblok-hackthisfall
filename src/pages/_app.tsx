import type { AppProps } from "next/app";
import "~/styles/tailwind.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  // Use the layout defined at the page level, if available

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
