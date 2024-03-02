import { useState } from "react";
import { PropTypes } from "prop-types";
import { useForm } from "react-hook-form";

export const Dropdown = ({ data, value, setValue }) => {
  const [modal, setModal] = useState(false);
  const { register } = useForm();

  return (
    <>
      <div className="search" onClick={() => setModal(!modal)}>
        <div
          className="reg"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          {...register("hgg")}
        >
          {value}
        </div>
      </div>
      {modal && data && (
        <ul name={value} value={value} onClick={() => setModal(!modal)}>
          {data.map((item, index) => (
            <li
              key={index}
              name={item.name_uz}
              onClick={() => setValue(item.name_uz)}
            >
              {item.name_uz}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

Dropdown.propTypes = {
  data: PropTypes.array,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  setValue: PropTypes.func,
  registerName: PropTypes.string,
};

Dropdown.defaultProps = {
  data: [],
  value: "",
  setValue: () => {},
  placeholder: "",
  registerName: "",
};
