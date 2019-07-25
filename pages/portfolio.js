import React, { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/layouts/BasePage";
import { withRouter } from "next/router";
import axios from "axios";

class Portfolio extends Component {
  static async getInitialProps({ query }) {
    try {
      const postId = query.id;
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
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>{title}</h1>
          <p>{body}</p>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withRouter(Portfolio);
