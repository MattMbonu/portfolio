import React from "react";
import Navigation from "./Navigation";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { isAuthenticated, className } = this.props;
    return (
      <div>
        <header className={`port-navbar port-nav-base absolute ${className}`}>
          <div className="port-navbar-brand">
            <h1>Matthew Mbonu</h1>
          </div>
          <Navigation />
        </header>
      </div>
    );
  }
}
