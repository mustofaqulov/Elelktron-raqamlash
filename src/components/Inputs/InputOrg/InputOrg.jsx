import PropTypes from "prop-types";
import "./inputOrg.scss";

export const InputOrg = ({ value, placeholder, name, style, icon, type }) => {
  return (
    <>
      <label htmlFor={value}>{name}</label>
      <div className="search" style={style}>
        <input type={type} id={value} placeholder={placeholder} />
        {icon}
      </div>
    </>
  );
};

InputOrg.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  icon: PropTypes.node,
  type: PropTypes.string,
};

InputOrg.defaultProps = {
  value: "",
  placeholder: "",
  name: "",
  type: "",
  style: {},
  icon: null,
};
