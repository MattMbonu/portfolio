import React, { Component, Fragment } from "react";
import Link from "next/link";
import "../../styles/main.scss";
import axios from "axios";

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/blogs">
          <a>Blog</a>
        </Link>
        <Link href="/portfolios">
          <a>Portfolios</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/cv">
          <a>CV</a>
        </Link>
      </Fragment>
    );
  }
}
