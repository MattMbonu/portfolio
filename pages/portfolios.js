import React, { Component } from "react";
import axios from "axios";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/layouts/BasePage";
import { Link } from "../routes";

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
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <ul>
            {this.props.posts.map(post => (
              <li key={post.id}>
                <Link route={`/portfolio/${post.id}`}>
                  <a>{post.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </BasePage>
      </BaseLayout>
    );
  }
}
