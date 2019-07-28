import React from "react";
import BasePage from "../components/layouts/BasePage";
import BaseLayout from "../components/layouts/BaseLayout";
import { Link } from "../routes";
import Router from "next/router";

class Thanks extends React.Component {
  componentDidMount() {
    setTimeout(() => Router.push("/"), 4000);
  }
  render() {
    return (
      <BaseLayout title="Matthew Mbonu - Thank You!">
        <BasePage className="Thanks-page">
          <h1>Thank You So Much For Your Inquiry</h1>
          <h2>I will contanct you as soon as possible!</h2>
          <Link route="/">
            <a className="btn btn--white btn--animated u-margin-top-med">
              Click Here To Be Redirected
            </a>
          </Link>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Thanks;
