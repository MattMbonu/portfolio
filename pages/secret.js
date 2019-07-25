import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/layouts/BasePage";
import withAuth from "../components/hoc/withAuth";
import { getSecretData } from "../actions";

import axios from "axios";

class Secret extends React.Component {
  state = {
    secretData: []
  };
  async componentDidMount() {
    const secretData = await getSecretData();
    this.setState({ secretData });
  }
  displaySecretData() {
    const { secretData } = this.state;
    if (secretData && secretData.length > 0) {
      return secretData.map((secret, index) => (
        <div key={index}>
          <h2>{secret.title}</h2>
          <p>{secret.desc}</p>
        </div>
      ));
    } else return;
  }
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="about-page">
          <h1>I am Secret Page</h1>
          <p>this is so secrets</p>
          {this.displaySecretData()}
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth()(Secret);
