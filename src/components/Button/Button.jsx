import PropTypes from "prop-types";
import "./button.scss";
import classNames from "classnames";

export function Button({ icons, text, styleBtn, btnClass, type }) {
  const buttonClass = classNames("btn", {
    ["primary"]: btnClass === "primary",
    ["secondary"]: btnClass === "secondary",
  });
  return (
    <>
      <button type={type} className={buttonClass} style={styleBtn}>
        {text} {icons}
      </button>
    </>
  );
}

Button.defaultProps = {
  btnClass: "",
  styleBtn: {},
  icons: null,
  text: null,
};

Button.propTypes = {
  type: PropTypes.oneOf(["submit", "button"]),
  btnClass: PropTypes.oneOf(["primary", "secondary"]),
  icons: PropTypes.node,
  text: PropTypes.string,
  styleBtn: PropTypes.object,
};
