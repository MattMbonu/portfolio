import React, { Component } from "react";
import BasePage from "../components/layouts/BasePage";
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";
import Router from "next/router";

class Contact extends React.Component {
  state = {
    email: "",
    name: "",
    message: "",
    reasonForSending: "",
    sent: false
  };
  componentDidUpdate() {
    if (this.state.sent) {
      Router.push("/thanks");
    }
  }
  onSubmit = async e => {
    e.preventDefault();
    let { email, name, message, reasonForSending } = this.state;
    name = `${name} ${reasonForSending}`;
    message = `Email: ${email} sent: ${message}`;
    try {
      const formData = { email, name, message };
      await axios.post("/api/contact", formData);
      this.setState({ email: "", name: "", message: "", sent: true });
    } catch (error) {
      console.error(error);
      this.setState({ email: "", name: "", message: "" });
    }
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  handleReason = e => this.setState({ reasonForSending: e.target.value });
  render() {
    return (
      <BaseLayout title="Matthew Mbonu - Contact Me">
        <section className="section-book">
          <div className="row-container">
            <div className="book">
              <div className="book__form">
                <form onSubmit={this.onSubmit} className="form">
                  <div className="u-margin-bottom-med">
                    <h2 className="heading-secondary">
                      Wanna Chat Contact Me!
                    </h2>
                  </div>
                  <div className="form__group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                      placeholder="Full Name"
                      required
                      className="form__input"
                    />
                    <label htmlFor="name" className="form__label">
                      Full Name
                    </label>
                  </div>

                  <div className="form__group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      placeholder="Email Address"
                      required
                      className="form__input"
                    />
                    <label htmlFor="email" className="form__label">
                      Email Address
                    </label>
                  </div>
                  <div className="form__group">
                    <textarea
                      id="email"
                      name="message"
                      value={this.state.message}
                      onChange={this.onChange}
                      placeholder="How can I help you?"
                      required
                      className="form__input"
                    />
                    <label htmlFor="email" className="form__label">
                      Message
                    </label>
                  </div>
                  <div className="form__group u-margin-bottom-med">
                    <div className="form__radio-group">
                      <input
                        type="radio"
                        id="small"
                        name="Opportunity"
                        value="Employment Opportunity"
                        onChange={this.handleReason}
                        className="form__radio-input"
                      />
                      <label htmlFor="small" className="form__radio-label">
                        <span className="form__radio-button" />
                        Employment Opportunity!
                      </label>
                    </div>
                    <div className="form__radio-group">
                      <input
                        type="radio"
                        id="Large"
                        onChange={this.handleReason}
                        name="Opportunity"
                        value="Collaboration Opportunity"
                        className="form__radio-input"
                      />
                      <label htmlFor="Large" className="form__radio-label">
                        <span className="form__radio-button" />
                        Collaboration Request!
                      </label>
                    </div>
                  </div>
                  <div className="form__group">
                    <button className="btn btn--green">Submit &rarr;</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </BaseLayout>
    );
  }
}

export default Contact;
