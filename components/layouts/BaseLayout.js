import React, { Fragment } from "react";
import Header from "../shared/Header";
import Head from "next/head";

const BaseLayout = props => {
  const { className, children, isAuthenticated, title } = props;
  const headerType = props.headerType || "default";
  return (
    <div className="layout-container">
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="My name is Matthew Mbonu and I am a passionate software engineer and freelance developer."
        />
        <meta
          name="keywords"
          content="Matthew portfolio, Matthew developer, Matthew freelancing, Matthew programming"
        />
        <meta
          property="og:title"
          content="Matthew Mbonu - programmer, developer, bloger"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="My name is Matthew Mbonu  and I am a passionate software engineer and freelance developer."
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossOrigin="anonymous"
        />
        <link
          rel="icon"
          type="image/ico"
          href="/static/favicon.ico/favicon.ico"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header
        className={`port-nav-${headerType}`}
        isAuthenticated={isAuthenticated}
      />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
    </div>
  );
};

export default BaseLayout;
