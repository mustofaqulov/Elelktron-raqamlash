import PropTypes from "prop-types";
import "./inputOrg.scss";

export const InputOrg = ({ value, setValue, placeholder, name }) => {
  return (
    <>
      <label htmlFor={value}>
        {name}
        <span>*</span>
      </label>
      <div className="search">
        <input
          type="text"
          id={value}
          placeholder={placeholder}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
    </>
  );
};

InputOrg.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

InputOrg.defaultProps = {
  value: "",
  setValue: () => {},
  placeholder: "",
  name: "",
};
