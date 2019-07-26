import React, { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/layouts/BasePage";
import Card from "../components/card/Card";

export default class Portfolios extends Component {
  state = {
    portfolios: [0, 1, 2]
  };
  render() {
    return (
      <BaseLayout title="Matthew Mbonu - Projects" {...this.props.auth}>
        <BasePage className="portfolios-page" title="Portfolios">
          {this.state.portfolios.map((portfolio, index) => {
            return <Card key={index} />;
          })}
        </BasePage>
      </BaseLayout>
    );
  }
}
