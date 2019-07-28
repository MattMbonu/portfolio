import React, { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import Typed from "react-typed";
import { Link } from "../routes";

export default class Index extends Component {
  render() {
    return (
      <BaseLayout
        className="cover"
        title="Matthew Mbonu - Portfolio"
        headerType="index"
        {...this.props.auth}
      >
        <section className="main-section">
          <div className="row-container">
            <div className="col-1-of-2">
              <div className="hero-section">
                <div className={`flipper`}>
                  <div className="back">
                    <div className="hero-section-content">
                      <h2> Full Stack Web Developer </h2>
                      <div className="hero-section-content-intro">
                        Have a look at my portfolio.
                      </div>
                    </div>
                    <img className="image" src="/static/images/section-1.png" />
                    <div className="shadow-custom">
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-2">
              <div className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Hi my name is Matthew Mbonu and I enjoy building beautiful
                    user interfaces from scratch. Welcome to my Site! get
                    informed, collaborate, and discover projects I have been
                    working on!
                  </h1>
                </div>
                <Typed
                  loop
                  typeSpeed={90}
                  backSpeed={20}
                  strings={[
                    "Developer",
                    "Tech Lover",
                    "Team Player!",
                    "Javascript",
                    "React js",
                    "Node js",
                    "Express",
                    "Dart",
                    "Flutter"
                  ]}
                  smartBackspace
                  shuffle={false}
                  backDelay={1}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                  className="self-typed"
                />
                <div className="hero-welcome-bio">
                  <h1>Let's take a look at my work.</h1>
                  <Link route="/portfolios">
                    <a className="btn btn--white btn--animated u-margin-top-med u-margin-bottom-large">
                      Check Out some Projects
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BaseLayout>
    );
  }
}
