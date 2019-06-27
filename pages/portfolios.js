import React, { Component } from "react";
import axios from "axios";
import BaseLayout from "../components/layouts/BaseLayout";
import Link from "next/link";

export default class Portfolios extends Component {
  static async getInitialProps() {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const posts = res.data;
      return { posts: posts.slice(0, 10) };
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    return (
      <BaseLayout>
        <ul>
          {this.props.posts.map(post => (
            <li key={post.id}>
              <Link
                as={`/portfolio/${post.id}`}
                href={`/portfolio?title=${post.id}`}
              >
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </BaseLayout>
    );
  }
}
