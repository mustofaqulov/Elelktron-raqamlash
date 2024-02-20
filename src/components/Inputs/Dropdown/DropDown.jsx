import { useState } from "react";
import { PropTypes } from "prop-types";
import ArrowDown from "../../../assets/icon/search.svg";

export const Dropdown = ({ data, value, setValue, placeholder }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="search" onClick={() => setModal(!modal)}>
        <input
          type="text"
          value={value}
          id={value}
          placeholder={placeholder}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <img
          onClick={() => setModal(!modal)}
          style={{ cursor: "pointer" }}
          src={ArrowDown}
          alt=""
        />
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
};

Dropdown.defaultProps = {
  data: [],
  value: "",
  setValue: () => {},
  placeholder: "",
};
