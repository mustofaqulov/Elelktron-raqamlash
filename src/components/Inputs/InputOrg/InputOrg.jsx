import PropTypes from "prop-types";
import "./inputOrg.scss";

export const InputOrg = ({
  readOnly,
  value,
  placeholder,
  name,
  style,
  icon,
  type,
}) => {
  return (
    <>
      <label htmlFor={value}>{name}</label>
      <div className="search" style={style}>
        <input
          readOnly={readOnly}
          type={type}
          id={value}
          placeholder={placeholder}
        />
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
  readOnly: PropTypes.node,
  type: PropTypes.string,
};

InputOrg.defaultProps = {
  value: "",
  placeholder: "",
  name: "",
  type: "",
  style: {},
  icon: null,
  readOnly: null,
};
