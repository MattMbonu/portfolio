import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/layouts/BasePage";

class About extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="about-page">
          <p>This is the about page</p>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
