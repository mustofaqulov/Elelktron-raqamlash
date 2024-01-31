import "./button.scss";
import PropTypes from 'prop-types';


export function Button({ title, icon }) {
  return (
    <>
      <button>{title} {icon}</button>
    </>
  );
}

Button.defaultProps = {
  title: null,
  icon: null,

}
Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node
}