import React from "react";
import App, { Container } from "next/app";
import Auth0 from "../services/Auth0";
//Common styling
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    const user = process.browser
      ? await Auth0.clientAuth()
      : await Auth0.serverAuth(ctx.req);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const auth = { user, isAuthenticated: !!user };

    return { pageProps, auth };
  }

  render() {
    const { Component, pageProps, auth } = this.props;

    return (
      <Container>
        <Component {...pageProps} auth={auth} />
      </Container>
    );
  }
}

export default MyApp;
