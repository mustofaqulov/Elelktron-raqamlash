import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Layout({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("accesstoken")) {
      navigate("/login");
    }
  }),
    [];
  return (
    <>
      <main className="main-content">{children}</main>
    </>
  );
}

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node,
};
