import "./header.scss";
import PropTypes from "prop-types";
import LogoIcon from "../../assets/icon/logo.svg?react";

export function Header({ user }) {
  return (
    <>
      <div className="container">
        <div className="navigatoin">
          <div className="logo">
            <LogoIcon />
          </div>
          <div className="created">{user}</div>
        </div>
      </div>
    </>
  );
}


Header.defaultProps = {
  user: null,
};

Header.propTypes = {
  user: PropTypes.node,
};
