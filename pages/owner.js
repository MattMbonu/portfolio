import React, { Component } from "react";
import BasePage from "../components/layouts/BasePage";
import BaseLayout from "../components/layouts/BaseLayout";
import withAuth from "../components/hoc/withAuth";

class Owner extends Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>this is a Owner page</h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth("siteOwner")(Owner);
