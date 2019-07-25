import React, { Component, Fragment } from "react";
import axios from "axios";
import BaseLayout from "../components/layouts/BaseLayout";
import { Button, Container, Row, Col } from "reactstrap";
import Typed from "react-typed";

export default class Index extends Component {
  render() {
    const { user, isAuthenticated } = this.props.auth;
    return (
      <BaseLayout className="cover" {...this.props.auth}>
        <div className="main-section">
          <div className="background-image">
            <img src="/static/images/background-index.png" />
          </div>

          <Container>
            <Row>
              <Col xs="12" sm="12" md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio.
                        </div>
                      </div>
                      <img
                        className="image"
                        src="/static/images/section-1.png"
                      />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs="12" sm="12" md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Hello{" "}
                    {isAuthenticated && (
                      <span>
                        <b>{user.name}</b>
                      </span>
                    )}{" "}
                    {""} Welcome to the portfolio website of Matthew Mbonu. Get
                    informed, collaborate, and discover projects I have been
                    working on!
                  </h1>
                </div>
                <Typed
                  loop
                  typeSpeed={90}
                  backSpeed={20}
                  strings={["Developer", "Tech Lover", "Team Player!"]}
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
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    );
  }
}
