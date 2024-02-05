import PropTypes from "prop-types";
import "./input.scss";

export const InputOrg = ({ value, placeholder, name, type }) => {
  return (
    <>
      <label htmlFor={value}>{name}</label>
      <div className="search">
        <input type={type} id={value} placeholder={placeholder} />
      </div>
    </>
  );
};

InputOrg.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

InputOrg.defaultProps = {
  value: "",
  type: "",
  placeholder: "",
  name: "",
};
