import PropTypes from "prop-types";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("accesstoken")) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
}

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node,
};
