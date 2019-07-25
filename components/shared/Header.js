import React from "react";
import { Link } from "../../routes";
import auth0 from "../../services/Auth0";

const BsNavLink = ({ path, title }) => (
  <Link route={path}>
    <a className="nav-link port-navbar-link">{title}</a>
  </Link>
);
const Login = () => (
  <span onClick={auth0.login} className="nav-link port-navbar-link clickable">
    Login
  </span>
);
const Logout = () => (
  <span onClick={auth0.logout} className="nav-link port-navbar-link clickable">
    Logout
  </span>
);

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
    const { isAuthenticated } = this.props;
    return (
      <div>
        <header className="port-navbar port-default absolute">
          <div className="port-navbar-brand">
            <h1>Matthew Mbonu</h1>
          </div>

          <nav className="nav">
            <ul className="nav__list">
              <li className="port-navbar-item">
                <BsNavLink path="/" title="Home" />
              </li>
              <li className="port-navbar-item">
                <BsNavLink path="/blogs" title="Blog" />
              </li>
              <li className="port-navbar-item">
                <BsNavLink path="/portfolios" title="Portfolios" />
              </li>
              <li className="port-navbar-item">
                <BsNavLink path="/cv" title="CV" />
              </li>
              <li className="port-navbar-item">
                <BsNavLink path="/about" title="About" />
              </li>
              {!isAuthenticated && (
                <li className="port-navbar-item">
                  <Login />
                </li>
              )}
              {isAuthenticated && (
                <li className="port-navbar-item">
                  <Logout />
                </li>
              )}
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
