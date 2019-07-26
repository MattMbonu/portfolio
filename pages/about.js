import React, { Component } from "react";
import BasePage from "../components/layouts/BasePage";
import BaseLayout from "../components/layouts/BaseLayout";

class About extends React.Component {
  render() {
    return (
      <BaseLayout
        title="Matthew Mbonu - Learn More About Me"
        {...this.props.auth}
      >
        <BasePage className="about-page">
          <section className="row-container">
            <div className="col-1-of-2">
              <div className="left-side">
                <h1 className="title fadein">Hello, Welcome</h1>
                <h4 className="subtitle fadein">To About Page</h4>
                <p className="subsubTitle fadein">
                  Feel free to read short description about me.
                </p>
              </div>
            </div>
            <div className="col-1-of-2">
              <div className="fadein">
                <p>
                  My name is Matthew Mbonu and I passionate about all things Web
                  Development.{" "}
                </p>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div>links</div>
              </div>
            </div>
          </section>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
