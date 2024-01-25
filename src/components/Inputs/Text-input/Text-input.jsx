import { PropTypes } from "prop-types";
import "./Text-input.scss";

export const TextInput = ({
  placeholder,
  label,
  classInp,
  type,
  id,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}:</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={classInp}
      />
    </>
  );
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  classInp: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
};

TextInput.defaultProps = {
  placeholder: "",
  value: "",
  label: "",
  classInp: "",
  type: "text",
  id: "",
};
