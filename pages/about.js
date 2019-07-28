import React, { Component } from "react";
import BasePage from "../components/layouts/BasePage";
import BaseLayout from "../components/layouts/BaseLayout";

class About extends React.Component {
  render() {
    return (
      <BaseLayout title="Matthew Mbonu - Learn More About Me">
        <BasePage className="about-page">
          <section className="row-container">
            <div className="col-1-of-2">
              <div className="left-side">
                <h1 className="title fadein">Hi, My Name's Matt</h1>
                <h4 className="subtitle fadein">
                  And I'm Passionate About Software Engineering
                </h4>
                <p className="subsubTitle fadein u-margin-bottom-large">
                  It's nice to meet you!
                </p>
              </div>
              <div className="fadein about__img-container">
                <img
                  className="about__image"
                  alt="photo of myself"
                  src="/static/images/me-edit.jpg"
                />
              </div>
            </div>
            <div className="col-1-of-2">
              <div className="fadein about right-side">
                <h2 className="other-title fadein">
                  Here is a little bit about me!
                </h2>
                <p className="u-margin-bottom-small">
                  My name is Matthew Mbonu and I'm a web developer from Atlanta,
                  GA.{" "}
                </p>

                <p className="u-margin-bottom-small">
                  I enjoy turning complex problems into simple, beautiful and
                  intuitive designs. When I'm not coding, tweeting or pushing
                  pixels, you'll find me cooking, gardening or travelling all
                  over the world! I enjoy working on teams and building
                  meaningful things from scratch. As a web developer, I enjoy
                  using my obsessive attention to detail, my unequivocal love
                  for making things, and my mission-driven work ethic to
                  literally change the world. That's why I’m excited to make a
                  big impact at a high growth company!
                </p>

                <div>
                  <ul className="icons">
                    <li className="icons__list-item">
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/matthew-mbonu-6a057114a"
                      >
                        <span className="icons__item">
                          <i class="fab fa-linkedin-in" />
                        </span>
                      </a>
                    </li>
                    <li className="icons__list-item">
                      <a target="_blank" href="https://github.com/MattMbonu">
                        <span className="icons__item">
                          <i class="fab fa-github" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
