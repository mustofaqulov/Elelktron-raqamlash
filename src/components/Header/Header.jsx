import "./header.scss";
import NumberLogo from "../../assets/icons/logo.svg?react";
import PropTypes from "prop-types";

export function Header({ user, info, login }) {
  return (
    <>
      <nav>
        <div className="container">
          <div className="navigation">
            <div className="header-logo">
              <NumberLogo />
              <p>Elektron raqamlash</p>
            </div>
            <div className="about-btn">
              {user}
              {login}
              {info}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Header.defaultProps = {
  login: null,
  info: null,
  user: null,
};
Header.propTypes = {
  login: PropTypes.string,
  info: PropTypes.node,
  user: PropTypes.node,
};
