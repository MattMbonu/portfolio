import React, { Component } from "react";
import BasePage from "../components/layouts/BasePage";
import BaseLayout from "../components/layouts/BaseLayout";
import { Link } from "../routes";

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
                  GA 💪{" "}
                </p>

                <p className="u-margin-bottom-small">
                  I love turning complex problems into simple, beautiful and
                  intuitive designs. When I'm not coding, tweeting or pushing
                  pixels, you'll find me cooking, gardening or travelling all
                  over the world! I enjoy working on teams and building
                  meaningful things from scratch. As a web developer, I also
                  enjoy using my obsessive attention to detail, my unequivocal
                  love for making things, and my mission-driven work ethic to
                  produce the highest quality experience for users. That's why
                  I’m excited to make a big impact at a high growth company!
                </p>
                <p>
                  I'm a big fan of React for frontend development and Node for
                  backend but I also love coding in Python, Dart (with Flutter),
                  jQuery, vanilla Javascript, and some React frameworks like
                  Nextjs for SSR (i.e. this website) and Meteor{" "}
                </p>

                <div className="u-margin-bottom-med">
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
                    <li className="icons__list-item">
                      <a href="mailto:mcmbonu1@gmail.com">
                        <span className="icons__item">
                          <i class="fas fa-envelope" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <h4>Like What You're Hearing? Want To Get In Touch? </h4>
                <Link route="/contact">
                  <a className="btn btn--green btn--animated u-margin-top-med u-margin-bottom-large">
                    Contact Me!
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
