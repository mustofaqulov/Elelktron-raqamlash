import PropTypes from "prop-types";
import "./inputOrg.scss";

export const InputOrg = ({ value, placeholder, name }) => {
  return (
    <>
      <label htmlFor={value}>{name}</label>
      <div className="search">
        <input type="text" id={value} placeholder={placeholder} />
      </div>
    </>
  );
};

InputOrg.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

InputOrg.defaultProps = {
  value: "",
  placeholder: "",
  name: "",
};
