import React from "react";
import BasePage from "../components/layouts/BasePage";
import BaseLayout from "../components/layouts/BaseLayout";
import auth0Client from "../services/Auth0";
import { withRouter } from "next/router";

class Callback extends React.Component {
  async componentDidMount() {
    try {
      await auth0Client.handleAuthentication();
      this.props.router.push("/");
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    return (
      <BaseLayout>
        <BasePage>
          <h1> Verifying login data... </h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withRouter(Callback);
