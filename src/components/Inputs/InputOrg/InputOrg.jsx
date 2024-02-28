import PropTypes from "prop-types";
import "./inputOrg.scss";
import { useForm } from "react-hook-form";
export const InputOrg = ({
  readOnly,
  forHtml,
  placeholder,
  name,
  style,
  icon,
  type,
  change,
  objKey,
}) => {
  // console.log(objKey);
  const { register } = useForm();
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
          {...register("name")}
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
  objKey: PropTypes.string,
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
  objKey: "",
};
