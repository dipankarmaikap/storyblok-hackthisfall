import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}
