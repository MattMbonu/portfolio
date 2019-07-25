import React, { Component } from "react";
import BasePage from "../components/layouts/BasePage";
import BaseLayout from "../components/layouts/BaseLayout";

export default class Blogs extends Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1> I am a blogs page</h1>
        </BasePage>
      </BaseLayout>
    );
  }
}
