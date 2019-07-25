import React, { Component } from "react";
import BasePage from "../components/layouts/BasePage";
import BaseLayout from "../components/layouts/BaseLayout";

export default class Cv extends Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>this is a cv page</h1>
        </BasePage>
      </BaseLayout>
    );
  }
}
