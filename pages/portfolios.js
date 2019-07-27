import React, { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/layouts/BasePage";
import Card from "../components/card/Card";
import PORTFOLIODATA from "../helpers/utils";

export default class Portfolios extends Component {
  state = {
    portfolios: PORTFOLIODATA
  };
  render() {
    return (
      <BaseLayout title="Matthew Mbonu - Projects" {...this.props.auth}>
        <BasePage className="portfolios-page" title="Personal Projects">
          <div className="row-container u-margin-top-med">
            {this.state.portfolios.map((portfolio, index) => {
              return <Card {...portfolio} key={index} index={index} />;
            })}
          </div>
          {/* <div className="row-container">
            {this.state.portfolios.map((portfolio, index) => {
              return <Card {...portfolio} key={index} index={index} />;
            })}
          </div> */}
        </BasePage>
      </BaseLayout>
    );
  }
}
