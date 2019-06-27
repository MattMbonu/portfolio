import React, { Component } from "react";
import Link from "next/link";
import BaseLayout from "../components/layouts/BaseLayout";
import { withRouter } from "next/router";
import axios from "axios";

class Portfolio extends Component {
  static async getInitialProps({ query }) {
    try {
      const postId = query.title;
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const post = res.data;
      return { post };
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { title, body } = this.props.post;
    return (
      <BaseLayout>
        <h1>{title}</h1>
        <p>{body}</p>
      </BaseLayout>
    );
  }
}

export default withRouter(Portfolio);
