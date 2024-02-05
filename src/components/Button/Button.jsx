import PropTypes from "prop-types";
import './button.scss'

export function Button({ icons, text }) {
  return (
    <>
      <button>
       {text}  {icons}
      </button>
    </>
  );
}

Button.defaultProps = {
  icons: null,
  text: null,
};

Button.propTypes = {
  icons: PropTypes.node,
  text: PropTypes.string,
};
