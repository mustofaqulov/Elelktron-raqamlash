import PropTypes from "prop-types";
import "./input.scss";

export const Input = ({ value, setValue, placeholder, name }) => {
  return (
    <>
      <label htmlFor={value}>
        {name}
        <span>*</span>
      </label>
      <div className="search">
        <input
          type="text"
          value={value}
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

Input.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  value: "",
  setValue: () => {},
  placeholder: "",
  name: "",
};
