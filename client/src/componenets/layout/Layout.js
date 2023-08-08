import React from "react";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";
// SEO
import { Helmet } from "react-helmet";

export const Layout = ({ children, title, description, keywords, author }) => {
  // for seo
  return (
    <div>
      {/* //helmet for seo */}
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <Footer></Footer>
    </div>
  );
};

//Seo default value
Layout.defaultProps = {
  title: "Watch Store - shop now",
  description: "MERN stack project",
  keywords: "mern, react, node, mongodb",
  author: "SiamSaleh",
};
