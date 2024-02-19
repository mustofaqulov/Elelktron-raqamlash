import PropTypes from "prop-types";
import "./inputOrg.scss";

export const InputOrg = ({
  readOnly,
  forHtml,
  placeholder,
  name,
  style,
  icon,
  type,
  change,
}) => {
  return (
    <>
      <label htmlFor={forHtml}>{name}</label>
      <div className="search" style={style}>
        <input
          onChange={change}
          readOnly={readOnly}
          type={type}
          id={forHtml}
          placeholder={placeholder}
        />
        {icon}
      </div>
    </>
  );
};

InputOrg.propTypes = {
  forHtml: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  icon: PropTypes.node,
  readOnly: PropTypes.node,
  type: PropTypes.string,
  change: PropTypes.func,
};

InputOrg.defaultProps = {
  change: () => {},
  forHtml: "",
  placeholder: "",
  name: "",
  type: "",
  style: {},
  icon: null,
  readOnly: null,
};
