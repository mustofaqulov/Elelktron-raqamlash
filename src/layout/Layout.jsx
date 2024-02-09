import PropTypes from "prop-types";

export function Layout({ children }) {
  return (
    <>
      <main className="main-content">
        {children}
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
